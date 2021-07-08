export interface IUser {
    type: string;
    fname: string;
    lname: string;
    email: string;
}
export interface IAuthState {
    isAuthenticated: boolean;
    user: IUser;
}
