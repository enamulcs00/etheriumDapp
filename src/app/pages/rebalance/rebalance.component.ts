import { ShareableService } from '../../shareable.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-rebalance',
  templateUrl: './rebalance.component.html',
  styleUrls: ['./rebalance.component.css']
})
export class RebalanceComponent implements OnInit ,OnDestroy{

  constructor(private service:ShareableService) { }

  ngOnInit(){
    this.service.Isadminfeature.next(true);
    this.service.IshomePage.next(false);
  }
ngOnDestroy(){
  this.service.Isadminfeature.next(false); 
}
}
