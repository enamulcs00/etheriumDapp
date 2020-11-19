import { ShareableService } from '../../shareable.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert-dai',
  templateUrl: './convert-dai.component.html',
  styleUrls: ['./convert-dai.component.css']
})
export class ConvertDaiComponent implements OnInit ,OnDestroy{

  constructor(private service:ShareableService) { }

  ngOnInit(){
    this.service.Isadminfeature.next(true)
  }
ngOnDestroy(){
  this.service.Isadminfeature.next(false); 
}
}
