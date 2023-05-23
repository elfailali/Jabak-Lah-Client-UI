import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bill-type-selection',
  templateUrl: './bill-type-selection.component.html',
  styleUrls: ['./bill-type-selection.component.css']
})
export class BillTypeSelectionComponent {
  @Output() billTypeSelected = new EventEmitter<string>();

  selectBillType(billType: string): void {
    this.billTypeSelected.emit(billType);
  }
}
