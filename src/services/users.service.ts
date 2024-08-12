import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { getBaseURL } from '@/utils/getBaseURL.util';
import LoginResponse from '@/dto/auth/response/LoginResponse.dto';
import UserData from '@/dto/auth/model/UserDataModel.dto';

const API = ({ headers = {}, params = {} } = {}): AxiosInstance => {
  const user: UserData =
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

const UserServices = {
  login: (body: LoginRequestBody): Promise<AxiosResponse<LoginResponse>> => {
    return API().post('/auth/login', body);
  },

  authVerifyToken: (token: string): Promise<AxiosResponse> => {
    return API().get(`/auth/verify-token/${token}`);
  },
};

export default UserServices;
