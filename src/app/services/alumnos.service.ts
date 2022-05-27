import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/components/interfaces/request-response';

const BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  

  constructor(private http: HttpClient) { 
    
  }

  cargarAlumnos(){
      
    return  this.http.get<Response>(`${BASE_URL}/Principal/Estudiantes`);
  }

  eliminarAlumno(id:string){
    const url = `${BASE_URL}/Principal/eliminarEstudiante/`+id;
    return  this.http.delete(url);
  }
}
