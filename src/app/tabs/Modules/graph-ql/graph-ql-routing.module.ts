import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GraphQLPage} from './graph-ql.page';
import {AlTheqaMasterDataResolver} from "./Resolver/AlTheqaMasterData/al-theqa-master-data.resolver";

const routes: Routes = [
  {
    path: '',
    component: GraphQLPage,
    resolve: {
      masterData: AlTheqaMasterDataResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphQLPageRoutingModule {
}
