import {Component, inject} from '@angular/core';
import {NgxLoadWithDirective} from 'ngx-load-with';
import {Observable} from 'rxjs';
import {Countries} from '../../components/country-guesser/country';
import {CountryGuesserComponent} from '../../components/country-guesser/country-guesser.component';
import {ErrorAlertComponent} from '../../components/country-guesser/error-alert/error-alert.component';
import {LoadingSkeletonComponent} from '../../components/country-guesser/loading-skeleton/loading-skeleton.component';
import {CountryService} from '../../components/country-guesser/services/country.service';

@Component({
  selector: 'country-guesser-wrapper',
  standalone: true,
  templateUrl: './country-guesser-wrapper.component.html',
  imports: [
    CountryGuesserComponent,
    LoadingSkeletonComponent,
    ErrorAlertComponent,
    NgxLoadWithDirective,
  ],
})
export class CountryGuesserWrapperComponent {
  // Metoda inject slouží k získání instance služby.
  protected countries$: Observable<Countries> = inject(CountryService).getAllCountries();
}
