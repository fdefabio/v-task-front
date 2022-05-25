import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Examen } from '../components/interfaces/request-response';

@Injectable({
  providedIn: 'root'
})
export class CrearExamenesDocenteService {

  constructor(private http: HttpClient) { 

  }

  cargarCrearExamenes(){
    const url = 'http://localhost:8080/Principal/AgregarExamen'
    return  this.http.get(url);
  }
}
