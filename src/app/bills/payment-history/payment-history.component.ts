import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from "../payment.service";

import { BillSidebarComponent } from "../../bill-sidebar/bill-sidebar.component";

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {
payments: any = [];

  constructor(private router: Router, private paymentService: PaymentService) { }

  ngOnInit() {
  this.paymentService.getAllPayments().subscribe(payments => {
    this.payments = payments;
  });
}
}
