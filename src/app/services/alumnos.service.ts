import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'  ;

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { 
    
  }

  cargarAlumnos(){
    const url = 'http://localhost:8080/Principal/Estudiantes'
    return  this.http.get(url);
  }
}
