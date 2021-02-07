import { TestBed } from '@angular/core/testing';

import { PlayerRoundService } from './player-round.service';

describe('PlayerRoundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerRoundService = TestBed.get(PlayerRoundService);
    expect(service).toBeTruthy();
  });
});
