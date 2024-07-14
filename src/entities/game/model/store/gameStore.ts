import { makeAutoObservable } from 'mobx';

class GameStore {
  roomId: string | null = null;
  gameMode: string | null = null;
  turn: 'w' | 'b' = 'w';
  time: {
    timeTitle: string;
    seconds: number;
  } = {
    timeTitle: '15 | 10',
    seconds: 900,
  };
  fen: string = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  enemy: string | null = null;
  players: {
    player1: {
      userId: number;
      socketId: string;
      colorSide: 'w' | 'b';
    };
    player2: {
      userId: number;
      socketId: string;
      colorSide: 'w' | 'b';
    };
  } | null = null;
  userSide: 'w' | 'b' = 'w';
  userRole: 'watcher' | 'player' = 'watcher';

  constructor() {
    makeAutoObservable(this);
  }

  setRoomId(roomId: string | null) {
    this.roomId = roomId;
  }

  setGameMode(gameMode: string | null) {
    this.gameMode = gameMode;
  }

  setTurn(turn: 'w' | 'b') {
    this.turn = turn;
  }

  setTime(time: typeof this.time) {
    this.time = time;
  }

  setFen(fen: string) {
    this.fen = fen;
  }

  setPlayers(players: typeof this.players) {
    this.players = players;
  }

  setUserSide(userSide: 'w' | 'b') {
    this.userSide = userSide;
  }

  setUserRole(userRole: 'watcher' | 'player') {
    this.userRole = userRole;
  }

  setEnemy(enemy: string | null) {
    this.enemy = enemy;
  }
}

export const gameStore = new GameStore();
