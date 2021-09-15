import { Component, OnInit } from '@angular/core';
import { PaisResponse } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  hayError:boolean = false;
  termino:string ='';
  ciudades:PaisResponse[]=[];

  constructor(private paisServices:PaisService){}
  buscar(termino:string){

    this.hayError=false;
    this.termino =termino;
    
    this.paisServices.buscarCapital(this.termino).subscribe(
       (data)=>{this.ciudades=data
     },
       (err=>{
        this.ciudades=[];
        this.hayError=true;
       })
    );
  }
  sugerencias(termino:string){
  
    this.hayError=false;

  }

}
