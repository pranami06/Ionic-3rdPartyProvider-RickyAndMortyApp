import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {DetailsModalPage} from "../details-modal/details-modal";

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  modalData: any;
  title: string;
  count: number;
  list: any;
  modal: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {

    // collecting parameters
    this.modalData = this.navParams.get('modalData');

    // setting title
    this.title = this.modalData.title;

    // setting list
    this.list = this.modalData.data.results;

    // setting count
    this.count = this.modalData.data.info.count;

  }

  // Details function for sending to Details modal
  getDetails(id: number) {
    for (let item of this.list) {
      if(item.id == id) {
        const modalData = {
          title: this.title,
          data: item
        };
        this.modal = this.modalCtrl.create(DetailsModalPage, {modalData});
      }
    }
    this.modal.present();
  }

  // for closing this modal
  closeModal() {
    this.viewCtrl.dismiss();
  }

}
