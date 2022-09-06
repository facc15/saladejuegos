import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router)
{

}

  goToQuienSoy()
  {
    this.router.navigate(['/','quiensoy']);
  }



  goToLogin()
  {
    this.router.navigate(['/','login']);
  }

  goToError()
  {
    this.router.navigate(['/','error']);
  }

}
