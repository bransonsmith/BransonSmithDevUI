import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DiscgolfNavComponent } from './discgolf-nav.component';

describe('DiscgolfNavComponent', () => {
  let component: DiscgolfNavComponent;
  let fixture: ComponentFixture<DiscgolfNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscgolfNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscgolfNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
