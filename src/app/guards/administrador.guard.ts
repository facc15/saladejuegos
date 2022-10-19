import { Usuario } from 'src/app/clases/usuario';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../servicios/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorGuard implements CanActivate {

  public usuarios!: Usuario[];
  constructor(private auth: AuthService, private afAuth: AngularFireAuth) {

  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>
  {
    let admin=false;

    const user= await this.auth.getUserLog();

      if(user)
      {
        const usuario= await this.auth.traerUsuario(user.uid);
        if(usuario.perfil=='administrador')
        {
          admin=true;
        }
      }


      return admin;
  }

}
