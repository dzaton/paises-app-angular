import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {

  word: string = '';
  isError: boolean = false
  countries: Country[]=[];

  constructor(private countryService: CountryService) { }

  search( word:string ): void {

    this.isError=false;
    this.word=word;

    this.countryService.searchRegion( this.word )
      .subscribe(resp => {
        this.countries = resp;
      },(err) => {
        this.isError=true
        this.countries = []
      });
  }

  suggestions(word:string){
    this.isError=false;
    //TODO: crear sugerencias

  }

}
