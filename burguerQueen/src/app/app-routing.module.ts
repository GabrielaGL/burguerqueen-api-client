import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MenuWaitressComponent } from './components/menu-waitress/menu-waitress.component';
import { MenuLunchWaitressComponent } from './components/menu-lunch-waitress/menu-lunch-waitress.component';
import { OrdersWaitressComponent } from './components/orders-waitress/orders-waitress.component';
import { AddWaitressComponent } from './components/add-waitress/add-waitress.component';
import { ProductsComponent } from './components/products/products.component';

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
