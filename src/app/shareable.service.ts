import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareableService {
  IshomePage = new Subject<boolean>();
  IsUserWallet = new Subject<boolean>();
  Isadminfeature = new Subject<boolean>();
  
  constructor() { }
}
