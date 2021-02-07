import { TestBed } from '@angular/core/testing';

import { PlayerHoleService } from './player-hole.service';

describe('PlayerHoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerHoleService = TestBed.get(PlayerHoleService);
    expect(service).toBeTruthy();
  });
});
