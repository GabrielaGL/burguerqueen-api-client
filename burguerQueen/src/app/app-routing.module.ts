import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MenuWaitressComponent } from './components/waitress/menu-waitress/menu-waitress.component';
import { MenuLunchWaitressComponent } from './components/waitress/menu-lunch-waitress/menu-lunch-waitress.component';
import { OrdersWaitressComponent } from './components/waitress/orders-waitress/orders-waitress.component';
import { AddWaitressComponent } from './components/admin/add-waitress/add-waitress.component';
import { AddChefComponent } from './components/admin/add-chef/add-chef.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { AddProductsComponent } from './components/admin/add-products/add-products.component';
import { AddProductsLunchComponent } from './components/admin/add-products-lunch/add-products-lunch.component';
import { AddAdminComponent } from './components/admin/add-admin/add-admin.component';
import { WorkerDetailsComponent } from './components/admin/worker-details/worker-details.component';
import { EditWorkerComponent } from './components/admin/edit-worker/edit-worker.component';
import { EditProductsComponent } from './components/admin/edit-products/edit-products.component';

import { adminGuard } from './guards/admin/admin.guard';
import { chefGuard } from './guards/kitchen/chef.guard';
import { waitressGuard } from './guards/waitress/waitress.guard';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full' },
  { path:'login', component:LoginComponent },
  { path:'menu/breakfast', component:MenuWaitressComponent, pathMatch:'full', canActivate: [waitressGuard] },
  { path:'menu/lunch', component:MenuLunchWaitressComponent, pathMatch:'full', canActivate: [waitressGuard]},
  { path:'orders', component:OrdersWaitressComponent, canActivate: [waitressGuard] },
  { path:'add/waitress', component:AddWaitressComponent, canActivate: [adminGuard] },
  { path:'add/chef', component:AddChefComponent, pathMatch:'full', canActivate: [adminGuard] },
  { path:'add/admin', component:AddAdminComponent, pathMatch:'full', canActivate: [adminGuard] },
  { path: 'details/:id', component:WorkerDetailsComponent, pathMatch:'full', canActivate: [adminGuard] },
  { path: 'details/:id/edit', component:EditWorkerComponent, pathMatch:'full', canActivate: [adminGuard] },
  { path:'add/products/lunch', component:AddProductsLunchComponent, pathMatch:'full', canActivate: [adminGuard] },
  { path:'add/products/breakfast', component:AddProductsComponent, pathMatch:'full', canActivate: [adminGuard] },
  { path:'products/:id/edit', component:EditProductsComponent, pathMatch:'full', canActivate: [adminGuard] },
  { path:'kitchen', component:KitchenComponent, canActivate: [chefGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
