import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public token : any;
  public user : any = undefined;
  public user_lc : any = undefined;
  public id : any;

  constructor(private _clienteService: ClienteService) {
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
}
