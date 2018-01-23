import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // We really should define this as a model class, but who's got type for style.
  account: { name: string, username:string, email: string, password: string, privacy:boolean, security: boolean} = {
    name: '',
    username: '',
    email: '',
    password: '',
    privacy: false,
    security: false
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(
    public afs: AngularFirestore,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public userService: User) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }
  
  validateAccountSettings(proposedAccountSettings, onValidationOK, onInvalid) {
    //make sure the username isn't already taken! because Firestore lets us 
    //use custom ids, we're making the username the id, which lets us  
    //check for dupes and also validate the name text in a single operation.   
    this.afs.doc<any>("users/"+this.account.username).valueChanges().subscribe((u) => {
      if (u == null) {
        console.log("Passed name validation and unique check. Creating acct "+JSON.stringify(this.account))
        onValidationOK();
      }
    }, (err) => {
      onInvalid(err);
    })
  }

  doSignup() {
    this.validateAccountSettings(this.account, () => {
      this.afs.doc<any>("users/"+this.account.username).set(this.account).then(success => {
        //User has logged in. Store details in app global state
        this.userService.login(this.account)
        this.navCtrl.setRoot(MainPage);
      }, err => {
        let toast = this.toastCtrl.create({
          message: JSON.stringify(err),
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      })  
    }, function(err) {
      let toast = this.toastCtrl.create({
        message: "Invalid Username. Simple text only, please",
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    })
  }

  ionViewDidEnter() {
    //Hacky workaround for autocomplete when in browser
    /*
    setTimeout(() => {
      var els = window.document.getElementsByTagName("input")
      els["email"].value="";
      els["password"].value="";
      console.log('Cleared potential autocomplete values once view loaded');  
    }, 200); */
  }


}
