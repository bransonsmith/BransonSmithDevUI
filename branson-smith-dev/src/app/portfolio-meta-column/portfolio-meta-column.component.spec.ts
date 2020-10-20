import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMetaColumnComponent } from './portfolio-meta-column.component';

describe('PortfolioMetaColumnComponent', () => {
  let component: PortfolioMetaColumnComponent;
  let fixture: ComponentFixture<PortfolioMetaColumnComponent>;

  beforeEach(async(() => {
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
