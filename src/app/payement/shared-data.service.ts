import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Creditor } from './creditor-selection/creditor-selection.component';



@Injectable({
  providedIn: 'root'
})

export class SharedDataService {
  private rechargeDataSubject = new BehaviorSubject<any>(null);
  public rechargeData$ = this.rechargeDataSubject.asObservable();

  constructor() {}

  setRechargeData(data: any): void {
    this.rechargeDataSubject.next(data);
  }

  // bind the data (logo and name of provider) from cridetor section to recharge component

  private selectedCreditorData = new BehaviorSubject<Creditor | null>(null);
  selectedCreditorData$ = this.selectedCreditorData.asObservable();

  setSelectedCreditorData(creditor: Creditor): void {
    this.selectedCreditorData.next(creditor);
  }
}

