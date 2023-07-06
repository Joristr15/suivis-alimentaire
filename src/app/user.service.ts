import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: { name: string, adm: number } = { name: '', adm: 0 };
  private apiUrl = '../../data/database.db'; // Chemin vers votre fichier de base de données

  constructor(private http: HttpClient) { }

  setCurrentUser(user: { name: string, adm: number }): void {
    this.currentUser = user;
  }

  getCurrentUser(): { name: string, adm: number } {
    return this.currentUser;
  }

  clearCurrentUser(): void {
    this.currentUser = { name: '', adm: 0 };
  }

  getFirstUtilisateur(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/utilisateur?_limit=1`);
  }
}
