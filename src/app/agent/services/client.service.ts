import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, catchError, throwError } from 'rxjs';
import { IClient } from '../models/IClient';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private serverUrl : string = `http://192.168.0.104:8084/api/v1/client` ;
  private authorization = this.cookieService.get('Authorization');

  constructor(private httpClient :HttpClient, private cookieService : CookieService){}

  //GET All Clients
  public getAllClients(): Observable<IClient[]> {
    let dataUrl: string = `${this.serverUrl}/list`;
    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.get<IClient[]>(dataUrl, {headers}).pipe(catchError(this.handleError));
  }


  // GET Single Client
  public getClient(id: number): Observable<IClient>{
    let dataUrl: string = `${this.serverUrl}/client/${id}`;
    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.get<IClient>(dataUrl, {headers}).pipe(catchError(this.handleError));

  }

  // Create a client
  public createClient(client : IClient) : Observable<IClient>{
    let dataUrl: string = `${this.serverUrl}/register`;
    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.post<IClient>(dataUrl, client, {headers}).pipe(catchError(this.handleError));;
  }

  // Update a client
  public updateClient(client : IClient, id: number) : Observable<IClient>{
    let dataUrl: string = `${this.serverUrl}/update/${id}`;
    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.put<IClient>(dataUrl, client, {headers}).pipe(catchError(this.handleError));;
  }


  // Delete a client
  public deleteClient(id: number) : Observable<{}>{
    let dataUrl: string = `${this.serverUrl}/delete/${id}`;
    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.delete<{}>(dataUrl, {headers}).pipe(catchError(this.handleError));;
  }
 

 
 //Error Handling
  public handleError(error: HttpErrorResponse){
    let errorMessage: string = '';
    if(error.error instanceof ErrorEvent) {
      // client error
      errorMessage = `Error : ${error.error.message}`
    } else {
      // server error
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`
    }
    return throwError(errorMessage);
  }
  
}
