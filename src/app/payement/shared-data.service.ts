import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
}

