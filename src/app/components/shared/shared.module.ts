import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Angular material
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    MatTableModule
  ],
  
})
export class SharedModule { }
