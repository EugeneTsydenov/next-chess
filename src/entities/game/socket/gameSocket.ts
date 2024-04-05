import {
  setEnemy,
  setFen,
  setGameId,
  setPlayers,
  setTurn,
  setUserRole,
  setUserSide,
} from '@/entities/game/model/redux/gameSlice';
import { setLoading, setStartGame } from '@/entities/game/model/redux/matchmakingSlice';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { io, Socket } from 'socket.io-client';
import { BASE_API_URL } from '@/shared/lib';
import { store } from '@/app/_model';

class GameSocket {
  socket: Socket<DefaultEventsMap, DefaultEventsMap> = io(`${BASE_API_URL}/game`);

  public findGame(jwt: string, gameSettings: any) {
    this.socket.emit('find_game', { jwt, gameSettings });
    store.dispatch(setLoading(true));
  }

  public getGameState(jwt: string, gameId: string) {
    this.socket.emit('get_game', { jwt, gameId });
  }
}

export const gameSocket = new GameSocket();

gameSocket.socket.on('found_game', data => {
  store.dispatch(setLoading(false));
  store.dispatch(setStartGame(true));
  store.dispatch(setGameId(data.roomId));
});

gameSocket.socket.on('state_game', data => {
  console.log(data.userColor);
  if (data.userRole === 'players') {
    store.dispatch(setEnemy(data.enemy));
  }
  if (data.userRole === 'watcher') {
    store.dispatch(setPlayers(data.players));
  }
  store.dispatch(setTurn(data.turn));
  store.dispatch(setFen(data.fen));
  store.dispatch(setUserRole(data.userRole));
  store.dispatch(setUserSide(data.userColor));
});
