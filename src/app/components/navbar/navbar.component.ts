import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() item: string="";
  miUsuario!: string;
  public user$: Observable<any> =this.auth.afAuth.user;
  public user:any;

  constructor(private auth: AuthService,private router: Router ) {

  }

  async ngOnInit() {
    this.user = await this.auth.getUserLog();

  }


  desloguear()
  {
    this.auth.desloguear();
this.router.navigateByUrl('home');
  }

}
