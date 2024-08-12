import UserData from '../model/UserDataModel.dto';
import LoginResponse from '../response/LoginResponse.dto';

const UserDataMapper = (data: LoginResponse): UserData => {
  return data.data as UserData;
};

export default UserDataMapper;
