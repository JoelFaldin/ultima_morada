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
//   //Modificar dato
//   editDato(id: string, dato1: Empleado){
//     // Cuando esto funcione :c
//     const url = `${this.url}/${id}`;
//     const nomb_piedra = dato1;
//     console.log(nomb_piedra)

//     // console.log(nomb_piedra)
//     // console.log("hello")
//     // // console.log(body)

//     //id retorna numero, dato1.nombre_piedra retorna el nombre de la nueva piedra
//     return this.http.put(url, nomb_piedra);
//   }
// }

//Interfaz que valida los datos
//Quité el :? de los datos de abajo para probar algunas cosas (y parece que esta funcionando :D)
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
