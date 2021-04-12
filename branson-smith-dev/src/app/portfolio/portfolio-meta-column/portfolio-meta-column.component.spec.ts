import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioMetaColumnComponent } from './portfolio-meta-column.component';

describe('PortfolioMetaColumnComponent', () => {
  let component: PortfolioMetaColumnComponent;
  let fixture: ComponentFixture<PortfolioMetaColumnComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMetaColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMetaColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
