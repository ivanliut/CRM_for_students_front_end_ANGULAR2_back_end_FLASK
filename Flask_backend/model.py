from flask import Flask, jsonify, request

from flask.ext.mysqldb import MySQL


app = Flask(__name__)
app.config['MYSQL_HOST'] = 'sql11.freemysqlhosting.net'
app.config['MYSQL_USER'] = 'username'
app.config['MYSQL_PASSWORD'] = 'password'
app.config['MYSQL_DB'] = 'sql11173286'
mysql = MySQL(app)

@app.after_request
def after_request(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
        return response

@app.route('/')
def index():
        cur = mysql.connection.cursor()
        cur.execute('''SELECT * FROM students''')
        rv = cur.fetchall()
        data_to_send = []
        for i in rv:
            row_labeled = {
                "id": i[0],
                "first_name": i[1],
                "last_name": i[2],
                "email": i[3],
                "tel_number": i[4],
                "in_group": i[5],
                "date_of_creation": i[6]

            }
            data_to_send.append(row_labeled)

        return jsonify(data_to_send)

@app.route('/createStudent', methods=["POST"])
def createStudent():

        email = request.args.get('email')
        first_name = request.args.get('first_name')
        last_name = request.args.get('last_name')
        in_group = request.args.get('in_group')
        tel_number = request.args.get('tel_number')

        #let's save student's info into our database
        cur = mysql.connection.cursor()
        cur.execute('''INSERT INTO `students` (`first_name`, `last_name`, `email`, `tel_number`, `in_group`) VALUES (%s, %s, %s, %s, %s)''', (first_name, last_name, email, tel_number, in_group))
        mysql.connection.commit()

        if email and first_name and last_name and in_group and tel_number:
            return jsonify({'success': 'Everythig went successful'})


        return jsonify({'name' : 'Missing data. It didnt work'})


@app.route('/search')
def searchStudent():
    searchStr = request.args.get('searchStr')
    print(searchStr)
    cur = mysql.connection.cursor()
    searchStr = searchStr + "%"
    searchStr = str(searchStr)
    print(searchStr)
    cur.execute('''SELECT id, first_name, last_name  FROM students WHERE first_name LIKE %s''', [searchStr])
    rv = cur.fetchall()
    data_to_send = []
    for i in rv:
        row_labeled = {
            "id": i[0],
            "first_name": i[1],
            "last_name": i[2],
           }
        data_to_send.append(row_labeled)
        print(data_to_send)


    return jsonify(data_to_send)


@app.route('/getDetails')
def getDetails():
        cur = mysql.connection.cursor()
        id = request.args.get('id')
        cur.execute('''SELECT * FROM students WHERE id = %s''', (id))
        rv = cur.fetchone()
        data_to_send = []

        row_labeled = {
                "id": rv[0],
                "first_name": rv[1],
                "last_name": rv[2],
                "email": rv[3],
                "tel_number": rv[4],
                "in_group": rv[5],
                "date_of_creation": rv[6]

            }
        data_to_send.append(row_labeled)

        return jsonify(data_to_send)



if __name__ == '__main__':
        app.run(debug=True)
