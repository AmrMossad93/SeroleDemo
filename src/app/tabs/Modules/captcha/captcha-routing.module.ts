import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CaptchaPage} from './captcha.page';
import {CaptchaResolver} from "./Resolver/Captcha/captcha.resolver";

const routes: Routes = [
  {
    path: '',
    component: CaptchaPage,
    resolve: {
      captcha: CaptchaResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaptchaPageRoutingModule {
}
