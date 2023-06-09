import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import jwtDecode from 'jwt-decode';
import { MyToken } from '../../models/MyToken';

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
        const decodedToken = jwtDecode<MyToken>(response.access_token);
        
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() +  24 * 60 * 60 * 1000);
        const expires = `expires=${expirationDate.toUTCString()}`;
        document.cookie = `${'Authorization'}=${encodeURIComponent('Bearer '+response.access_token)}; ${expires}; path=/`;

        console.log(decodedToken.role);
        
        if (decodedToken.role === 'AGENT') {
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

