import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



//Angular material
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,

   
    ],
  exports: [
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    FormsModule
 
  ],
  
})
export class SharedModule { }
