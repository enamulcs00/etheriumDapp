import { ShareableService } from '../../shareable.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  constructor(private service:ShareableService) { }

  ngOnInit() {
    this.service.IshomePage.next(false)
    this.service.IsUserWallet.next(true);
  }

}
