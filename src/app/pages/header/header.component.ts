import { ShareableService } from '../../shareable.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  IshomePage:boolean = true;
  IsUserWallet:boolean = false;
  Isadminfeature:boolean = false;
  constructor(private service:ShareableService) { }

  ngOnInit(){
    this.service.IshomePage.subscribe(res=>{
      this.IshomePage = res;
      
    })
    this.service.IsUserWallet.subscribe(res=>{
      this.IsUserWallet = res;
    })
    this.service.Isadminfeature.subscribe(res=>{
      this.Isadminfeature = res;
    })
  }
}
