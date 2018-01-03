import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Db } from '../db/db';

@Injectable()
export class Items {
  items: Item[] = [];
  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };

  constructor(private db: Db) { 
    console.log("In providers/items NONMOCK")
  }

  query(params?: any) {
    //return db
    //
    return this.items;
  }

  add(item: Item) {
    console.log("Add item from DB");
    this.db.getCollection("items").add(item)
  }

  delete(item: Item) {
  }

}
