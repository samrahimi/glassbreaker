import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { IonicModule } from 'ionic-angular';

import { ListViewComponent } from './list-view/list-view';
import { AdiomaInfographicComponent } from './adioma-infographic/adioma-infographic';
@NgModule({
    declarations: 
        [ListViewComponent,AdiomaInfographicComponent],
    imports: [
        CommonModule, IonicModule],
	exports: [
        ListViewComponent, AdiomaInfographicComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ComponentsModule {}
