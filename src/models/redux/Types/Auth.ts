import {IUser} from '../../Itypes';


export const LOGIN = 'LOGIN';

export interface AuthAction {
    type: typeof LOGIN;
    user_info?: IUser;
}

export type AuthActions =
    | AuthAction

