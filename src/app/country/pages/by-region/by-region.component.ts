import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button{
        margin-right: 5px;
      }
    `
  ]
})
export class ByRegionComponent {

  word: string = '';
  isError: boolean = false
  countries: Country[]=[];
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';


  constructor(private countryService: CountryService) { }

  getCSSClass(region:string): string {
    return (region === this.activeRegion) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activateRegion(region:string){

    //Evitar el refresh si clicamos en la region ya activada
    if (region === this.activeRegion){return;}

    this.activeRegion = region;
    this.countries = [];

    this.countryService.searchRegion( region )
      .subscribe(country => {
        this.countries = country;
      });
  }

}
