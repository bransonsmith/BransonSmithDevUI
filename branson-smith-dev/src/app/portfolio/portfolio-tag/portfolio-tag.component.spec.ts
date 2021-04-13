import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioTagComponent } from './portfolio-tag.component';

describe('PortfolioTagComponent', () => {
  let component: PortfolioTagComponent;
  let fixture: ComponentFixture<PortfolioTagComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
