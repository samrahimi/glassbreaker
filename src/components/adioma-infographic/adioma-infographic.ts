import { Component } from '@angular/core';

/**
 * Generated class for the AdiomaInfographicComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'adioma-infographic',
  templateUrl: 'adioma-infographic.html',
  inputs: ['data_source', 'color', 'title', 'subtitle']
})
export class AdiomaInfographicComponent {

  data_with_layout: any[]; //the JSON array in data_source with additional fields to specify style and positioning of each element

  constructor() {
    console.log('Hello AdiomaInfographicComponent Component');
  }

}
