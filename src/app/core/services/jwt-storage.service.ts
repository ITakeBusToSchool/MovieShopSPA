import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtStorageService {

  constructor() { }
  getToken(): string {
    return localStorage.getItem('token');
  }
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }
  destroyToken() {
    localStorage.removeItem('token');
  }
}
