import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ListViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-view',
  templateUrl: 'list-view.html',
  inputs: ["feedType","feedItems"]
})
export class ListViewComponent {

  text: string;
  feedType: string;
  feedItems: Observable<any[]>;

  constructor() {
    console.log('Hello ListViewComponent Component');
    //this.text = 'Hello World';
  }

}
