import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ListViewComponent } from '../../components/list-view/list-view'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { UuidProvider } from '../../providers/uuid/uuid';
import { BlockchainProvider } from '../../providers/blockchain/blockchain';

/**
 * Generated class for the HamsterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public selectedFeedType: string = "trending"
  public allFeedTypes: string[] = ["trending", "latest", "shocking", "disputed", "celebs"]
  public allItems: any[] = [];
  public feedItems: any[] = [];

  @ViewChild(ListViewComponent) l: ListViewComponent;

  constructor(public uuid: UuidProvider, 
    public afs: AngularFirestore, 
    public navCtrl: NavController, 
    public navParams: NavParams,  
    public modalCtrl: ModalController,
    public bc: BlockchainProvider) {
    //Allows us to pre-select the initial filter when navigating to this screen  
    var h:string = navParams.get("initialFeedType")
    if (h) {
      console.log("h is "+h);
      this.selectedFeedType = h;
    }
    
    //The Angular firebase / firestore libs use Observables instead of callbacks or promises
    //An observable is basically a promise crossed with an event listener - the resolution method 
    //will fire each time the observed data changes, passing the updated dataset into the callback
    //(or an error, but we're not trapping those right now) 
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
  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        item.id = this.afs.createId();
        item.created_at = Date.now();

        var hashStamp = {
          id: this.afs.createId(),
          event_type: 'user_submitted_report',
          event_time: item.created_at,
          item_url: 'items/'+item.id,
          item_md5sum: this.bc.getHashForObject(item),
          audit_trail: {
            previous:null,
            next: null,
            blockchainTxId: null
          }
        }
        this.afs.collection("items").add(item);
        this.afs.collection("hash_trail").add(hashStamp);

        console.log("Wrote new item and hash info to Firestore")
      } else {
        console.log("Possible error in form - item is null or undefined");
        console.log("Not writing to DB!");
      }
    })
    addModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    //this.talkDirty();
  }
}
