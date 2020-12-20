import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiUtilService } from '../api-util.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent implements OnInit {
  public datalist: any;

  constructor(private servobj: ApiUtilService, public http: HttpClient) { }

  ngOnInit(): void {

    this.listInfo();
  }

  listInfo() {
    this.servobj.getProductlist().subscribe(data => {
      this.datalist = data;
    });
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  orderItem(item: any, i: number) {

    const Id = this.generateId()

    if (item.availableQuantity !== 0) {

      let data = {
        "productId": item.productId,
        "quantity": 1,
        "orderId": Id,
        "customerId": Id
      }

      this.http.post("https://uiexercise.onemindindia.com/api/OrderProducts", data).subscribe(result => {

        if (result == true) {
          
          this.ngOnInit();
          alert("Product Ordered Successfully");

        }

      });

    }
    else {

      alert("Currently Stock Unavailable");
    }

  }
}