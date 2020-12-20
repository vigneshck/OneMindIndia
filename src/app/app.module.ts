import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetProductComponent } from './get-product/get-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OrderProductComponent } from './order-product/order-product.component';

@NgModule({
  declarations: [
    AppComponent,
    GetProductComponent,
    AddProductComponent,
    OrderProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
