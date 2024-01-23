import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraphQLPageRoutingModule } from './graph-ql-routing.module';

import { GraphQLPage } from './graph-ql.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraphQLPageRoutingModule
  ],
  declarations: [GraphQLPage]
})
export class GraphQLPageModule {}
