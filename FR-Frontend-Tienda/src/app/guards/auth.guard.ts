import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private _clienteService: ClienteService,
    private _router:Router
  ) {
  
  }

  canActivate(): any {
    if (!this._clienteService.isAuthenticated()){
      this._router.navigate(['/login']);
      return false;
    }

    return true;
  }
};
