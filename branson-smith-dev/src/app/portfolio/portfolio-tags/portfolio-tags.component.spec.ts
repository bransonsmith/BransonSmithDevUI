import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioTagsComponent } from './portfolio-tags.component';

describe('PortfolioTagsComponent', () => {
  let component: PortfolioTagsComponent;
  let fixture: ComponentFixture<PortfolioTagsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
