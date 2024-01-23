import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from "rxjs/operators";
import {ModalController} from "@ionic/angular";
import {Location} from '@angular/common';
import {IUser} from "../../../tabs/Modules/login/DTO/Interface/User/user";
import {LoginService} from "../../../tabs/Modules/login/Services/Login/login.service";
import {StorageService} from "../../Service/Storage/storage.service";

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  user: IUser = {} as IUser;

  constructor(private userService: LoginService, public modalController: ModalController, private _location: Location, private storageService: StorageService,) {
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
          }
        }
      )
    );
  }


}
