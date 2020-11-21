import { ShareableService } from './../../shareable.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user-wallet-rebalance',
  templateUrl: './user-wallet-rebalance.component.html',
  styleUrls: ['./user-wallet-rebalance.component.css']
})
export class UserWalletRebalanceComponent implements OnInit ,OnDestroy{

  constructor(private service:ShareableService) { }

  ngOnInit(){
    this.service.IshomePage.next(false);
    this.service.IsUserWallet.next(true);
  }
ngOnDestroy(){
  this.service.IsUserWallet.next(false);
}
}
