import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {APIInterceptor} from "./API/api.interceptor";

export const httpInterceptorsProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true},
];
