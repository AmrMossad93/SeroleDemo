import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptorsProviders} from "./Core/Interceptors";
import {Apollo, ApolloModule} from "apollo-angular";
import {GraphQLModule} from "./Core/Modules/GraphQL/graph-ql.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, GraphQLModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, httpInterceptorsProviders , Apollo],
  bootstrap: [AppComponent],
})
export class AppModule {
}
