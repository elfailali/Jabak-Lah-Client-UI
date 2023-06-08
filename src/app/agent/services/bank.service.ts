import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private apiUrl = 'http://192.168.0.184:8084'; 
  constructor(private http: HttpClient) {}
  
  updatePaymentLimit(id: string, paymentLimit: number): Observable<any> {

    const url = `${this.apiUrl}/fim/est3DgateV2/openPaymentAccount/${id}`; // Remplacez avec l'URL réelle de votre API pour mettre à jour le plafond de paiement

    const payload = { paymentLimit }; // Créez l'objet payload à envoyer au backend

    return this.http.post(url, payload);
  }
}