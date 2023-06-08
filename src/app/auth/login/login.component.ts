import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ClientToken } from 'src/app/models/ClientToken';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {}


  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response :any) => {
        const decodedToken = jwtDecode<ClientToken>(response.access_token);
        
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() +  24 * 60 * 60 * 1000);
        const expires = `expires=${expirationDate.toUTCString()}`;
        document.cookie = `${'Authorization'}=${encodeURIComponent('Bearer '+response.access_token)}; ${expires}; path=/`;

        console.log(decodedToken.role);
        
        if (decodedToken.role === 'CLIENT') {
          this.router.navigate(['/agent/dash']);
        } else {
          this.router.navigate(['/login']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

