import { Component } from '@angular/core';

/**
 * Generated class for the CockViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cock-view',
  templateUrl: 'cock-view.html'
})
export class CockViewComponent {

  text: string;

  constructor() {
    console.log('Hello CockViewComponent Component');
    this.text = 'Hello World';
  }
  public cockerspaniel() {
    this.text = "Breaking News: Dick bit off by COCKer spaniel"
  }

}
