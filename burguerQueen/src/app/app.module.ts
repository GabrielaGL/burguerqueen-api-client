import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuWaitressComponent } from './menu-waitress/menu-waitress.component';
import { OrdersWaitressComponent } from './orders-waitress/orders-waitress.component';
import { MenuLunchWaitressComponent } from './menu-lunch-waitress/menu-lunch-waitress.component';
import { AddWaitressComponent } from './add-waitress/add-waitress.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuWaitressComponent,
    OrdersWaitressComponent,
    MenuLunchWaitressComponent,
    AddWaitressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
