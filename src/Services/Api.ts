import axios from 'axios';
import { ApiConstants } from '../Constants/ApiConstants';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

interface LoginPayload {
  readonly email: string;
  readonly password: string;
}

class ApiService {
  host: string;
  initialized = false;

  constructor(host: string) {
    this.host = host;
  }

  async init() {
    if (this.initialized) {
      return;
    }

    await this.configureAxios();
    this.initialized = true;
  }

  async injectHeaderToken(config: any) {
    const token = cookies.get('token');
    if (token) {
      config.headers.Authorization = 'bearer ' + token;
    }
    return config;
  }

  configureAxios() {
    axios.defaults.baseURL = this.host;
    axios.defaults.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    axios.interceptors.request.use(this.injectHeaderToken, (error) => {
      console.log(error);
    });
  }

  async Login(payload: LoginPayload) {
    try {
      return await axios({
        method: 'post',
        url: ApiConstants.LOGIN,
        data: payload,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

const Api = new ApiService(ApiConstants.BASE_URL);

export default Api;
