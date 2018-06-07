import { Component } from '@angular/core';
import {RickyAndMortyDataProvider} from "../../providers/ricky-and-morty-data/ricky-and-morty-data";
import {ModalController} from "ionic-angular";
import {ModalPage} from "../modal/modal";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  modal: any;
  constructor(public modalCtrl: ModalController,
              public apiDataProvider: RickyAndMortyDataProvider) {

  }

  getDataBasedOnParameter(param: any) {
    // setting the default value for param
    if(!param) {
      param = 'character';
    }

    // getting data from provider
    this.apiDataProvider.getRickyAndMortyData(param)
      .then(data => {
        const modalData = {
          title: param,
          data: data
        };

        // sending data to modal
        this.modal = this.modalCtrl.create(ModalPage, {modalData});
        this.modal.present();

      },error => {
        console.log("Error : ", error);
      });
  }
}
