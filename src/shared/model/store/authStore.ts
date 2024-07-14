import { makeAutoObservable } from 'mobx';

class AuthStore {
  jwt: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setJwt(jwt: string | null): void {
    this.jwt = jwt;
  }
}

export const authStore = new AuthStore();
