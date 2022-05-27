import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Examen } from '../components/interfaces/request-response';
import { Grupos } from '../components/interfaces/grupos';
const BASE_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class ExamenesService {

  constructor(private http: HttpClient) { }

  cargarExamenes(){
    return  this.http.get<Examen>(`${BASE_URL}/Principal/Examenes/`);
  }

  eliminarExamen(id:string){
    return  this.http.delete(`${BASE_URL}/Principal/eliminarExamen/`+id);
  }

  crearExamen(examen:any){
    return this.http.post('http://localhost:8080/Principal/AgregarExamen/',examen);
  }

  cargarGrupos(){
    return  this.http.get<Grupos>(`${BASE_URL}/Principal/Grupos/`);
  }
}
