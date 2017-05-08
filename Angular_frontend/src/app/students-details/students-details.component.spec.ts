import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDetailsComponent } from './students-details.component';

describe('StudentsDetailsComponent', () => {
  let component: StudentsDetailsComponent;
  let fixture: ComponentFixture<StudentsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
