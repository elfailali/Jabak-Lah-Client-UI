import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { DefaultComponent } from './components/default/default.component';
import { DetailsClientComponent } from './components/details-client/details-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/partials/dashboard/dashboard.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardClientComponent } from './components/list-client/card-client/card-client.component';


@NgModule({
  declarations: [
    AgentComponent,
    AddClientComponent,
    DefaultComponent,
    DetailsClientComponent,
    EditClientComponent,
    ListClientComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    PageNotFoundComponent,
    SpinnerComponent,
    CardClientComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    HttpClientModule,
    FormsModule
  ]
  
})
export class AgentModule { }
