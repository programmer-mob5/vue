import UserData from '@/dto/auth/model/UserDataModel.dto';
import LoginResponse from '@/dto/auth/response/LoginResponse.dto';

const getUserData: UserData = JSON.parse(
  localStorage.getItem('user') as string,
) as UserData;

export default getUserData;
