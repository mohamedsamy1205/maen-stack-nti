import { Injectable, signal } from '@angular/core';

interface User {
  username: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users: User[] = [
    { username: 'admin', password: 'admin' },
    { username: 'user', password: '1234' },
    { username: 'mohamed', password: '1234' },
  ];

  // simple auth state
  readonly isAuthenticated = signal<boolean>(false);
  readonly currentUser = signal<string | null>(null);

  login(username: string, password: string): boolean {
    const match = this.users.find(u => u.username === username && u.password === password);
    if (match) {
      this.isAuthenticated.set(true);
      this.currentUser.set(match.username);
      return true;
    }
    this.isAuthenticated.set(false);
    this.currentUser.set(null);
    return false;
  }

  logout(): void {
    this.isAuthenticated.set(false);
    this.currentUser.set(null);
  }
}


