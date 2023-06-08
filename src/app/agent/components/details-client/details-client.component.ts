import { Component, OnInit } from '@angular/core';
import { IClient } from '../../models/IClient';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.css']
})
export class DetailsClientComponent implements OnInit {


  


  
  public loading: boolean =false;
  public id: string | null = null;
  public client:IClient = {} as IClient;
  public errorMessage : string | null = null;

  // clientId: string;
  public selectedPaymentLimit: number = 0;

  
  constructor(
    private activatedRoute : ActivatedRoute, 
    private clientService : ClientService,
    private bankService: BankService){

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

  updatePaymentLimit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.id =param.get('id');
    });
    if(this.id){                  
      this.bankService.updatePaymentLimit(this.id, this.selectedPaymentLimit)
      .subscribe(
        response => {
          console.log('Payment limit updated successfully');
          // Gérer la réponse du backend si nécessaire
        },
        error => {
          console.error('Error updating payment limit:', error);
          // Gérer les erreurs de la requête si nécessaire
        }
      );
    }
    
  }

  public isNotEmpty(){
    return Object.keys(this.client).length > 0;
  }


}
