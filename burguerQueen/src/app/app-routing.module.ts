import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuWaitressComponent } from './menu-waitress/menu-waitress.component';
import { MenuLunchWaitressComponent } from './menu-lunch-waitress/menu-lunch-waitress.component';
import { OrdersWaitressComponent } from './orders-waitress/orders-waitress.component';
import { AddWaitressComponent } from './add-waitress/add-waitress.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full' },
  { path:'login', component:LoginComponent },
  { path:'menu/breakfast', component:MenuWaitressComponent, pathMatch:'full' },
  { path:'menu/lunch', component:MenuLunchWaitressComponent, pathMatch:'full'},
  { path:'orders', component:OrdersWaitressComponent },
  { path:'add/waitress', component:AddWaitressComponent },
  { path:'add/products', component:ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
