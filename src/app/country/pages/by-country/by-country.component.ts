import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class ByCountryComponent {

  word: string = '';
  isError: boolean = false
  countries: Country[] = [];

  suggestedCountries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search( word:string ): void {

    this.isError=false;
    this.word=word;

    this.countryService.searchCountry( this.word )
      .subscribe(resp => {
        this.countries = resp;
      },(err) => {
        this.isError=true
        this.countries = []
      });
  }

  suggestions(word:string){
    this.isError=false;
    
    this.countryService.searchCountry(word)
      .subscribe(
        countries => this.suggestedCountries = countries.splice(0,5),
        (err) => this.suggestedCountries = []
        );

  }

}
