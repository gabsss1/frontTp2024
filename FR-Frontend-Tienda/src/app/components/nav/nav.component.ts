import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  public token: any;
  public id: any;
  public user_lc: any;

  constructor(
    private _clienteService: ClienteService,
    private _router : Router,

  ) {
    this.token = localStorage.getItem('token');
    this.id = localStorage.getItem('_id');

    // Get user data from localStorage if available
    const userData = localStorage.getItem('user_data');
    this.user_lc = userData ? JSON.parse(userData) : null;

    // Fetch user data from the server
    this.fetchUserData();
  }

  ngOnInit(): void {}

  fetchUserData(): void {
    // Only fetch user data if token and id are available
    if (this.token && this.id) {
      this._clienteService.obtener_cliente_guest(this.id, this.token).subscribe(
        (response) => {  
          console.log(response);
          this.user_lc = response.data;
          localStorage.setItem('user_data', JSON.stringify(this.user_lc));
        },
        (error) => {
          console.log(error);
          // Handle error
        }
      );
    }
  }

  logout(){
    window.location.reload();
    localStorage.clear();
    this._router.navigate(['/']);
  }
}