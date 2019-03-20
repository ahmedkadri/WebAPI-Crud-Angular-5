import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  public list : PaymentDetail[]=[];

  formData : PaymentDetail
  readonly rootUrl ='https://localhost:5001/api';
 

  constructor(private http : HttpClient ) { }

  refreshList(){
    return this.http.get(this.rootUrl + '/PaymentDetail')
      .toPromise()
      .then(res =>this.list = res as PaymentDetail[]
      )
    }

  postPaymentDetail(){
    return this.http.post(this.rootUrl+'/PaymentDetail',this.formData);
  }

  putPaymentDetail(){
    return this.http.put(this.rootUrl+'/PaymentDetail/'+ this.formData.PMId,this.formData);
  }
  
  deletePaymentDetail(id){
    return this.http.delete(this.rootUrl+'/PaymentDetail/'+ id);
  }

}
