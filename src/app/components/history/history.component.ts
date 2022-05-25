import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Response } from 'src/app/components/interfaces/request-response';
import {AlumnosService} from '../../services/alumnos.service';

@Component({
  selector: 'progress-spinner-overview-example',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],

})




export class HistoryComponent implements OnInit {



  public usuarios: any = [
 ];

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'grupo'];
  dataSource = new MatTableDataSource(this.usuarios);

 
  
  constructor(private alumnosService: AlumnosService) { }

  ngOnInit():void {
    this.cargarAlumnos();
  }

  public cargarAlumnos():void{
    this.alumnosService.cargarAlumnos()
    .subscribe( resp => {
      this.usuarios=resp;
    });
  }

  public eliminarAlumno(id:string):void {

    const ok = confirm("Esta seguro d eeliminar este estudiante?")
    
    this.alumnosService.eliminarAlumno(id)
    .subscribe( resp => {
   });
   this.cargarAlumnos();
  }


   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  public cargarData(){

  }

}
