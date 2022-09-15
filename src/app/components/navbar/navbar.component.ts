import { AuthService } from 'src/app/servicios/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() item: string="";
  miUsuario!: string;

  constructor(private auth: AuthService ) {

  }

  ngOnInit(): void {
    if(this.auth.miUser.email!=null)
    {
      this.miUsuario= this.auth.miUser.email;
    }



  }


  desloguear()
  {
    this.auth.desloguear();
  }

}
