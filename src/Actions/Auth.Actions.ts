import { Dispatch } from 'redux';
import { AppActions } from '../models/redux/Types';
import { AppState } from '../reducers';
import Cookies from 'universal-cookie';
import Api from '../Services/Api';

interface Payload {
  readonly email: string;
  readonly password: string;
  readonly userType?: string;
}

const cookies = new Cookies();
export const login = (): AppActions => ({
  type: 'LOGIN',
});

export const startLogin = (payload: Payload) => {
  return (dispatch: Dispatch<AppActions> | any, getState: () => AppState) => {
    Api.Login(payload)
      .then((res) => {
        const { token } = res?.data?.token;
        if (token) {
          cookies.set('token', token, { path: '/' });
          dispatch(login());
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
        } else {
          console.log(err);
        }
      });
  };
};
