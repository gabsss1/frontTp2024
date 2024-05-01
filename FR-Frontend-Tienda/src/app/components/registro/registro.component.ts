import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

declare var iziToast:any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  public cliente : any = {
    genero:''
  };

  public load_btn = false;


  constructor (
    
    private _clienteService : ClienteService,
    private _router: Router
  ) {
    
  }

  registro(registroForm:any) {
    if(registroForm.valid) {
      console.log(this.cliente);
      this.load_btn = true;
      this._clienteService.registro_cliente(this.cliente).subscribe(
        response => {
          iziToast.show({
            title: 'Éxito',
            titleColor: '#1DC74C',
            color: 'FFF',
            class: 'text-success',
            position: 'topRight',
            message: 'Se registro correctamente el nuevo cliente'
          });

          this.cliente = {
            genero: '',
            nombres: '',
            apellidos: '',
            f_nacimiento: '',
            telefono: '',
            dni: '',
            email: ''
          }

          this.load_btn = false;
          this._router.navigate(['/']);
        },
          error => {
          console.log(error);
        }
      );
    }
    else {
      iziToast.show({
        title: 'Error',
        titleColor: '#FF0000',
        color: 'FFF',
        class: 'text-danger',
        position: 'topRight',
        message: 'Los datos del formulario no son validos'
      });
    }
}
}
