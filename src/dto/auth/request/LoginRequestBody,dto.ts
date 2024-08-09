interface LoginRequestBody {
  email: string;
  otp: string | null;
  password: string;
  jwt: string | null;
}
