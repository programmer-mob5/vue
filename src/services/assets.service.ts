import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { getBaseURL } from '@/utils/getBaseURL.util';
import { ExamplePutBody } from '@/dto/example.dto';
import LoginResponse from '@/dto/auth/response/LoginResponse.dto';
import UserData from '@/dto/auth/model/UserDataModel.dto';
import GetAssetsResponse from '@/dto/assets/response/GetAssetsResponse.dto';
import GetAssetsOptionsResponse from '@/dto/assets/response/GetAssetsOptionsResponse.dto';

const API = ({ headers = {}, params = {} } = {}): AxiosInstance => {
  const user: UserData =
    JSON.parse(localStorage.getItem('user') as string) ?? {};
  const BASE_URL = getBaseURL('APP_ASSETS_API');

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
  getAssets: (): Promise<AxiosResponse<GetAssetsResponse>> => {
    return API().get('/assets?page=1&limit=10');
  },

  getAssetsOpations: (): Promise<AxiosResponse<GetAssetsOptionsResponse>> => {
    return API().get('/assets/options');
  },
};

export default AssetsServices;
