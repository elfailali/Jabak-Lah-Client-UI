export interface ClientToken {
    id : number;
    role: string;
    sub: string;
    iat: number;
    exp: number;
    isFirstLogin : boolean;

}
