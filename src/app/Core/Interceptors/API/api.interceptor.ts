import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from "../../../modules/authentication/DTO/interface/user";
import {UserService} from "../../../modules/authentication/service/User/user.service";
import {tap} from "rxjs/operators";
import {AuthenticationPage} from "../../../modules/authentication/authentication.page";
import {ModalController} from "@ionic/angular";
import {Location} from '@angular/common';
import {StorageService} from "../../../shared/services/Storage/storage.service";
import {
  EVehicleInsuranceStepper
} from "../../../modules/main/modules/vehicle-insurance/DTO/ENum/vehicle-insurance-stepper";

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  user: IUser = {} as IUser;

  constructor(private userService: UserService, public modalController: ModalController, private _location: Location, private storageService: StorageService,) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
    request = request.clone({headers: request.headers.set('responseType', 'json')});
    this.userService.getUser().subscribe(res => {
      this.user = res;
      if (this.user?.token) {
        request = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + this.user?.token)});
      }
    })
    return next.handle(request).pipe(
      tap(
        () => {
        },
        err => {
          if (err.status === 401) {
            this.storageService.removeStorage('user').then(c => {
              // @ts-ignore
              this.userService.setUser(null)
            })
            this.onOpenAuthentication()
          }
        }
      )
    );
  }

  async onOpenAuthentication() {
    let modal = await this.modalController.create({
      component: AuthenticationPage,
      backdropDismiss: true
    });
    modal.onDidDismiss().then((data) => {
      this._location.back();
    });
    return await modal.present();
  }
}
