import { ShareableService } from '../../shareable.service';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-wallet',
  templateUrl: './admin-wallet.component.html',
  styleUrls: ['./admin-wallet.component.css']
})
export class AdminWalletComponent implements OnInit ,OnDestroy{

  constructor(private service:ShareableService) { }

  ngOnInit(){
    this.service.IshomePage.next(false);
    this.service.Isadminfeature.next(true);
    
  }
 ngOnDestroy(){
  this.service.Isadminfeature.next(false);
 }
}
