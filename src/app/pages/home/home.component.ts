import { ShareableService } from '../../shareable.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{

  constructor(private service:ShareableService) { }

  ngOnInit(){
    this.service.IshomePage.next(true);
  }
  ngOnDestroy(){
    this.service.IshomePage.next(false);
  }
}
