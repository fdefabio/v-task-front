import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CargarExamenesService {

  constructor(private http: HttpClient) {

   }

   cargarExamenes(){
    const url = 'http://localhost:8080/Principal/Examenes'
    return  this.http.get(url);
  }
}
