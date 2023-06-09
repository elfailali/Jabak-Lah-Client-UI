import { Component } from '@angular/core';
import { IClient } from '../../models/IClient';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent {
  public loading: boolean =false;
  public id: string | null = null;
  public client:IClient = {} as IClient;
  public errorMessage : string | null = null;

  constructor(private activatedRoute : ActivatedRoute, private clientService : ClientService, private router : Router){

}
ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe((param)=>{
    this.id =param.get('id');
  });
  if(this.id){
    this.loading=true;
    this.clientService.getClient(parseInt(this.id)).subscribe((data)=>{
    this.client = data;
    this.loading = false;
    }, (error) => {
    this.errorMessage = error;
    this.loading = false;
    })
  }
}


public SubmitUpdate(){
  if(this.id){
    this.clientService.updateClient(this.client, parseInt(this.id)).subscribe((data)=>{
      this.router.navigate([`/agent/dash/list`]).then();
    }, (error) => {
      this.errorMessage=error;
      this.router.navigate(["/agent/dash/client/edit/:id"]).then();
    });
  }

}
}
