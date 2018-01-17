import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the StringiffyPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'stringiffy',
})
export class StringiffyPipe implements PipeTransform {
  constructor() {console.log('stringiffy init')}
  /**
   * Simple formatted JSON dump - for when you want to 
   * use JSON.stringify and display the result in the UI.
   * When your components aren't displaying the data they're bound to,
   * just drop in <pre>{{ localVariableToDebug | transform }}</pre>
   * and you'll see if the problem is the data / an observable failing to fire
   * or if the front end is not refreshing itself as the data changes.
   * 
   * unlike, say, this.stringifiedObj = this.objectOrReferenceType in the 
   * constructor, your JSON will stay synced with the object being 
   * monitored.  
   */
  transform(value: string, ...args) {
    console.log('stringiffy piping')
    if (value)
      return JSON.stringify(value, null, 2); //Number is indentation space count
    return args[0];
  }
}
