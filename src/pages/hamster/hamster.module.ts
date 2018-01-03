import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HamsterPage } from './hamster';

@NgModule({
  declarations: [
    HamsterPage,
  ],
  imports: [
    IonicPageModule.forChild(HamsterPage),
  ],
})
export class HamsterPageModule {}
