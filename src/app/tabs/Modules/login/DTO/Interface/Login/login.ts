export interface ILogin {
  userName: string;
  password: string;
}

export interface ILoginResponse {
  ccmRefRequestId: string;
  changedAt: string;
  changedBy: number;
  createdAt: string;
  createdBy: number;
  loginRequestId: number;
  mobileNumber: string;
  pkId: number;
  userId: string;
  verified: boolean;
}

export interface ILoginOTP {
  loginReqId: number;
  otpText: string;
  password: string;
  userName: string;
}

export interface ILoginOTPResponse {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  session_state: string;
  scope: string;
}
