import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';
import { PaisResponse } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  
  pais!:PaisResponse;

  constructor(private activatedRoute:ActivatedRoute,
    private paisServices:PaisService) {

     }

  ngOnInit(): void {
  
    this.activatedRoute.params.
    pipe(
      switchMap(({id})=>this.paisServices.getPais(id)),
      tap(console.log)
    ).
    subscribe(
      (resp)=>{this.pais=resp}

    )
  
    /*
    this.activatedRoute.params.subscribe(
      ({id})=>{
        this.paisServices.getPais(id).subscribe(
          (data)=> console.log(data)
        );
      } 
    )*/

  }

}
