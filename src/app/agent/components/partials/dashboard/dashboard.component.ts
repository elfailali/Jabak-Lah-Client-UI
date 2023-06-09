import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) {}

  
  addClient(){
    this.router.navigate(['/agent/dash/client/add']);
  }

  listClient(){
    this.router.navigate(['/agent/dash/list']);
  }

}

