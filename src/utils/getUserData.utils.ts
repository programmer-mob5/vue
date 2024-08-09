import LoginResponse from '@/dto/auth/response/LoginResponse.dto';

const getUserData: LoginResponse = JSON.parse(
  localStorage.getItem('user') as string,
) as LoginResponse;

export default getUserData;
