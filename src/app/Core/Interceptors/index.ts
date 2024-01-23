import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoaderInterceptor} from "./loader/loader.interceptor";
import {APIInterceptor} from "./API/api.interceptor";

export const httpInterceptorsProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true},
];
