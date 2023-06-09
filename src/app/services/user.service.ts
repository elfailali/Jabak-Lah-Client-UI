import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  PATH_OF_API = 'http://localhost:8084/api/v1/auth/authenticate';
  constructor(
    private httpclient: HttpClient,    
    private cookieService : CookieService
  ) {}

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  private authorization = this.cookieService.get('Authorization');

  
  
  public login(loginData: any) {
    return this.httpclient.post(this.PATH_OF_API , loginData, {
      headers: this.requestHeader,
    });
  }


  

  public changePswFirstTime(changePswData: any) {
    let dataUrl: string = `http://localhost:8084/client/changePassword`;
    
    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpclient.post(dataUrl , changePswData, {headers});
  }

  
}
