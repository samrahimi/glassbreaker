import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListViewComponent } from '../../components/list-view/list-view'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
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
  public selectedFeedType: string = "trending"
  public allFeedTypes: string[] = ["trending", "latest", "shocking", "disputed", "celebs"]
  public allItems: any[] = [];
  public feedItems: any[] = [];

  @ViewChild(ListViewComponent) l: ListViewComponent;

  constructor(public afs: AngularFirestore, public navCtrl: NavController, public navParams: NavParams) {
    //Allows us to pre-select the initial filter when navigating to this screen  
    var h:string = navParams.get("initialFeedType")
    if (h) {
      console.log("h is "+h);
      this.selectedFeedType = h;
    }
    
    //How this works: afs.collection returns a handle to an AngularFirestoreCollection
    //.valueChanges returns an Observable wrapping the array of items in the collection, 
    //and that triggers whenever items are added / modified / deleted. It also triggers
    //on initialization once the call has completed and the items are available.
    //
    //Each time the Observable fires, we update our local copy of the allItems collection (this.allItems)
    //and then call filterDataset, which filters the local list based on the filter chosen by the user
    //If we want to get fancy, we can make this.allItems an Observable itself, subscribe to it, and 
    //re-filter the data in there. But why bother... it makes the code unreadable.
    afs.collection('items').valueChanges().subscribe((fullDataSet) => {
      this.allItems = fullDataSet;
      this.filterDataset(this.selectedFeedType)
    });
    //this.allItems$.subscribe((fullDataSet) => {this.feedItems = fullDataSet})
    //this.filterDataset(this.selectedFeedType);
  }
  filterDataset(feedType) {
      switch (feedType) {
        case "latest": 
          this.feedItems = this.allItems.filter(x => x.name.startsWith("a"));
          break;
        case "trending":
          this.feedItems = this.allItems;
          break;
        case "disputed":
          this.feedItems = this.allItems.slice(0,2)
          break;
        default:
          this.feedItems = [];
      }
  }
  loadSearchUI() {
    this.navCtrl.push("SearchPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HamsterPage');
    //this.talkDirty();
  }
}
