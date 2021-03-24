import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTagComponent } from './portfolio-tag.component';

describe('PortfolioTagComponent', () => {
  let component: PortfolioTagComponent;
  let fixture: ComponentFixture<PortfolioTagComponent>;

  beforeEach(async(() => {
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
