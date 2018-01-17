import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HamsterPage } from './hamster';
import {ComponentsModule} from '../../components/components.module'
@NgModule({
  declarations: [
    HamsterPage,
  ],
  imports: [
    IonicPageModule.forChild(HamsterPage),
    ComponentsModule
  ],
})
export class HamsterPageModule {}
