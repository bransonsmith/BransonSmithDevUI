import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DiscgolfRoundAddComponent } from './discgolf-round-add.component';

describe('DiscgolfRoundAddComponent', () => {
  let component: DiscgolfRoundAddComponent;
  let fixture: ComponentFixture<DiscgolfRoundAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscgolfRoundAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscgolfRoundAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
