import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IClient } from '../../models/IClient';
import { ClientService } from '../../services/client.service';


@Component({
  selector: 'add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  
  public loading: boolean =false;
  public client:IClient = {} as IClient;
  public errorMessage : string | null = null;

  
  constructor(private clientService : ClientService, private router: Router) {}

  ngOnInit(): void {
    
  }
  
  createSubmit(){
    this.clientService.createClient(this.client).subscribe((data : any)=>{
      console.log(data);
      // this.router.navigate([`/agent/dash/list`]).then();
    }, (error) => {
      this.errorMessage=error;
      this.router.navigate(['/agent/dash/client/add']).then();
    });
  }
}