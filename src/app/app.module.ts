import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MobiliarioPage } from '../pages/mobiliario/mobiliario';
import { TabsPage } from '../pages/tabs/tabs';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { NotasPage } from '../pages/notas/notas';


import { EventModalPage } from '../pages/event-modal/event-modal';
import { DetalleventodiaPage } from '../pages/detalleventodia/detalleventodia';
import { SeguimientopagodosPage } from '../pages/seguimientopagodos/seguimientopagodos';




import { NgCalendarModule } from 'ionic2-calendar';
import { HttpProvider } from '../providers/http/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';






@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MobiliarioPage,
    TabsPage,
    ConfiguracionPage,
    EventModalPage,
    DetalleventodiaPage,
    SeguimientopagodosPage,
    NotasPage

  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MobiliarioPage,
    TabsPage,
    ConfiguracionPage,
    EventModalPage,   
    DetalleventodiaPage,
    SeguimientopagodosPage,
    NotasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    Camera,
    IonicStorageModule,
    ScreenOrientation
  ]
})
export class AppModule {}
