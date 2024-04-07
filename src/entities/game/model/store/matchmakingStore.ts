import { makeAutoObservable } from 'mobx';

class MatchmakingStore {
  isLoading: boolean = false;
  isStartGame: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setStartGame(isStartGame: boolean) {
    this.isStartGame = isStartGame;
  }
}

export const matchmakingStore = new MatchmakingStore();
