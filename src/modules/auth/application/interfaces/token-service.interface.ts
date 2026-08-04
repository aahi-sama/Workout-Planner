export interface TokenPayload {
    sub: string;
    email:string;


}

export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
}

export interface TokenService {
    generateTokens(payload: TokenPayload): Promise<AuthTokens>;
}