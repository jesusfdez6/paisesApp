import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PaisResponse } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl :string ='https://restcountries.eu/rest/v2';

  constructor( private http : HttpClient) { }


  buscarPais(termino:string):Observable<PaisResponse[]>{

    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<PaisResponse[]>(url);
          
  }

  buscarCapital(termino:string):Observable<PaisResponse[]>{

    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<PaisResponse[]>(url);
          
  }

  getPais(id:string):Observable<PaisResponse>{

    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<PaisResponse>(url);
          
  }
  
  

}
