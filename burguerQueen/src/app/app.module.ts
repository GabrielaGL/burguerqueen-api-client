import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuWaitressComponent } from './menu-waitress/menu-waitress.component';
import { OrdersWaitressComponent } from './orders-waitress/orders-waitress.component';
import { MenuLunchWaitressComponent } from './menu-lunch-waitress/menu-lunch-waitress.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuWaitressComponent,
    OrdersWaitressComponent,
    MenuLunchWaitressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
