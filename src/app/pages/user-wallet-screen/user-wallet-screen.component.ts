import { ShareableService } from '../../shareable.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-wallet-screen',
  templateUrl: './user-wallet-screen.component.html',
  styleUrls: ['./user-wallet-screen.component.css']
})
export class UserWalletScreenComponent implements OnInit {

  constructor(private service:ShareableService) { }

  ngOnInit(){
    this.service.IsUserWallet.next(true);
    this.service.IshomePage.next(false);
  }

}
