import { Component, OnInit } from '@angular/core';
import {ExamenesService} from '../../services/examenes.service';
import { Examen } from '../interfaces/request-response';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
 examen ={
  "titulo": "",
  "pregunta": [
    {
      "pregunta": "",
    }
  ],
  "comentarioDocente": "",
  "descripcion": "",
  "grupo": ""
}

  public Examenes:any =[];

  constructor(private examenes: ExamenesService) { }

  ngOnInit(): void {
  this.cargarExamenes();
  }

  cargarExamenes():void{
    this.examenes.cargarExamenes()
    .subscribe( resp => {
      this.Examenes = resp;
    })
  }

  eliminarExamen(id:string):void{
    const ok = confirm("Seguro que desea eliminar este examen?");
    if(ok == true){
      this.examenes.eliminarExamen(id)
      .subscribe( resp => {
        this.cargarExamenes();
      })   
    }
     
  }

  agregarExamen(){
    this.examenes.crearExamen(this.examen)
    .subscribe(() => 
      this.cargarExamenes()
     );

    this.examen={
      "titulo": "",
      "pregunta": [
        {
          "pregunta": "",
        }
      ],
      "comentarioDocente": "",
      "descripcion": "",
      "grupo": ""
    }
  }
}
