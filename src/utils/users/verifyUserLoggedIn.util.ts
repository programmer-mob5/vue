import UserServices from '@/services/users.service';
import getUserData from '../getUserData.utils';

const verifyUserLoggedIn = async (token: string = getUserData.token) => {
  if (token == null) {
    return false;
  }
  try {
    await UserServices.login({
      email: null,
      otp: null,
      password: null,
      jwt: token,
    });
    return true;
  } catch (error) {
    return false;
  }
};

export default verifyUserLoggedIn;
