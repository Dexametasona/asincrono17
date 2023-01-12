import { AlmacenServiceService } from './../../service/almacen-service.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.scss']
})
export class AlmacenComponent implements OnInit {
  almacen=[
    {
      "id":1,
      "cod":1,
      "descript":"Galletas chokis",
      "compra":10,
      "venta":15,
      "Existencia":100
    }
  ]

  constructor(private router:Router, private route:ActivatedRoute, private almacenService:AlmacenServiceService) { }

  editar(id:number){
    this.router.navigate(['/editar',id])
  }
  ngOnInit(): void {
    this.almacen=this.almacenService.almacen
  }

}
