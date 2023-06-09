import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/agent/services/client.service';

@Component({
  selector: 'card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.css']
})
export class CardClientComponent {
  @Input() client: any;

  @Output() deleteClientEvent = new EventEmitter<number>();


  constructor(private router: Router, private clientService : ClientService) { 
  }


 

  detailsBtn(){
    
    this.router.navigate([`agent/dash/client/${this.client.id}`])

  }

  editClientBtn(){
    this.router.navigate([`agent/dash/client/edit/${this.client.id}`])
  }

  onDelete() {
    this.deleteClientEvent.emit(this.client.id);
  }

  
}
