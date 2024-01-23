import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CaptchaService} from "../../Services/Captcha/captcha.service";
import {ICaptcha} from "../../DTO/Interface/Captcha/captcha";

@Injectable({
  providedIn: 'root'
})
export class CaptchaResolver implements Resolve<ICaptcha> {
  constructor(private captchaService: CaptchaService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICaptcha> {
    return this.captchaService.getCaptcha();
  }
}
