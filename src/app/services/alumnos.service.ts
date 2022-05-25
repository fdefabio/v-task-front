import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/components/interfaces/request-response';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { 
    
  }

  cargarAlumnos(){
    const url = 'http://localhost:8080/Principal/Estudiantes'
    return  this.http.get<Response>(url);
  }
}
