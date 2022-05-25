import { Component, OnInit } from '@angular/core';
import {CrearExamenesDocenteService} from '../../services/crear-examenes-docente.service';
import {CargarExamenesService} from '../../services/cargar-examenes.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public examenes:any =[];

  constructor(private crearExamenes: CrearExamenesDocenteService , private cargarExamenes: CargarExamenesService) { }

  ngOnInit(): void {
    this.crearExamenes.cargarCrearExamenes()
    .subscribe( resp => {
      console.log(resp);
    })

    this.cargarExamenes.cargarExamenes()
    .subscribe( resp => {
      console.log(resp);
      this.examenes = resp;
    })


  }

}
