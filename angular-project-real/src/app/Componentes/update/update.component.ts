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
  // El codigo que iba aca me obstaculizaba la obtencion de datos en rutas. ts
  // const rut_entrada = <string> this.activeRoute.snapshot.params['id'];
  // console.log("Rut de entrada: " + rut_entrada);

}

  update1() {
    const rut_entrada = <string> this.activeRoute.snapshot.params['id'];
    console.log("Rut de entrada: " + rut_entrada);
    this.Srv1Service.editDato(rut_entrada, this.datos).subscribe();
    this.Router.navigate(['/home']);
  }

  // update() {
  //   const id_entrada = <string> this.activeRoute.snapshot.params['id'];
  //   this.Srv1Service.editDato(id_entrada, this.datos).subscribe(
  //     res => {
  //       console.log(res);
  //       this.Router.navigate(['/home'])
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   )
  // }
}
