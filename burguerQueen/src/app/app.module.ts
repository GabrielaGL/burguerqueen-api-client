import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { MenuWaitressComponent } from './components/menu-waitress/menu-waitress.component';
import { OrdersWaitressComponent } from './components/orders-waitress/orders-waitress.component';
import { MenuLunchWaitressComponent } from './components/menu-lunch-waitress/menu-lunch-waitress.component';
import { AddWaitressComponent } from './components/add-waitress/add-waitress.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { AddProductsLunchComponent } from './components/add-products-lunch/add-products-lunch.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';

import { AuthInterceptorService } from './interceptor/auth-interceptor.service';
import { WorkerDetailsComponent } from './components/worker-details/worker-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuWaitressComponent,
    OrdersWaitressComponent,
    MenuLunchWaitressComponent,
    AddWaitressComponent,
    AddChefComponent,
    AddProductsComponent,
    KitchenComponent,
    AddProductsLunchComponent,
    AddAdminComponent,
    WorkerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      // in the case a new interceptor is needed
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
