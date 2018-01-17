import { NgModule } from '@angular/core';
import { StringiffyPipe } from './stringiffy/stringiffy';

@NgModule({
	declarations: [StringiffyPipe],
	exports: [StringiffyPipe]
})
export class PipesModule {}
