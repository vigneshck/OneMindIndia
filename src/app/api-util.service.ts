import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiUtilService {

  constructor(private http: HttpClient) { }


  getProductlist()
  {
    let url = "https://uiexercise.onemindindia.com/api/Product"
    return this.http.get(url);
  }

  // addProd(param):Observable<any>{




  //    this.http.post("https://uiexercise.onemindindia.com/api/Product", {availableQuantity: 12,
  //    productId: "da300364-610a-4d38-b559-fe9a59fa88fb",
  //    productName: "Vignesh"})

  

    

  // }

}
