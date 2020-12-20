import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { GetProductComponent } from './get-product/get-product.component';
import { OrderProductComponent } from './order-product/order-product.component';


const routes: Routes = [

  {path: "addProduct", component: AddProductComponent  },
  {path: "listProduct", component: GetProductComponent  },
  {path: "orderProduct", component: OrderProductComponent  },
  {path: '',   redirectTo: '/listProduct', pathMatch: 'full' }, // redirect to `first-component`
  {path: '**', component: GetProductComponent }  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
