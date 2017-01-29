import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BillService } from "../../bill.service";
import { PaymentService } from "../payment.service";

import { BillSidebarComponent } from "../../bill-sidebar/bill-sidebar.component";
import { BillTools } from '../bill-tools';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  bills = [];
  billsUnpaid = [];
  billTools = new BillTools();
  isLoading = false;
  hasBills = false;

  constructor(
    private router: Router,
    private billService: BillService,
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
    this.isLoading = true;

    // Retrieve posts from the API
    this.billService.getAllBills().subscribe(bills => {
      this.bills = bills;

      this.paymentService.getPaymentsForCurrentMonth().subscribe(payments => {
        this.billsUnpaid = this.billTools.getUnpaidBillsForMonth(this.bills, payments);

        if (this.billsUnpaid.length){
          this.hasBills = true;
        }

        this.isLoading = false;
      });
    });

  }

  payBill(id:string) {
    //console.log("Navigating to edit bill route and passing id of: ", id);
    this.router.navigate(['/bills/pay/make-payment/' + id]);
  }



}
