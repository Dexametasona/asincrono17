import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlmacenServiceService {
  almacen=[
    {
      "id":1,
      "cod":1,
      "descript":"Galletas chokis",
      "compra":10,
      "venta":15,
      "Existencia":100
    },
    {
      "id":2,
      "cod":2,
      "descript":"Mermelada de fresa",
      "compra":65,
      "venta":80,
      "Existencia":100
    },
    {
      "id":3,
      "cod":3,
      "descript":"Aceite",
      "compra":18,
      "venta":20,
      "Existencia":100
    },
    {
      "id":4,
      "cod":4,
      "descript":"Palomitas de maiz",
      "compra":12,
      "venta":15,
      "Existencia":100
    },
    {
      "id":5,
      "cod":5,
      "descript":"Doritos",
      "compra":5,
      "venta":8,
      "Existencia":100
    }
  ]
  actualizar(id:number, cod:number, descript:string, buy:number, sell:number, stock:number){
  let selecto=this.almacen.filter((x)=>{return x.id==id})
  let index=this.almacen.indexOf(selecto[0])
  this.almacen[index].cod=cod;
  this.almacen[index].descript=descript;
  this.almacen[index].compra=buy;
  this.almacen[index].venta=sell;
  this.almacen[index].Existencia=stock;
  
  }
  constructor() { }
}
