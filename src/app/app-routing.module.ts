import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CreditorSelectionComponent } from './payement/creditor-selection/creditor-selection.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'account', component: HomeComponent}, //
  {path: 'payment', component: CreditorSelectionComponent},
  {path: 'settings', component: HomeComponent}, //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
