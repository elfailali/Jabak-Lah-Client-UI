import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ChangePassWordComponent } from './change-pass-word/change-pass-word.component';



@NgModule({
  declarations: [
    LoginComponent,
    ChangePassWordComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    ChangePassWordComponent
  ]
})
export class AuthModule { }
