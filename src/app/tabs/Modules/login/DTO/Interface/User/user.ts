export interface IUser {
  pkId: number;
  name: string;
  token: string;
  email: string;
  emailVerified: boolean;
  mobileNo: string;
  preferredLanguage: string;
}

export interface IUserDetails {
  username: string;
  mobileNo: string;
  email: string;
  profileImageUrl: string;
  firstName: string;
  middleName: string;
  lastName: string;
  pkId: number;
  preferredLanguage: string;
  emailVerified: boolean;
}
