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
    //this.refresh(false);
  }

 query(params?: any) {
    //return db
    //
    //return this.items.filter((x) => x[params[0].key].startsWith(x[params[0]]) )
    //var docsPromise = await this.db.getCollection("items").get()
    return this.items;
  }

  refresh(callback) {
    console.log("Reload items from DB and update the local collection")
    //Firestore is a little bastard and doesn't have toArray on collections
    //so we can't .map it into our model, we have to iterate
    this.db.getCollection("items").get().then((results) => {
      results.forEach((doc) => {
        let existing = this.items.filter((x) => {
          x.id && 
          typeof x.id !== 'undefined' && 
          x.id == doc.id})
        if (existing.length == 0)
        {
          var i = doc.data()
          this.items.push(new Item({id: doc.id, name: i.name, about: i.about}))
        }
      })
      console.log("Refresh complete")
      if (callback) {
        callback(); //Ready to do stuff with the data
      }
    })
  }

  add(item: any) {
    console.log("Add item to DB");
    console.log(JSON.stringify(item, null, 2))
    this.items.push(item)
    this.db.getCollection("items").add(item).then(() => {})
  }

  delete(item: any) {
    this.db.getCollection("items").doc(item.id).delete().then(() => {})
  }

  clear() {
    this.db.getCollection("items").get().then((results) => {
      results.forEach((doc) => {
        this.delete({id: doc.id})      
      })
      console.log("Items table is clear.")
      this.items = [];
    })
  }
}
