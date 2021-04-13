import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RedditAdComponent } from './reddit-ad.component';

describe('RedditAdComponent', () => {
  let component: RedditAdComponent;
  let fixture: ComponentFixture<RedditAdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
