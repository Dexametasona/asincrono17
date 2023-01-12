import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlmacenComponent } from './almacen/almacen.component';
import { EditarComponent } from './editar/editar.component';



@NgModule({
  declarations: [
    AlmacenComponent,
    EditarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlmacenComponent,
    EditarComponent
  ]
})
export class CompAsinc17Module { }
