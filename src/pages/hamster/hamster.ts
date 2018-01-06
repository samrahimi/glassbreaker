import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HamsterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hamster',
  templateUrl: 'hamster.html',
})
export class HamsterPage {
  public filteredDataset: string="";
  public selectedSpecies: string = "chinese"

  public allSpecies: string[] = ["syrian", "chinese", "dwarf"]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var h:string = navParams.get("initialHamsterType")
    if (h) {
      console.log("h is "+h);
      //this.selectedSpecies = h;
    } 
    this.filterDataset(this.selectedSpecies);
  }
  filterDataset(species) {
    this.filteredDataset = "";
      for (var i=0; i<20; i++)
        this.filteredDataset += (species + " ")
  }
  loadSearchUI() {
    this.navCtrl.push("SearchPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HamsterPage');
  }

}
