import { Component } from '@angular/core';
import { IClient } from '../../models/IClient';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent {

  

  searchValue: string = '';

  filterClients(): any[] {
    return this.clients.filter(client => client.firstName.toLowerCase().includes(this.searchValue.toLowerCase()));
  }



  public loading: boolean = false;
  public clients: IClient[] = [];
  public errorMessage: string | null = null;

  constructor(private router: Router, private clientService : ClientService) {}

  ngOnInit(): void {
    this.getAllClientFromServer();
  }

  public getAllClientFromServer(){
    this.loading=true;
    this.clientService.getAllClients().subscribe((data) => {
      this.clients = data;
      console.log(data)
      this.loading=false;
    }, (error) => {
      this.errorMessage = error;
      this.loading=false;
    })
  }

  deleteClient(id: string | undefined){
    if(id){
      this.clientService.deleteClient(parseInt(id)).subscribe((data)=>{
        this.getAllClientFromServer();
      },(error)=>{
        this.errorMessage=error;
      })
    }
  }
  
}
