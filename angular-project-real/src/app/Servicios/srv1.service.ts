import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Srv1Service {

  url = '/api';
  constructor(private http: HttpClient) { }

  //Obtener datos
  getDatos() {
    return this.http.get(this.url);
  }

  //Obtener un dato:
  getDato(Rut: string){
    return this.http.get(this.url + '/' + Rut);
  }

  //Agregar dato
  addDato(Empleado: any){
    return this.http.post(this.url, Empleado);
  }

  //Eliminar dato
  deleteDato(Rut: string){
    return this.http.delete(this.url + '/' + Rut);
  }

  //Modificar dato
  editDato(Empleado: any){
    return this.http.put(this.url, Empleado)
  }

}

//Interfaz que valida los datos
export interface Empleado {
  Rut: string;
  Nombre: string;
  Apellido: string;
  Direccion: string;
  Telefono: string;
  Sueldo: string;
  Antiguedad: string;
  Tipo_trabajo: string;
}
