import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlayerHoleComponent } from './player-hole.component';

describe('PlayerHoleComponent', () => {
  let component: PlayerHoleComponent;
  let fixture: ComponentFixture<PlayerHoleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerHoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerHoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
