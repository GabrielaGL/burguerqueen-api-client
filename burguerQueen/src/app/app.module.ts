import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { MenuWaitressComponent } from './components/waitress/menu-waitress/menu-waitress.component';
import { OrdersWaitressComponent } from './components/waitress/orders-waitress/orders-waitress.component';
import { MenuLunchWaitressComponent } from './components/waitress/menu-lunch-waitress/menu-lunch-waitress.component';
import { AddWaitressComponent } from './components/admin/add-waitress/add-waitress.component';
import { AddChefComponent } from './components/admin/add-chef/add-chef.component';
import { AddProductsComponent } from './components/admin/add-products/add-products.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { AddProductsLunchComponent } from './components/admin/add-products-lunch/add-products-lunch.component';
import { AddAdminComponent } from './components/admin/add-admin/add-admin.component';

import { AuthInterceptorService } from './interceptor/auth-interceptor.service';
import { WorkerDetailsComponent } from './components/admin/worker-details/worker-details.component';
import { EditWorkerComponent } from './components/admin/edit-worker/edit-worker.component';
import { EditProductsComponent } from './components/admin/edit-products/edit-products.component';


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
    WorkerDetailsComponent,
    EditWorkerComponent,
    EditProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule,
    ToastrModule.forRoot(),
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
