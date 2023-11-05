declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: number;
    DATABASE_URL: string;
    jwtSecretKey: string;
    jwtRefreshTokenKey: string;
  }
}
