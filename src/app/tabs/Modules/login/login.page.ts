import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./Services/Login/login.service";
import {ILogin, ILoginOTP, ILoginOTPResponse, ILoginResponse} from "./DTO/Interface/Login/login";
import {IUser, IUserDetails} from "./DTO/Interface/User/user";
import {ToastrService} from "../../../Core/Service/toast/toastr.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  environment = environment.production
  loginForm!: FormGroup
  loginResponse: ILoginResponse = {} as ILoginResponse;
  loginOTPResponse = {} as ILoginOTPResponse;
  user: IUser = {} as IUser;
  userDetails = {} as IUserDetails

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private toastrService: ToastrService,
  ) {
  }

  ngOnInit() {
    this.onGenerateForm();
  }

  onGenerateForm(): void {
    this.loginForm = this.fb.group({
      nationalIqamaNumber: ['1027647310', [Validators.required]],
      password: ['Tamer@123', [Validators.required]],
    })
  }

  onSubmit(): void {
    if (!this.loginForm.valid) {
      return;
    }
    let data: ILogin = {
      userName: this.loginForm.value['nationalIqamaNumber'],
      password: this.loginForm.value['password'],
    }
    this.loginService.login(data).subscribe(res => {
      this.loginResponse = res;
    }, error => {
    }, () => {
      this.onLoginOTP();
    })
  }

  onLoginOTP(): void {
    let data: ILoginOTP = {
      loginReqId: this.loginResponse.loginRequestId,
      otpText: '1111',
      userName: this.loginForm.value['nationalIqamaNumber'],
      password: this.loginForm.value['password']
    } as ILoginOTP;
    this.loginService.loginWithPinCode(data).subscribe(res => {
      this.loginOTPResponse = res;
    }, error => {
    }, () => {
      this.user.token = this.loginOTPResponse.access_token;
      this.loginService.setUser(this.user)
      this.getUserDetails();
    })
  }

  getUserDetails(): void {
    this.loginService.getUserDetails().subscribe(res => {
      this.userDetails = res;
    }, error => {
    }, () => {
      this.user.name = this.userDetails.firstName + ' ' + this.userDetails.middleName + ' ' + this.userDetails.lastName
      this.user.email = this.userDetails.email;
      this.user.pkId = this.userDetails.pkId;
      this.user.emailVerified = this.userDetails.emailVerified;
      this.user.mobileNo = this.userDetails.mobileNo;
      this.user.preferredLanguage = this.userDetails.preferredLanguage;
      this.loginService.setUser(this.user);
      this.toastrService.presentToast(`Welcome ${this.user.name}`);
    })
  }
}
