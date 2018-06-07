import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from "@angular/common/http";
import { RickyAndMortyDataProvider } from '../providers/ricky-and-morty-data/ricky-and-morty-data';
import {DetailsModalPage} from "../pages/details-modal/details-modal";
import {ModalPage} from "../pages/modal/modal";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsModalPage,
    ModalPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsModalPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RickyAndMortyDataProvider
  ]
})
export class AppModule {}
