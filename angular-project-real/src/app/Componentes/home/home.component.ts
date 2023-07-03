import { Component, OnInit } from '@angular/core';
import { Srv1Service, Empleado } from '../../Servicios/srv1.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ListarEmpleado: Empleado[] = [];

  constructor(private Srv1Service:Srv1Service, private router:Router) { }

  ngOnInit(): void {
    this.listarDatos();
  }

  listarDatos() {
    this.Srv1Service.getDatos().subscribe(
      res => {
        console.log(res)
        this.ListarEmpleado = <any> res;
      },
      err => console.log(err)
    )
  }

  eliminar(id: string) {
    this.Srv1Service.deleteDato(id).subscribe(
      res => {
        console.log("Empleado eliminado!!!")
        this.listarDatos();
      },
      err => {
        console.log(err)
      }
    )
  }

  update(id: string) {
    this.router.navigate(['/edit/' + id])
  }
}
