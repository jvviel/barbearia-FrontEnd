import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the ApresentacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apresentacao',
  templateUrl: 'apresentacao.html',
})
export class ApresentacaoPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menu : MenuController  
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApresentacaoPage');
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
    


  irParaLogin(){
    this.navCtrl.setRoot('LoginPage');
  }

}
