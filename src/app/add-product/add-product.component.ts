import { Component, OnInit } from '@angular/core';
import { ApiUtilService } from '../api-util.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public Prod_Qnty: number;
  public Prod_Name: string;
  public Product: {};



  constructor(public servobj: ApiUtilService, public http: HttpClient) { }
  ngOnInit(): void {

  }




  generateGUIDHandler() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


  getDataHandler(product: any) {

    product.value.productId = this.generateGUIDHandler();
    let data = product.value;

    //let data = { ...product.value , productId: this.generateGUIDHandler() }

    this.http.post("https://uiexercise.onemindindia.com/api/Product", data).subscribe(res => {

      if (res == true) {
        alert("Product Added Successfully")
        product.reset();
      }

    })

  }




}
