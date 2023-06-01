import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MenuWaitressComponent } from './components/menu-waitress/menu-waitress.component';
import { MenuLunchWaitressComponent } from './components/menu-lunch-waitress/menu-lunch-waitress.component';
import { OrdersWaitressComponent } from './components/orders-waitress/orders-waitress.component';
import { AddWaitressComponent } from './components/add-waitress/add-waitress.component';
import { ProductsComponent } from './components/products/products.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full' },
  { path:'login', component:LoginComponent },
  { path:'menu/breakfast', component:MenuWaitressComponent, pathMatch:'full' },
  { path:'menu/lunch', component:MenuLunchWaitressComponent, pathMatch:'full'},
  { path:'orders', component:OrdersWaitressComponent },
  { path:'add/waitress', component:AddWaitressComponent, pathMatch:'full' },
  { path:'add/chef', component:AddChefComponent, pathMatch:'full' },
  { path:'add/products', component:ProductsComponent, pathMatch:'full' },
  { path:'kitchen', component:KitchenComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
