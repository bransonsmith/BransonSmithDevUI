import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditAdComponent } from './reddit-ad.component';

describe('RedditAdComponent', () => {
  let component: RedditAdComponent;
  let fixture: ComponentFixture<RedditAdComponent>;

  beforeEach(async(() => {
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
