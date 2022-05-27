import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {

  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
    
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        //Obtenemos el id mediante desestructuracion de argumentos {id}
        switchMap( ( {id} ) => this.countryService.getCountryByAlpha(id)),
        //El tap imprime en consola lo que devuelva el Observable devuelto en el switchMap
        tap(console.log)
      )
      .subscribe(country => this.country = country);

  }

}
