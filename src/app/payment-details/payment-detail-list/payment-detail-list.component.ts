import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { PaymentDetail } from '../../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.css']
})
export class PaymentDetailListComponent implements OnInit {



  constructor(private service:PaymentDetailService,private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
    console.log(this.service.list);
  }

  populateForm( pd : PaymentDetail )
  {
    this.service.formData = Object.assign({},pd);
  }

  onDelete(PMId)
  {
    if(confirm('Are you sure to delete this rcord ?')){
    this.service.deletePaymentDetail(PMId)
    .subscribe(res => {
      this.service.refreshList();
      this.toastr.warning('Delete Successfully','Payment Details Register');
    },
    err => {
      console.log(err);
    })
   }
  }
}
