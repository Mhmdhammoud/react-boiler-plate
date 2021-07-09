import { AuthActions } from '../models/redux/Types';
import { IAuthState } from '../models/Itypes';

const initState: IAuthState = {
  isAuthenticated: false,
};
const AuthReducer = (state: IAuthState = initState, action: AuthActions) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
export default AuthReducer;
