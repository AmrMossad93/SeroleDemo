import {Injectable} from '@angular/core';
import {DataService} from "../../../../../../core/services/data/data.service";
import {Observable} from "rxjs";
import {Vehicle_Insurance_API_Name} from "../../DTO/API/Vehicle_Insurance_API_Name";
import {ICaptcha} from "../../DTO/Interfaces/Captcha/captcha";

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  constructor(private dataService: DataService) {
  }

  getCaptcha(): Observable<ICaptcha> {
    return this.dataService.get(Vehicle_Insurance_API_Name.getCaptcha);
  }
}
