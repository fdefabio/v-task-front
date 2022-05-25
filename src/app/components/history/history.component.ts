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

 
  
  constructor(private AlumnosService: AlumnosService) { }

  ngOnInit():void {

    this.AlumnosService.cargarAlumnos()
    .subscribe( resp => {
      console.log(resp);
      this.usuarios=resp;
    });
  }

 
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  public cargarData(){

  }

}
