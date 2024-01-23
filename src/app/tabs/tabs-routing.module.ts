import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./Modules/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'graph-ql',
        loadChildren: () => import('./Modules/graph-ql/graph-ql.module').then(m => m.GraphQLPageModule)
      },
      {
        path: 'captcha',
        loadChildren: () => import('./Modules/captcha/captcha.module').then(m => m.CaptchaPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
