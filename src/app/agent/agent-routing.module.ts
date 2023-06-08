import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './agent.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/partials/dashboard/dashboard.component';
import { DefaultComponent } from './components/default/default.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { DetailsClientComponent } from './components/details-client/details-client.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: AgentComponent },
  {path: "login", component: LoginComponent},
  
    

  {path: "dash" , component: DashboardComponent, children:[
    {path: "", component: DefaultComponent},
    {path: "client/add", component: AddClientComponent},
    {path: "list", component: ListClientComponent},
    {path: "client/edit/:id", component: EditClientComponent},
    {path: "client/:id", component: DetailsClientComponent},
    
    
  ]
  },

 
  {path: "**", component: PageNotFoundComponent},
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
