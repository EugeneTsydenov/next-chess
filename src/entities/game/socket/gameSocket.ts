import { IMoveData } from '@/entities/game/model/types/IMoveData';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { gameStore, matchmakingStore } from '@/entities/game';
import { io, Socket } from 'socket.io-client';
import { BASE_API_URL } from '@/shared/lib';
class GameSocket {
  socket: Socket<DefaultEventsMap, DefaultEventsMap> = io(`${BASE_API_URL}/game`);

  public findGame(jwt: string, gameSettings: any) {
    this.socket.emit('find_game', { jwt, gameSettings });
    matchmakingStore.setLoading(true);
  }

  public getGameState(jwt: string, roomId: string) {
    this.socket.emit('get_game', { jwt, roomId });
  }

  public move(moveData: IMoveData) {
    const roomId = localStorage.getItem('roomId');
    if (roomId) {
      this.socket.emit('move', { moveData, roomId });
    }
  }
}

export const gameSocket = new GameSocket();

gameSocket.socket.on('found_game', data => {
  matchmakingStore.setLoading(false);
  matchmakingStore.setStartGame(true);
  localStorage.setItem('roomId', data.roomId);
});

gameSocket.socket.on('state_game', data => {
  if (data.userRole === 'player') {
    gameStore.setEnemy(data.enemy);
    localStorage.setItem('roomId', data.roomId);
    gameStore.setUserSide(data.userColor);
  }
  if (data.userRole === 'watcher') {
    gameStore.setPlayers(data.players);
  }
  gameStore.setTurn(data.turn);
  gameStore.setFen(data.fen);
  gameStore.setUserRole(data.userRole);
});

gameSocket.socket.on('moved', data => {
  gameStore.setTurn(data.turn);
  gameStore.setFen(data.fen);
});
