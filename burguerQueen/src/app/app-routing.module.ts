import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MenuWaitressComponent } from './components/menu-waitress/menu-waitress.component';
import { MenuLunchWaitressComponent } from './components/menu-lunch-waitress/menu-lunch-waitress.component';
import { OrdersWaitressComponent } from './components/orders-waitress/orders-waitress.component';
import { AddWaitressComponent } from './components/add-waitress/add-waitress.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { AddProductsLunchComponent } from './components/add-products-lunch/add-products-lunch.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full' },
  { path:'login', component:LoginComponent },
  { path:'menu/breakfast', component:MenuWaitressComponent, pathMatch:'full' },
  { path:'menu/lunch', component:MenuLunchWaitressComponent, pathMatch:'full'},
  { path:'orders', component:OrdersWaitressComponent },
  { path:'add/waitress', component:AddWaitressComponent, pathMatch:'full' },
  { path:'add/chef', component:AddChefComponent, pathMatch:'full' },
  { path:'add/admin', component:AddAdminComponent, pathMatch:'full' },
  { path:'add/products/lunch', component:AddProductsLunchComponent, pathMatch:'full' },
  { path:'add/products/breakfast', component:AddProductsComponent, pathMatch:'full' },
  { path:'kitchen', component:KitchenComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
