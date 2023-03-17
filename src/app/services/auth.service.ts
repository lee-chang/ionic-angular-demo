import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  authState
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  authState$ = authState(this.afAuth);

  constructor(private afAuth: Auth) {}

  async register(email: string, password: string) {
    const user = await createUserWithEmailAndPassword(this.afAuth, email, password);

    return await signInWithEmailAndPassword(this.afAuth, email, password);
  }


  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.afAuth, email, password);
  }

  async logout() {
    return await signOut(this.afAuth);
  }
}
