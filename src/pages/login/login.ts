import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { username: string, password: string } = {
    username: '',
    password: ''
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public userService: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService, 
    public afs: AngularFirestore) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  //Try to fetch a doc from users db with matching username and password.
  //Show an error on failure
  doLogin() {
    this.afs.doc<any>("users/"+this.account.username).valueChanges().subscribe((u) => {
      if (u == null || u.password != this.account.password) {
        this.showLoginErrorMessage("Wrong password, dickhead")        
      } else 
      { 
        this.userService.login(u);
        this.navCtrl.setRoot(MainPage); 
        //TODO: set a persistent logged in flag, passing u to a provider / service
      }
    }, (err) => {
        console.log("Login Error. err is "+JSON.stringify(err))
        this.showLoginErrorMessage("Technical error. You are not a dickhead")
    })
    /*
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.setRoot(MainPage);
    }, (err) => {
      //In production, stay on the login screen...
      this.navCtrl.setRoot(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: "Wrong password, dickhead",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
    */
  }
  showLoginErrorMessage(text) {
    let toast = this.toastCtrl.create({
      message:text,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
