import { Component, OnInit } from '@angular/core';
import {ExamenesService} from '../../services/examenes.service';
import { Examen } from '../interfaces/request-response';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
 examen = {
  titulo: '',
  nota  : '',
  pregunta: [
    {
      pregunta: '',
    },
    {
      pregunta: '',
    },
    {
      pregunta: '',
    },
    {
      pregunta: '',
    }
  ],
  comentarioDocente: '',
  idDocente: '',
  descripcion: '',
  grupo: ''
}

  public Examenes:any =[];

  public Grupos:any=[];

  constructor(private examenes: ExamenesService) { }

  ngOnInit(): void {
  this.cargarExamenes();
  this.cargarGrupos();
  }

  cargarExamenes():void{
    this.examenes.cargarExamenes()
    .subscribe( resp => {
      this.Examenes = resp;
    })
  }

  cargarGrupos():void{
    this.examenes.cargarGrupos()
    .subscribe( resp => {
      console.log(resp)
      this.Grupos = resp;
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
     this.examen = {
      titulo: '',
      nota  : '',
      pregunta: [
        {
          pregunta: '',
        },
        {
          pregunta: '',
        },
        {
          pregunta: '',
        },
        {
          pregunta: '',
        }
      ],
      comentarioDocente: '',
      idDocente: '',
      descripcion: '',
      grupo: ''
    }
    
  }


}
