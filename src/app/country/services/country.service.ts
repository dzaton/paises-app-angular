import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams(){
    return new HttpParams().set('fields','name,capital,cca2,flags,population' );
  }

  constructor(private http: HttpClient) { }

  searchCountry(word: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${word}`;

    return this.http.get<Country[]>( url, {params: this.httpParams} );

    /* Otra manera de manejar errores es con catchError:
    
    import { catchError } from 'rxjs/operators';

    return this.http.get( url )
      .pipe(catchError(err => of(['xxxxxxxx'])));
    
    */
  }

  searchCapital(word: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${word}`;

    return this.http.get<Country[]>( url, {params: this.httpParams} );

  }

  searchRegion(word: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${word}`;

    return this.http.get<Country[]>( url, {params: this.httpParams} );

  }


  getCountryByAlpha(id: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country[]>( url );

  }
}
