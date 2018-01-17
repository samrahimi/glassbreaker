import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ListViewComponent } from './list-view/list-view';
import { CockViewComponent } from './cock-view/cock-view';
@NgModule({
	declarations: [ListViewComponent,
    CockViewComponent],
	imports: [CommonModule],
	exports: [ListViewComponent,
    CockViewComponent]
})
export class ComponentsModule {}
