import {Injectable} from '@angular/core';
import {DataService} from "../../../../../Core/Service/Data/data.service";
import {BehaviorSubject, Observable} from "rxjs";
import {ILogin, ILoginOTP, ILoginOTPResponse, ILoginResponse} from "../../DTO/Interface/Login/login";
import {LOGIN_API_NAME} from "../../DTO/API/LOGIN_API_NAME";
import {IUser, IUserDetails} from "../../DTO/Interface/User/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // @ts-ignore
  private userData: BehaviorSubject<IUser> = new BehaviorSubject(null);

  constructor(private dataService: DataService) {
  }

  login(data: ILogin): Observable<ILoginResponse> {
    return this.dataService.post(LOGIN_API_NAME.loginForOTP, data)
  }

  loginWithPinCode(loginOTP_OBJ: ILoginOTP): Observable<ILoginOTPResponse> {
    return this.dataService.post(LOGIN_API_NAME.loginWithId, loginOTP_OBJ)
  }

  setUser(user: IUser): void {
    this.userData.next(user);
  }

  getUser(): Observable<IUser> {
    return this.userData.asObservable();
  }

  getUserDetails(): Observable<IUserDetails> {
    return this.dataService.get(LOGIN_API_NAME.getUser);
  }
}
