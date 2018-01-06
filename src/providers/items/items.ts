import { Injectable} from '@angular/core';

import { Item } from '../../models/item';
import { Db } from '../db/db';

@Injectable()
export class Items  {
  items: Item[] = [];
  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };

  constructor(private db: Db) { 
    console.log("In providers/items constructor. Got handle to Firestore DB")
    window["debug_Items"] = this;
    console.log("Available for debug at window['debug_Items']");
    this.refresh();
  }

 query(params?: any) {
    //return db
    //
    //return this.items.filter((x) => x[params[0].key].startsWith(x[params[0]]) )
    //var docsPromise = await this.db.getCollection("items").get()
    return this.items;
  }

  refresh() {
    console.log("Reload items from DB and update the local collection")
    this.items = [];
    //this sucks cause it's gonna flicker. oh well
    return this.db.getCollection("items").get().then((results) => {
      results.forEach((doc) => {
        var i = doc.data()
        i.id = doc.id
        this.items.push(i)
      
      })
      console.log("Refresh complete")
    })
  }

  add(item: Item) {
    console.log("Add item to DB");
    this.db.getCollection("items").add(item).then(() => {this.refresh()})
  }

  delete(item: Item) {
    this.db.getCollection("items").doc(item.id).delete().then(() => {this.refresh()})
  }
}
