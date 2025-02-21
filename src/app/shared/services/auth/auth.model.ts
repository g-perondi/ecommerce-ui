export interface AuthResponse {
  userId: number,
  email: string,
  username: string,
  authorities: string[]
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface SignUpRequest {
  username: string;
  email: string;
  password: string;
  role: "ROLE_ADMIN" | "ROLE_USER";
}
