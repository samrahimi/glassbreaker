import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { IonicModule } from 'ionic-angular';

import { ListViewComponent } from './list-view/list-view';
import { CockViewComponent } from './cock-view/cock-view';
@NgModule({
    declarations: 
        [ListViewComponent,
        CockViewComponent],
    imports: [
        CommonModule, 
        IonicModule.forRoot(ListViewComponent)],
	exports: [
        ListViewComponent,
        CockViewComponent,
    ]
})
export class ComponentsModule {}
