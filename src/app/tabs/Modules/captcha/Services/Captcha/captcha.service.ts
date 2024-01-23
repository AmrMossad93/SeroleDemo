import {Injectable} from '@angular/core';

import {Observable} from "rxjs";
import {DataService} from "../../../../../Core/Service/Data/data.service";
import {ICaptcha} from "../../DTO/Interface/Captcha/captcha";
import {CAPTCHA_API_NAME} from "../../DTO/Interface/API/CAPTCHA_API_NAME";


@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  constructor(private dataService: DataService) {
  }

  getCaptcha(): Observable<ICaptcha> {
    return this.dataService.get(CAPTCHA_API_NAME.getCaptcha);
  }
}
