import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../interfaces/user';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}




@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {


  usuarios: User[] = [
    {user: "fderlo", name: 'dario', weight: 1.0079, sexo: "M"},
    {user: "dian", name: 'diana', weight: 1.0079, sexo: "F"},
    {user: "mari", name: 'maria', weight: 1.0079, sexo: "F"},
    {user: "jujua", name: 'juan', weight: 1.0079, sexo: "M"},
    {user: "joseco", name: 'jose', weight: 1.0079, sexo: "M"},
    {user: "digo80", name: 'diego', weight: 1.0079, sexo: "M"},
    {user: "adri26", name: 'adriana', weight: 1.0079, sexo: "M"},
  
  ];

  displayedColumns: string[] = ['user', 'name', 'weight', 'sexo','acciones'];
  dataSource = new MatTableDataSource(this.usuarios);
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
