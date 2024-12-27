import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  logIn(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/login`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, { username, password }, { headers });
  }

  signUp(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/signup`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, { username, password }, { headers });
  }
}
