import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CourseEditorComponent } from './course-editor.component';

describe('CourseEditorComponent', () => {
  let component: CourseEditorComponent;
  let fixture: ComponentFixture<CourseEditorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
