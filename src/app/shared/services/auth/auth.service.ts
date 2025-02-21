import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {AuthResponse, SignUpRequest, UserCredentials} from './auth.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly apiUrl = "http://localhost:8080/api/auth";
  private readonly authSubject= new BehaviorSubject<boolean>(this.isTokenAvailable());
  private readonly roleSubject = new BehaviorSubject<string | null>(null);

  constructor(private readonly http: HttpClient) {}

  getToken(): string | null {
    const jwtCookie = document.cookie.split(';').find((cookie) => cookie.startsWith('ecommJwt'));
    return jwtCookie ?? null;
  }

  login(credentials: UserCredentials) {

    this.http.post<AuthResponse>(`${this.apiUrl}/sign-in`, credentials, { withCredentials: true }).pipe(
      tap(response => {
        this.authSubject.next(true);
        this.roleSubject.next(this.extractRole(response.authorities));

        const token = this.getToken();
        if (token) {
          localStorage.setItem("ecommJwt", token);
        }

      })
    ).subscribe();
  }

  register(credentials: SignUpRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/sign-up`, credentials, { withCredentials: true });
  }

  private isTokenAvailable() {
    return this.getToken() !== null;
  }

  private extractRole(authorities: string[]): string | null {
    if (!authorities || authorities.length === 0) return null;
    return authorities.includes('ROLE_ADMIN') ? "ROLE_ADMIN" : "ROLE_USER";
  }
}
