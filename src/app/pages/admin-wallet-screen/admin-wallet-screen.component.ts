import { ShareableService } from '../../shareable.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-admin-wallet-screen',
  templateUrl: './admin-wallet-screen.component.html',
  styleUrls: ['./admin-wallet-screen.component.css']
})
export class AdminWalletScreenComponent implements OnInit ,OnDestroy{

  constructor(private service:ShareableService) { }

  ngOnInit() {
    this.service.IshomePage.next(true);
  }
ngOnDestroy(){
  this.service.IshomePage.next(false);
}
}
