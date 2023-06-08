import { Component, OnInit } from '@angular/core';
import { IClient } from '../../models/IClient';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.css']
})
export class DetailsClientComponent implements OnInit {

  isActive: boolean = false;

  toggleDropDown() {
    this.isActive = !this.isActive;
  }

  public loading: boolean =false;
  public id: string | null = null;
  public client:IClient = {} as IClient;
  public errorMessage : string | null = null;

  
  constructor(private activatedRoute : ActivatedRoute, private clientService : ClientService){

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

  public isNotEmpty(){
    return Object.keys(this.client).length > 0;
  }


}
