import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HoleComponent } from './hole.component';

describe('HoleComponent', () => {
  let component: HoleComponent;
  let fixture: ComponentFixture<HoleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
