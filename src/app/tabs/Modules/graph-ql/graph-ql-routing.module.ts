import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraphQLPage } from './graph-ql.page';

const routes: Routes = [
  {
    path: '',
    component: GraphQLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphQLPageRoutingModule {}
