import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse,HttpHeaders} from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BankService {

  private apiUrl = 'http://localhost:8084'; 
  constructor(private http: HttpClient) {}
  
 /* updatePaymentLimit(id: string, paymentLimit: number): Observable<any> {

    const url = `${this.apiUrl}/fim/est3DgateV2/openPaymentAccount/${id}`; // Remplacez avec l'URL réelle de votre API pour mettre à jour le plafond de paiement

    const payload = { paymentLimit }; // Créez l'objet payload à envoyer au backend

    return this.http.post(url, payload);
  }*/
  updatePaymentLimit(id: string, paymentLimit: number): Observable<any> {
    const url = `${this.apiUrl}/fim/est3DgateV2/openPaymentAccount/${id}`;
    const payload = { paymentLimit };

    return this.http.post(url, payload)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }

    return throwError ('Something went wrong. Please try again later.');
  }
}