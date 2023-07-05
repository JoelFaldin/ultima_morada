import { Component, OnInit } from '@angular/core';
import { Srv1Service, Empleado } from '../../Servicios/srv1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  datos: Empleado = {
    Rut: '',
    Nombre: '',
    Apellido: '',
    Direccion: '',
    Telefono: '',
    Sueldo: '',
    Antiguedad: '',
    Tipo_trabajo: ''
  };

  constructor( private Srv1Service:Srv1Service, private Router:Router) { }

  ngOnInit(): void {
  }
  
  agregar(){
    this.Srv1Service.addDato(this.datos).subscribe();
    this.Router.navigate(['/home']);
  }
}
