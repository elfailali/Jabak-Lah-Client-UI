import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ClientToken } from 'src/app/models/ClientToken';
import { UserService } from 'src/app/services/user.service';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-change-pass-word',
  templateUrl: './change-pass-word.component.html',
  styleUrls: ['./change-pass-word.component.css']
})
export class ChangePassWordComponent implements OnInit{

  


  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private cookieService: CookieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    const token = this.cookieService.get('token');
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      // Use the token as needed in the component
    });

  }


  changePasswordForm = new FormGroup({
    password: new FormControl('', Validators.required)
  });

  onSubmit(changePswForm : NgForm) {
    this.userService.changePswFirstTime(changePswForm.value).subscribe(
      (response :any) => {
        const decodedToken = jwtDecode<ClientToken>(response.access_token);

        // decodedToken.isFirstLogin = false;
        
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() +  24 * 60 * 60 * 1000);
        const expires = `expires=${expirationDate.toUTCString()}`;
        document.cookie = `${'Authorization'}=${encodeURIComponent('Bearer '+response.access_token)}; ${expires}; path=/`;

        console.log(decodedToken.isFirstLogin);
        
        if (decodedToken.isFirstLogin === false) {
          this.router.navigate(['/login']);
          
        } else {
          this.router.navigate(['/change-password']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  

  get f() { return this.changePasswordForm.controls; }

}
