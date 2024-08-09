import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { getBaseURL } from '@/utils/getBaseURL.util';
import { ExamplePutBody } from '@/dto/example.dto';
import LoginResponse from '@/dto/auth/response/LoginResponse.dto';

const API = ({ headers = {}, params = {} } = {}): AxiosInstance => {
  const user: LoginResponse =
    JSON.parse(localStorage.getItem('user') as string) ?? {};
  const BASE_URL = getBaseURL('APP_EXAMPLE_API');

  const instance = axios.create({
    baseURL: `${BASE_URL}/v2`,
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${user.token}`,
      ...headers,
    },
    params,
  });

  return instance;
};

const AssetsServices = {
    getAssets: () => {
        API().get('assets')
    }
};

export default AssetsServices;
