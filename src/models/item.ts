/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export class Item {

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface Item {
  [prop: string]: any;
}

//Because the class def'n and interface for Item is 100% generic, we can create the rest of our 
//model classes by extending it, no need to write any code. This way we can let the model evolve
//naturally and add new fields, etc. on the fly... once the app is more fully baked we can come back
//and formally define the model classes.
//export class User extends Item {}
//export interface User extends Item {}