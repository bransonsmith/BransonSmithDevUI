import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCtaBoxComponent } from './portfolio-cta-box.component';

describe('PortfolioCtaBoxComponent', () => {
  let component: PortfolioCtaBoxComponent;
  let fixture: ComponentFixture<PortfolioCtaBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioCtaBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCtaBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
