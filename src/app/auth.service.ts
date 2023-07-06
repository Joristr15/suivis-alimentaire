import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { email: 'Joris@mail.fr', password: '1234', adm: 1, name: 'Joris' },
    { email: 'user2@mail.fr', password: '1234', adm: 0, name: 'User2' }
  ];

  authenticate(email: string, password: string): Observable<any> {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return of(user);
    }
    return of(null);
  }

  getCurrentUser(): Observable<any> {
    const user = localStorage.getItem('currentUser');
    return of(user ? JSON.parse(user) : null);
  }
}
