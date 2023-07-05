import { Component, OnInit } from '@angular/core';
import { Srv1Service, Empleado } from '../../Servicios/srv1.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

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

  constructor( private Srv1Service: Srv1Service,
               private Router: Router,
               private activeRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const rut_entrada = <string> this.activeRoute.snapshot.params['rut'];
    console.log('rut de entrada: ' + rut_entrada);
}

  update1() {
    const rut_1 = <string> this.activeRoute.snapshot.params['rut'];
    this.datos.Rut = rut_1;
    console.log(rut_1)

    this.Srv1Service.editDato(this.datos).subscribe();
    this.Router.navigate(['/home']);
  }
}
