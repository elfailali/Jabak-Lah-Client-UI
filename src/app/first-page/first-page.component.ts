import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent {

  constructor(private router: Router) {}
 

  goToAgentEspace(){
    this.router.navigate(['/agent/login']);
  }

  goToClientEspace(){
    this.router.navigate(['/login'])
  }

}
