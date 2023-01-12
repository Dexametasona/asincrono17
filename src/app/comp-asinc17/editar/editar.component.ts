import { AlmacenServiceService } from './../../service/almacen-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  id!:string | null
  idConvert!:number
  ObjetoLLamado:any[]=[]
  constructor(private router:Router, private route:ActivatedRoute, private almacenService:AlmacenServiceService) { }

  editar(id:string, cod:string, descript:string, buy:string, sell:string, stock:string){
    let idC=parseInt(id);
    let codC=parseInt(cod);
    let buyC=parseInt(buy);
    let sellC=parseInt(sell);
    let stockC=parseInt(stock)
    this.almacenService.actualizar(idC,codC,descript,buyC,sellC,stockC)
    this.router.navigate(['/almacen'])
  }
  cancel(){
    this.router.navigate(['/almacen'])
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id!==null){
      this.idConvert=parseInt(this.id)
    }

      this.ObjetoLLamado=this.almacenService.almacen.filter(
      x=>{
        return x.id==this.idConvert
      }
      )
    }
    
  }


