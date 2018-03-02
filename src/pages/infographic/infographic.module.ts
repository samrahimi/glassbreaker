import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfographicPage } from './infographic';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    InfographicPage,
  ],
  imports: [
    IonicPageModule.forChild(InfographicPage),
    ComponentsModule
  ],
})
export class InfographicPageModule {}
