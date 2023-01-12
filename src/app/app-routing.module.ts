import { EditarComponent } from './comp-asinc17/editar/editar.component';
import { AlmacenComponent } from './comp-asinc17/almacen/almacen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'almacen', component:AlmacenComponent},
  {path:'editar', component:EditarComponent},
  {path:'', redirectTo:'/almacen', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
