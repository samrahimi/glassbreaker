import { Injectable } from '@angular/core';

@Injectable()
export class Db {

    //Firebase connection string / endpoints. TODO: move this to settings provider for reuse
    conn: object = null;
    inst: any = null;

    constructor() {
        console.log("Begin Db Init");

        console.log("End Db Init");

    }

    public initDb() {
        console.log("Attempt get DB inistance")
        if (this.inst == null) {
            this.conn = window["firebase"].initializeApp({ 
                apiKey: "AIzaSyBbCx_yoWaCi2TOxTvHvTrd17dG6ehIMCI",
                authDomain: "singular-apps.firebaseapp.com",
                databaseURL: "https://singular-apps.firebaseio.com",
                projectId: "singular-apps",
                storageBucket: "singular-apps.appspot.com",
                messagingSenderId: "913767712952"
            });

            this.inst = window["firebase"].firestore();

        }
    }

    public getInstance() {
        return this.inst;
    }

    public getCollection(name: string) {
        return this.inst.collection(name);
    }

}

