import { ShareableService } from '../../shareable.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-wallet-screen',
  templateUrl: './admin-wallet-screen.component.html',
  styleUrls: ['./admin-wallet-screen.component.css']
})
export class AdminWalletScreenComponent implements OnInit {

  constructor(private service:ShareableService) { }

  ngOnInit() {
    this.service.IshomePage.next(true);
  }

}
