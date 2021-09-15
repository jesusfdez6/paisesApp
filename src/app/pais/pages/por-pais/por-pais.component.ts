import { Component, OnInit } from '@angular/core';
import { PaisResponse } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent   {

  termino :string ='';
  hayError:boolean=false;
  paises :PaisResponse[] =[];
  constructor(private paisServices : PaisService) { }

    buscar(termino:string){

      this.hayError=false;
      this.termino =termino;
      
      this.paisServices.buscarPais(this.termino).subscribe(
         (data)=>{this.paises=data
       },
         (err=>{
          this.paises=[];
          this.hayError=true;
         })
      );
    }
    sugerencias(termino:string){
    
      this.hayError=false;

    }
 
}
