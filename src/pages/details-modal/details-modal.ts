import { Component } from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the DetailsModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-modal',
  templateUrl: 'details-modal.html',
})
export class DetailsModalPage {

  title: any;
  details: any;
  modalData: any;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EpisodeDetailsModalPage');

    // collecting parameters
    this.modalData = this.navParams.get('modalData');

    // setting title
    this.title = this.modalData.title;

    // setting list
    this.details = this.modalData.data;

  }

  // for closing this modal
  closeModal() {
    this.viewCtrl.dismiss();
  }

}
