webpackJsonp([21],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ConfiguracionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfiguracionPage = /** @class */ (function () {
    function ConfiguracionPage(navCtrl, navParams, modCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modCtrl = modCtrl;
    }
    ConfiguracionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfiguracionPage');
    };
    ConfiguracionPage.prototype.abrirClientes = function () {
        this.modCtrl.create('CatalogoclientesPage').present();
    };
    ConfiguracionPage.prototype.abrirPagos = function () {
        this.modCtrl.create('PagosPage').present();
    };
    ConfiguracionPage.prototype.abrirTrabajadores = function () {
        this.modCtrl.create('TrabajadoresPage').present();
    };
    ConfiguracionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuracion',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/configuracion/configuracion.html"*/'<!--\n  Generated template for the ConfiguracionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>configuracion</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-card (click)="abrirClientes()">\n        <img src="../../assets/img/ic_lugar.jpg"/>\n        <div class="card-title">Catalogo de Clientes</div>\n        <div class="card-subtitle"></div>\n    </ion-card>\n\n    <ion-card (click)="abrirPagos()">\n        <img src="../../assets/img/ic_place_dos.jpg"/>\n        <div class="card-title">Seguimiento de Pagos</div>\n        <div class="card-subtitle"></div>\n    </ion-card>\n\n    <ion-card (click)="abrirTrabajadores()">\n        <img src="../../assets/img/ic_platos.jpg"/>\n        <div class="card-title">Trabajadores</div>\n        <div class="card-subtitle">Agrega, Elimina y Modifica Contraseñas</div>\n    </ion-card>\n\n\n   \n\n</ion-content>\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/configuracion/configuracion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], ConfiguracionPage);
    return ConfiguracionPage;
}());

//# sourceMappingURL=configuracion.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobiliarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MobiliarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MobiliarioPage = /** @class */ (function () {
    function MobiliarioPage(navCtrl, navParams, http, modCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.modCtrl = modCtrl;
        //searchbar
        this.searchQuery = '';
        this.id = navParams.get('data');
        //alert("pagina Mobiliario"+this.id);
        //this.traerNombres();
        this.initializeItems();
        this.traerDatos();
    }
    MobiliarioPage.prototype.initializeItems = function () {
        this.inventario = this.compl;
    };
    MobiliarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MobiliarioPage');
        this.traerDatos();
    };
    MobiliarioPage.prototype.ionViewCanEnter = function () {
        return this.traerDatos();
    };
    /*
      openModal(nombre_mob:string){
    
        this.modCtrl.create('DetallePage',{
          data: nombre_mob
        }).present();
    
        
      }*/
    //cambios hehco por mi a peticion de troka
    MobiliarioPage.prototype.openModal = function (nombre_mob) {
        var _this = this;
        var modal = this.modCtrl.create('DetallePage', {
            data: nombre_mob
        });
        modal.onDidDismiss(function () {
            _this.initializeItems();
            _this.traerDatos();
            console.log('Modal closed');
        });
        modal.present();
    };
    MobiliarioPage.prototype.ionViewWillEnter = function () {
        this.traerDatos();
    };
    MobiliarioPage.prototype.ionViewDidEnter = function () {
        this.traerDatos();
    };
    /*
      traerNombres(){
        
        this.http.sacarNombresMobiliarioBase().then(
          (nomb) => {
            console.log(nomb)
    
            this.nombres = nomb["nombres"];
            this.items = this.nombres;
            //console.log("Resultado  "+this.nombres);
    
             
          },
          (error) =>{
            console.log("Error"+JSON.stringify(error));
            alert("Verifica que cuentes con internet");
          }
        );
        
      }
    
      */
    MobiliarioPage.prototype.traerDatos = function () {
        var _this = this;
        this.http.revisarBase().then(function (inv) {
            // console.log(inv)     
            _this.inventario = inv["inventario"];
            _this.compl = inv["inventario"];
            // console.log(this.inventario);
            //console.log("Resultado:    "+JSON.stringify(json));   
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    MobiliarioPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.inventario = this.inventario.filter(function (item) {
                return (item.nombre_mob.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    MobiliarioPage.prototype.anadirInvModal = function () {
        var myAnadir = this.modCtrl.create('AnadirInvModalPage');
        myAnadir.present();
    };
    MobiliarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mobiliario',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/mobiliario/mobiliario.html"*/'<!--\n  Generated template for the MobiliarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton >\n        \n    <ion-title>Inventario</ion-title>\n\n<ion-toolbar>\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="Buscar por nombre"></ion-searchbar>\n</ion-toolbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="margin-class" padding >\n\n  \n \n      <ion-list class="mobList-class" *ngFor="let item of inventario">\n          <ion-item>\n            <h2 class="h1Nomb">{{item.nombre_mob}}</h2>\n            <p>{{item.cantidad_mob}} Piezas </p>\n            <p> ${{item.costo_mob}} c/u</p>\n            <button ion-button clear  (click)="openModal(item.nombre_mob)" item-end>Detalles</button>\n            \n          </ion-item>\n        </ion-list>\n     \n       <!--\n      <ion-list>\n          <ion-item *ngFor="let item of items" (click)="openModal(item)">\n            {{ item }}\n          </ion-item>\n        </ion-list>\n-->\n        <ion-fab bottom right>\n            <button ion-fab (click)="anadirInvModal();"><ion-icon name="add"></ion-icon></button>\n        </ion-fab>\n       \n      \n</ion-content>\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/mobiliario/mobiliario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], MobiliarioPage);
    return MobiliarioPage;
}());

//# sourceMappingURL=mobiliario.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotasPage = /** @class */ (function () {
    function NotasPage(navCtrl, navParams, http, alertCtrl, loadingCtrl, modalCtl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtl = modalCtl;
        this.user = navParams.get('user');
        this.pass = navParams.get('pass');
        this.sacarNotesChidoris();
    }
    NotasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotasPage');
    };
    NotasPage.prototype.salirFunction = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Cerrar sesión',
            subTitle: 'Esta seguro que desea salir?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    NotasPage.prototype.sacarNotesChidoris = function () {
        var _this = this;
        console.log("Dentro del page de notas " + this.user);
        this.http.sacarNotas(this.user).then(function (res) {
            _this.notas = res["notasuno"];
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    NotasPage.prototype.agregarnota = function () {
        var _this = this;
        var myAnadir = this.modalCtl.create('ModalnotasaddPage', { nombre: this.user });
        myAnadir.onDidDismiss(function () {
            _this.sacarNotesChidoris();
            console.log('Modal closed');
        });
        myAnadir.present();
    };
    /*
      borrarNota(id_nota, note, body)
      {
        let alert = this.alertCtrl.create({
          title: note,
          subTitle: body,
          buttons: [
            {
              text: 'Eliminar',
              role: 'cancel',
              cssClass: 'customClass',
              handler: () => {
                
                this.presentConfirm(id_nota);
              }
            },
            {
              text: 'OK',
              handler: () => {
                
              }
            }
          ]
        });
        alert.present();
      }
    
    */
    NotasPage.prototype.editarnota = function (id_nota, nota, cuerpo, ruta) {
        var _this = this;
        var myAnadir = this.modalCtl.create('EditarnotaPage', { id_nota: id_nota, note: nota, body: cuerpo, ruta: ruta });
        myAnadir.onDidDismiss(function () {
            _this.sacarNotesChidoris();
            console.log('Modal closed');
        });
        myAnadir.present();
    };
    NotasPage.prototype.presentConfirm = function (id_nota) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Eliminar nota',
            message: 'Esta accion ya no se puede deshacer :C',
            buttons: [
                {
                    text: 'NO',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Si, Acepto',
                    handler: function () {
                        _this.loadingDeBorrar(id_nota);
                        console.log(id_nota);
                    }
                }
            ]
        });
        alert.present();
    };
    NotasPage.prototype.loadingDeBorrar = function (id_nota) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.onDidDismiss(function () {
            _this.confirmar(id_nota);
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    NotasPage.prototype.confirmar = function (id_nota) {
        var _this = this;
        this.http.borrarNota(id_nota).then(function (res) {
            _this.respuestaBorrar = res["evento"];
            console.log(_this.respuestaBorrar);
            _this.sacarNotesChidoris();
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    NotasPage.prototype.presentLoadingDefault = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Agregando sus notas :V'
        });
        loading.onDidDismiss(function () {
            _this.sacarNotesChidoris();
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    NotasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notas',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/notas/notas.html"*/'<!--\n  Generated template for the NotasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="registrar">\n      \n    <ion-title>Tus notas</ion-title>\n\n    <ion-buttons end>\n        <button ion-button icon-only (click)="salirFunction()">\n          <ion-icon name="exit"></ion-icon>\n        </button>\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="fondo">\n   \n\n\n  \n\n\n    <ion-card *ngFor="let nota of notas" (click)="editarnota(nota.id_note, nota.note, nota.body, nota.ruta)" class="cards">\n      \n      <div *ngIf="nota.ruta == \'http://avisositd.xyz/mobiliaria/notasNoMover/\'; else nofoto">\n        <h1>{{nota.note}}</h1>  \n        <div class="divclass">{{nota.body}}</div>\n        <h3 item-end>{{nota.fecha}}</h3>\n      </div>\n      <ng-template #nofoto >\n        <h1>{{nota.note}}</h1>  \n            <div class="divclass">{{nota.body}}</div>\n            <div style="text-align: center; align-items: center;">\n              <img style="width: 70%; image-rendering: pixelated; " [src]=\'nota.ruta\' />\n            </div>\n            \n            <h3 item-end>{{nota.fecha}}</h3>\n      </ng-template>\n\n            \n        </ion-card>\n\n\n    <ion-fab right top (click)="agregarnota()" >\n        <button ion-fab color="registrar"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n    \n\n</ion-content>\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/notas/notas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], NotasPage);
    return NotasPage;
}());

//# sourceMappingURL=notas.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detalleventodia_detalleventodia__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, alertCtrl, http, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.eventSource = [];
        this.selectedDay = new Date();
        //ahora viene lo bueno con las hroas y las declaraciones
        this.nombreEvento12am = "Sin evento";
        this.nombreEvento1am = "Sin evento";
        this.nombreEvento2am = "Sin evento";
        this.nombreEvento3am = "Sin evento";
        this.nombreEvento4am = "Sin evento";
        this.nombreEvento5am = "Sin evento";
        this.nombreEvento6am = "Sin evento";
        this.nombreEvento7am = "Sin evento";
        this.nombreEvento8am = "Sin evento";
        this.nombreEvento9am = "Sin evento";
        this.nombreEvento10am = "Sin evento";
        this.nombreEvento11am = "Sin evento";
        this.nombreEvento12pm = "Sin evento";
        this.nombreEvento1pm = "Sin evento";
        this.nombreEvento2pm = "Sin evento";
        this.nombreEvento3pm = "Sin evento";
        this.nombreEvento4pm = "Sin evento";
        this.nombreEvento5pm = "Sin evento";
        this.nombreEvento6pm = "Sin evento";
        this.nombreEvento7pm = "Sin evento";
        this.nombreEvento8pm = "Sin evento";
        this.nombreEvento9pm = "Sin evento";
        this.nombreEvento10pm = "Sin evento";
        this.nombreEvento11pm = "Sin evento";
        this.calendar = {
            mode: 'month',
            currentDate: this.selectedDay
        };
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.eventosTodos();
    };
    HomePage.prototype.eventosTodos = function () {
        var _this = this;
        this.http.traerFechas().then(function (inv) {
            console.log("fechas todas   " + inv);
            var json = inv["evento"];
            _this.eventSource = [];
            for (var i = 0; i < json.length; i++) {
                // console.log(json[i].nombre_mob);
                var ano = json[i].ano;
                var mes = json[i].mes - 1;
                var dia = json[i].dia;
                //console.log("llega en  "+i+"    "+ano+"-"+mes+"-"+dia);
                ano = new Date(Date.UTC(ano, mes, dia) + (1000 * 60 * 60 * 24));
                _this.eventSource.push({
                    title: json[i].nombre_evento,
                    startTime: ano,
                    endTime: ano,
                    allDay: false
                });
                //console.log("cambiado formato"+ano);
            }
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    HomePage.prototype.abrirAlert = function () {
        /*
        let alert = this.alertCtrl.create({
          title: 'Seleccione tipo de cotizacion',
          buttons: [
            {
              text: 'Cotizacion Normal',
              
              handler: () => {
                this.addEventNormal();
                console.log("c presiono bton normal");
                
              }
            },
            {
              text: 'Cotizacion Rapida',
              handler: () => {
                // pasar a cotizacion rapida
      
      
              }
            }
          ]
        });
        alert.present();*/
        this.alarm();
    };
    HomePage.prototype.addEventNormal = function () {
        var _this = this;
        var modal = this.modalCtrl.create('CotizacionNormalPage', { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                var eventData = data;
                eventData.startTime = new Date(data.startTime);
                eventData.endTime = new Date(data.endTime);
                var events_1 = _this.eventSource;
                events_1.push(eventData);
                _this.eventSource = [];
                setTimeout(function () {
                    _this.eventSource = events_1;
                });
                _this.eventosTodos;
            }
        });
    };
    HomePage.prototype.addEvent = function (data) {
        var _this = this;
        var modal = this.modalCtrl.create('EventoAgregaritemsPage', { selectedDay: this.fecha });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                var eventData = data;
                eventData.startTime = new Date(data.startTime);
                eventData.endTime = new Date(data.endTime);
                var events_2 = _this.eventSource;
                events_2.push(eventData);
                _this.eventSource = [];
                setTimeout(function () {
                    _this.eventSource = events_2;
                });
            }
        });
    };
    HomePage.prototype.OnViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    HomePage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
        this.mostrarEventosDelDia();
        this.llenarCards();
    };
    HomePage.prototype.llenarCards = function () {
        //  console.log(this.eventosChidos);
    };
    HomePage.prototype.mostrarEventosDelDia = function () {
        var _this = this;
        this.mesmasuno = this.selectedDay.getMonth() + 1;
        this.fecha = this.selectedDay.getFullYear() + "-" + this.mesmasuno + "-" + this.selectedDay.getDate();
        console.log(this.fecha);
        if (this.mesmasuno == 1) {
            this.masmes = "Enero";
        }
        else if (this.mesmasuno == 2) {
            this.masmes = "Febrero";
        }
        else if (this.mesmasuno == 3) {
            this.masmes = "Marzo";
        }
        else if (this.mesmasuno == 4) {
            this.masmes = "Abril";
        }
        else if (this.mesmasuno == 5) {
            this.masmes = "Mayo";
        }
        else if (this.mesmasuno == 6) {
            this.masmes = "Junio";
        }
        else if (this.mesmasuno == 7) {
            this.masmes = "Julio";
        }
        else if (this.mesmasuno == 8) {
            this.masmes = "Agosto";
        }
        else if (this.mesmasuno == 9) {
            this.masmes = "Septiembre";
        }
        else if (this.mesmasuno == 10) {
            this.masmes = "Octubre";
        }
        else if (this.mesmasuno == 11) {
            this.masmes = "Noviembre";
        }
        else if (this.mesmasuno == 12) {
            this.masmes = "Diciembre";
        }
        this.fechados = this.selectedDay.getDate() + " de " + this.masmes + " del " + this.selectedDay.getFullYear();
        console.log(this.fechados);
        this.http.obtenerEventosdelDia(this.fecha).then(function (res) {
            _this.eventosChidos = res["eventodelDia"];
            console.log(_this.eventosChidos);
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    HomePage.prototype.mostrarEvento = function (id_evento, fecha_envio_evento) {
        console.log(id_evento, fecha_envio_evento);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detalleventodia_detalleventodia__["a" /* DetalleventodiaPage */], { data: id_evento, date: fecha_envio_evento });
    };
    HomePage.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTime).format('LLLL');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.endTime).format('LLLL');
        var alert = this.alertCtrl.create({
            title: '' + event.title,
            subTitle: 'Desde: ' + start + '<br>Hasta: ' + end,
            buttons: ['OK']
        });
        alert.present();
    };
    //prueba
    HomePage.prototype.alarm = function () {
        var _this = this;
        console.log(this.fechados);
        var prompt = this.alertCtrl.create({
            title: 'Atención',
            subTitle: "Esta a punto de crear un evento el dia: <br/>" + this.fechados,
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Continuar',
                    handler: function (data) {
                        console.log('Saved clicked');
                        console.log(data);
                        _this.addEvent(data);
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/home/home.html"*/'\n<ion-header class="spacer">\n    <div class="spacer" style="height: 10px;"></div>   \n  <ion-navbar class="spacer">\n      \n    <ion-title>\n      {{ viewTitle }}\n    </ion-title>\n\n <ion-buttons end>\n    <button ion-button icon-only (click)="abrirAlert()">\n      <ion-icon name="add"></ion-icon>\n  </button>\n</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content >\n\n    <ion-fab top right edge>\n        <button ion-fab mini (click)="abrirAlert()" color="secondary"><ion-icon name="add"></ion-icon>\n        </button>\n        \n      </ion-fab>\n    \n      <div  scrollY="false">\n        <calendar \n        [eventSource]="eventSource"\n        [calendarMode]="calendar.mode"\n        [currentDate]="calendar.currentDate"\n        (onEventSelected)="onEventSelected($event)"\n        (onTitleChanged)="OnViewTitleChanged($event)"\n        (onTimeSelected)="onTimeSelected($event)"\n        step="30"\n        class="calendar">\n        </calendar>\n</div>\n\n  <div class="ocultarnoevents"></div>\n  \n\n\n    <div class="eventos">\n      <ion-list>\n          <ion-card *ngFor="let evento of eventosChidos" (click)="mostrarEvento(evento.id_evento, evento.fecha_envio_evento)">\n                <div *ngIf="evento.saldo > 1; else pagado" class="cardnopadaga">\n                    <ion-card-header color="light">{{evento.hora_envio_evento}} | {{evento.nombre_titular_evento}}</ion-card-header>\n                    <ion-card-content color="light">{{evento.direccion_evento}}</ion-card-content>   \n                  </div>\n                  <ng-template #pagado class="cardpadaga">\n                      <ion-card-header>{{evento.hora_envio_evento}} | {{evento.nombre_titular_evento}}</ion-card-header>\n                      <ion-card-content>{{evento.direccion_evento}}</ion-card-content>   \n                  </ng-template>\n          </ion-card>\n      </ion-list>\n\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleventodiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__seguimientopagodos_seguimientopagodos__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DetalleventodiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleventodiaPage = /** @class */ (function () {
    function DetalleventodiaPage(navCtrl, navParams, http, toastCtrl, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.id_evento = navParams.get('data');
        this.fecha_envio_evento = navParams.get('date');
        this.costot = 0;
        this.costo_total = 0;
        this.saldo = 0;
        this.sacardetalles(this.id_evento);
        this.sacarItems(this.id_evento);
        this.sacarPago(this.id_evento);
    }
    DetalleventodiaPage.prototype.patras = function () {
        this.navCtrl.pop();
    };
    DetalleventodiaPage.prototype.actualizar = function () {
        this.sacardetalles(this.id_evento);
        this.sacarItems(this.id_evento);
        this.sacarPago(this.id_evento);
    };
    DetalleventodiaPage.prototype.sacardetalles = function (id_evento) {
        var _this = this;
        this.http.detallesdeleventodeldia(id_evento).then(function (res) {
            _this.descuento = 0;
            _this.evento = res["evento"];
            _this.observ = res["evento"];
            for (var _i = 0, _a = _this.evento; _i < _a.length; _i++) {
                var entry = _a[_i];
                _this.hora_envio_evento = entry.hora_envio_evento;
                _this.hora_recoleccion_evento = entry.hora_recoleccion_evento;
                _this.ivavalor = Number(entry.ivavalor);
                _this.descuento = Number(entry.descuento);
                _this.observaciones = entry.observaciones;
            }
            _this.descuento = _this.descuento / 100;
            if (_this.observaciones == null) {
                _this.observaciones = "";
            }
            //console.log(this.ivavalor+"   "+this.descuento);
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    DetalleventodiaPage.prototype.sacarItems = function (id_evento) {
        var _this = this;
        this.http.sacarItemsporEventos(id_evento).then(function (res) {
            _this.items = res["detalles"];
            console.log(_this.items);
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    DetalleventodiaPage.prototype.sacarPago = function (id_evento) {
        var _this = this;
        this.http.detallePago(id_evento).then(function (inv) {
            _this.pagos = inv["pago"];
            for (var _i = 0, _a = _this.pagos; _i < _a.length; _i++) {
                var entry = _a[_i];
                var evento = entry.id_evento;
                _this.costo_total = Number(entry.costo_total);
                _this.saldo = Number(entry.saldo);
            }
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    DetalleventodiaPage.prototype.borrar = function (id_evento, id_mob, ocupados, costo) {
        var _this = this;
        console.log(id_evento, id_mob);
        console.log(this.ivavalor);
        console.log(this.descuento);
        if (this.ivavalor == 1) {
            var precio = Number(((ocupados * costo) - this.descuento * (ocupados * costo)) * 1.16);
            console.log(precio);
            this.costo_total = Number(this.costo_total - precio);
            this.saldo = Number(this.saldo - precio);
            console.log(this.costo_total + "   " + this.saldo);
        }
        else if (this.ivavalor == 0) {
            var precio = (ocupados * costo) - this.descuento * (ocupados * costo);
            console.log(precio);
            this.costo_total = this.costo_total - precio;
            this.saldo = this.saldo - precio;
            this.costo_total = Number(this.costo_total);
            this.saldo = Number(this.saldo);
            console.log(this.costo_total + "   " + this.saldo);
        }
        //if(this.costo_total)
        this.http.borrrarItemsDelevento(id_evento, id_mob, this.costo_total, this.saldo).then(function (res) {
            _this.sacarPago(_this.id_evento);
            if (res["cliente"] == "eliminado") {
                _this.costot = 0;
                _this.costo_total = 0;
                _this.saldo = 0;
                var toast = _this.toastCtrl.create({
                    message: 'Moviliario Eliminado',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
                _this.sacarItems(id_evento);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Fallo la eliminacion Contacta Administrador',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    DetalleventodiaPage.prototype.abono = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__seguimientopagodos_seguimientopagodos__["a" /* SeguimientopagodosPage */], {
            data: this.id_evento
        });
    };
    DetalleventodiaPage.prototype.addmob = function () {
        var _this = this;
        var modal = this.modalCtrl.create('CotizacionrapidaModalPage', {
            data: this.fecha_envio_evento,
            horae: this.hora_envio_evento,
            horar: this.hora_recoleccion_evento,
            id: this.id_evento,
            iva: this.ivavalor,
            descuent: this.descuento
        });
        modal.onDidDismiss(function (data) {
            _this.sacardetalles(_this.id_evento);
            _this.sacarItems(_this.id_evento);
            _this.sacarPago(_this.id_evento);
        });
        modal.present();
    };
    DetalleventodiaPage.prototype.edit = function () {
        var _this = this;
        var modal = this.modalCtrl.create('EditarPage', {
            id: this.id_evento
        });
        modal.onDidDismiss(function (data) {
            _this.sacardetalles(_this.id_evento);
        });
        modal.present();
    };
    DetalleventodiaPage.prototype.presentAlert = function (obs) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Observaciones',
            subTitle: obs,
            inputs: [
                {
                    name: 'observacionesMaster',
                    placeholder: 'Agregar Observaciones'
                }
            ],
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Agregar',
                    handler: function (data) {
                        if (data.observacionesMaster == "") {
                            var ocservar = obs;
                            _this.actualizarComentario(ocservar);
                        }
                        else if (data.observacionesMaster != "") {
                            var observar = obs + '<br/>' + data.observacionesMaster;
                            _this.actualizarComentario(observar);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    DetalleventodiaPage.prototype.actualizarComentario = function (observaciones) {
        var _this = this;
        this.http.actualizarObservaciones(this.id_evento, observaciones).then(function (inv) {
            console.log(inv);
            _this.camentarios = inv['resultado'];
            for (var _i = 0, _a = _this.camentarios; _i < _a.length; _i++) {
                var entry = _a[_i];
                _this.comnets = entry.resulta;
            }
            if (_this.comnets == "registra") {
                var toast = _this.toastCtrl.create({
                    message: 'Observaciones Actualizadas!',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
                _this.actualizar();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Fallo en la conexión inténtelo de nuevo',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    DetalleventodiaPage.prototype.eliminarEvento = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Desea eliminar este evento?',
            message: 'Esta acción no se puede deshacer!!',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        console.log("eligio eliminar evento");
                        _this.borrarEvento();
                    }
                }
            ]
        });
        alert.present();
    };
    DetalleventodiaPage.prototype.borrarEvento = function () {
        var _this = this;
        var eventoEntero = parseInt(this.id_evento);
        this.http.borrarEvento(eventoEntero).then(function (inv) {
            _this.eliminado = inv['evento'];
            console.log(_this.eliminado);
            for (var _i = 0, _a = _this.eliminado; _i < _a.length; _i++) {
                var entry = _a[_i];
                _this.eliminadores = entry.resulta;
            }
            console.log(_this.eliminadores);
            if (_this.eliminadores == "eliminado") {
                _this.borrareventodos();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Fallo la eliminacion de Evento',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    DetalleventodiaPage.prototype.borrareventodos = function () {
        var _this = this;
        this.http.borrarRemanentes(this.id_evento).then(function (res) {
            var json = res['evento'];
            for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                var entry = json_1[_i];
                var jsondos = entry.resulta;
            }
            if (jsondos == "eliminado") {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                var toast = _this.toastCtrl.create({
                    message: 'Eliminacion de Evento Exitosa!!!',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Fallo la eliminacion de Moviliario y Pagos',
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    DetalleventodiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalleventodia',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/detalleventodia/detalleventodia.html"*/'<!--\n  Generated template for the DetalleventodiaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n\n\n\n\n<ion-header class="spacerw">\n    \n\n    <ion-toolbar>\n  <ion-navbar color="primary">\n    <ion-title>Detalles</ion-title>\n  </ion-navbar>\n  <button ion-button (click)="actualizar()">\n      <ion-icon icon-only name="refresh"></ion-icon>\n    </button>\n  </ion-toolbar>\n</ion-header>\n\n\n-->\n\n\n<ion-header>\n    <div class="spacerw" style="height: 8px;"></div>\n    <ion-navbar color="primary">\n      \n      <ion-title>Detalles</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="actualizar()">\n          <ion-icon name="refresh"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n\n\n\n<ion-content class="cardsdetalles">\n\n  <ion-list *ngFor="let evento of evento">\n        \n    <ion-card (click)="presentAlert(evento.observaciones)">\n      \n\n          <ion-card-content>\n            <ion-card-title>\n              {{evento.nombre_titular_evento}}\n            </ion-card-title>\n            <p>\n             Fecha: {{evento.fecha_envio_evento}}\n            </p>\n            <p>\n                Hora: {{evento.hora_envio_evento}}\n               </p>\n            <p>\n              Dirección: {{evento.direccion_evento}}\n             </p>\n          </ion-card-content>\n        \n      </ion-card>\n          \n          <ion-grid>\n              <ion-row >\n                  \n\n\n\n\n                  <ion-col size="auto">\n                      <div *ngIf="!evento.observaciones; else leido">\n                          <ion-chip (click)="presentAlert(evento.observaciones)">\n                              <ion-icon  name="mail"></ion-icon>\n                            </ion-chip>\n                        </div>\n                        <ng-template #leido >\n                            <ion-chip (click)="presentAlert(evento.observaciones)">\n                                <ion-icon color="naranja" name="mail"></ion-icon>\n                              </ion-chip>\n                        </ng-template>\n                    \n                          </ion-col>\n\n\n\n\n\n                <ion-col size="auto">\n            <div *ngIf="evento.entregado == 0; else entregado">\n                <ion-chip>\n                    <ion-icon  name="sad"></ion-icon>\n                    <ion-label >No entregado</ion-label>\n                  </ion-chip>\n              </div>\n              <ng-template #entregado >\n                  <ion-chip color="secondary">\n                     <ion-label >Entregado</ion-label>\n                      <ion-icon name="bus"></ion-icon>\n                    </ion-chip>  \n              </ng-template>\n          \n                </ion-col>\n                <ion-col size="auto">\n                  \n                    <div *ngIf="evento.recolectado == 0; else recolectado">\n                        <ion-chip>\n                            <ion-icon  name="sad"></ion-icon>\n                            <ion-label >No recolectado</ion-label>\n                          </ion-chip>\n                      </div>\n                      <ng-template #recolectado >\n                          <ion-chip color="secondary">\n                              <ion-label >Recolectado</ion-label>\n                              <ion-icon name="bus"></ion-icon>\n                            </ion-chip>  \n                      </ng-template>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n\n</ion-list>\n\n    <ion-list>\n        <div class="spacer" style="height: 4px;"></div> \n              <ion-item-sliding #slidingItem *ngFor="let item of items">\n        <ion-item>\n          <h2>{{item.nombre_mob}}</h2>\n          <p>{{item.ocupados}} </p>\n          \n        </ion-item>\n        <ion-item-options side="right">\n          \n          <button ion-button color="danger" (click)="borrar(id_evento,item.id_fecha, item.ocupados, item.costo_mob)">\n              <ion-icon name="trash">\n            Eliminar \n              </ion-icon>\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n      <div class="spacer" style="height: 2px;"></div> \n      \n      \n     </ion-list>\n     <ion-fab top right>\n      <button ion-fab mini color="secondary"><ion-icon name="construct"></ion-icon></button>\n      <ion-fab-list side="left">\n        <button ion-fab color ="third" (click)="addmob()"><ion-icon name="add"></ion-icon></button>\n        <button ion-fab color ="third" (click)="edit()"><ion-icon name="brush"></ion-icon></button>\n        <button ion-fab color="dinero" (click)="abono()"> <ion-icon name="cash"></ion-icon></button>\n      </ion-fab-list>\n      <ion-fab-list side="bottom">\n        <button ion-fab color ="danger" (click)="eliminarEvento()"><ion-icon name="trash"></ion-icon></button>\n      </ion-fab-list>\n      \n    </ion-fab>\n\n\n   \n      \n    \n</ion-content>\n\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/detalleventodia/detalleventodia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], DetalleventodiaPage);
    return DetalleventodiaPage;
}());

//# sourceMappingURL=detalleventodia.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeguimientopagodosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SeguimientopagodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SeguimientopagodosPage = /** @class */ (function () {
    function SeguimientopagodosPage(navCtrl, toastCtrl, http, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.id = navParams.get('data');
        this.sacarPago();
        console.log(this.id);
    }
    SeguimientopagodosPage.prototype.sacarPago = function () {
        var _this = this;
        this.http.detallePago(this.id).then(function (inv) {
            console.log(inv);
            _this.pagos = inv["pago"];
            console.log(_this.pagos);
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    SeguimientopagodosPage.prototype.abonar = function (abono) {
        var _this = this;
        console.log(abono);
        console.log(this.id);
        this.http.abonarEvento(this.id, abono).then(function (inv) {
            console.log(inv);
            var json = inv["resultado"];
            var string;
            console.log(json);
            for (var i = 0; i < json.length; i++) {
                console.log(json[i].resulta);
                string = json[i].resulta;
            }
            console.log("Nombre" + string);
            var result = string.localeCompare("registra");
            console.log(result);
            if (result != 0) {
                var toast = _this.toastCtrl.create({
                    message: 'Error revisa tu conexion a internet',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                _this.navCtrl.pop();
            }
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    SeguimientopagodosPage.prototype.atras = function () {
        this.viewCtrl.dismiss();
    };
    SeguimientopagodosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-seguimientopagodos',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/seguimientopagodos/seguimientopagodos.html"*/'<!--\n  Generated template for the SeguimientopagodetallePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Detalle</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content >\n  \n      <ion-card *ngFor="let item of pagos" >\n          <ion-item class="center">\n              <h1 class="h1Content">{{item.nombre_titular_evento}}</h1>\n              <h2>Evento {{item.nombre_evento}} </h2>\n            </ion-item>\n  \n            <ion-card-content>\n                \n                <div class = "row">\n                    <div class = "col">Costo Total</div>\n                    <div class = "col">{{item.costo_total | number:\'1.0-2\'}}</div>\n                  </div>\n                <div class = "row">\n                    <div class = "col">Pagado</div>\n                    <div class = "col">{{item.anticipo | number:\'1.0-2\'}}</div>\n                  </div>\n                <div class = "row">\n                    <div class = "col" class="hdContent">Saldo Pendiente</div>\n                    <div class = "col" class="hddContent">{{item.saldo | number:\'1.0-2\'}}</div>\n                  </div>\n  \n                  <p>\n                      <ion-item>\n                          <ion-label color="primary" stacked>Cantidad a Abonar</ion-label>\n                          <ion-input type="number" [(ngModel)]="abono" placeholder="{{item.saldo | number:\'1.0-2\'}}"></ion-input>\n                        </ion-item>\n                         \n                  </p>\n                  <button ion-button (click)="abonar(abono)" full>Abonar</button>\n  \n    \n  \n              </ion-card-content>\n           </ion-card>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/seguimientopagodos/seguimientopagodos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], SeguimientopagodosPage);
    return SeguimientopagodosPage;
}());

//# sourceMappingURL=seguimientopagodos.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/anadir-inv-modal/anadir-inv-modal.module": [
		432,
		13
	],
	"../pages/catalogoclientes/catalogoclientes.module": [
		433,
		12
	],
	"../pages/configuracion/configuracion.module": [
		437,
		20
	],
	"../pages/cotizacion-normal/cotizacion-normal.module": [
		450,
		11
	],
	"../pages/cotizacionrapida-modal/cotizacionrapida-modal.module": [
		449,
		10
	],
	"../pages/detalle/detalle.module": [
		434,
		9
	],
	"../pages/detalleventodia/detalleventodia.module": [
		451,
		19
	],
	"../pages/editar-inventario/editar-inventario.module": [
		435,
		8
	],
	"../pages/editar/editar.module": [
		436,
		7
	],
	"../pages/editarnota/editarnota.module": [
		438,
		6
	],
	"../pages/event-modal/event-modal.module": [
		443,
		18
	],
	"../pages/evento-agregaritems/evento-agregaritems.module": [
		452,
		5
	],
	"../pages/mobiliario/mobiliario.module": [
		439,
		17
	],
	"../pages/modal-agregar-pago-en-calendario/modal-agregar-pago-en-calendario.module": [
		440,
		4
	],
	"../pages/modalnotasadd/modalnotasadd.module": [
		441,
		3
	],
	"../pages/notas/notas.module": [
		442,
		16
	],
	"../pages/pagos/pagos.module": [
		444,
		2
	],
	"../pages/seguimientopagodetalle/seguimientopagodetalle.module": [
		445,
		1
	],
	"../pages/seguimientopagodos/seguimientopagodos.module": [
		446,
		15
	],
	"../pages/tabs/tabs.module": [
		447,
		14
	],
	"../pages/trabajadores/trabajadores.module": [
		448,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpProvider = /** @class */ (function () {
    function HttpProvider(http) {
        this.http = http;
        /*uri */
        this.path = 'https://randomuser.me/api/?results=25';
        this.url = "http://avisositd.xyz/mobiliaria/ListaMobiliario.php";
    }
    HttpProvider.prototype.getAll = function () {
        return this.http.get(this.url);
        //.map(res=>res.json())
    };
    HttpProvider.prototype.insertarEvento = function (nombre_evento, tipo_evento, fecha_envio_evento, hora_envio_evento, fecha_recoleccion_evento, hora_recoleccion_evento, pagado_evento, nombre_titular_evento, direccion, telefono_titular_evento, descuento, ivavalor) {
        var _this = this;
        var datos = { nombre_evento: nombre_evento,
            tipo_evento: tipo_evento,
            fecha_envio_evento: fecha_envio_evento,
            hora_envio_evento: hora_envio_evento,
            fecha_recoleccion_evento: fecha_recoleccion_evento,
            hora_recoleccion_evento: hora_recoleccion_evento,
            pagado_evento: pagado_evento,
            nombre_titular_evento: nombre_titular_evento,
            direccion: direccion,
            telefono_titular_evento: telefono_titular_evento,
            descuento: descuento,
            ivavalor: ivavalor
        };
        var options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        var url = 'http://avisositd.xyz/mobiliaria/agregarEventos.php/';
        return new Promise(function (resolve) {
            _this.http.post(url, JSON.stringify(datos), options)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    HttpProvider.prototype.addPagosMetodoNuevo = function (costo_total, saldo, anticipo) {
        var _this = this;
        var datos = {
            costo_total: costo_total,
            saldo: saldo,
            anticipo: anticipo
        };
        var options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        var url = 'http://avisositd.xyz/mobiliaria/uri/insertarPagos.php/';
        return new Promise(function (resolve) {
            _this.http.post(url, JSON.stringify(datos), options)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    HttpProvider.prototype.addInventorytoEvent = function (fecha_evento, hora_evento, id_mob, ocupados, id_evento, hora_recoleccion) {
        var _this = this;
        var datos = {
            fecha_evento: fecha_evento,
            hora_evento: hora_evento,
            id_mob: id_mob,
            ocupados: ocupados,
            id_evento: id_evento,
            hora_recoleccion: hora_recoleccion
        };
        var options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        var url = 'http://avisositd.xyz/mobiliaria/uri/agregarmobiliariodos.php/';
        return new Promise(function (resolve) {
            _this.http.post(url, JSON.stringify(datos), options)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    HttpProvider.prototype.obtenerEventosdelDia = function (fecha_envio_evento) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/eventodelDia.php?fecha_envio_evento=' + fecha_envio_evento;
        return new Promise(function (resolve, reject) {
            _this.http.get(url).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    HttpProvider.prototype.dispoibilidadmob = function (fecha_evento, hora_evento, id_mob, ocupados, fecha_recoleccion_evento) {
        var _this = this;
        var datos = {
            fecha_evento: fecha_evento,
            hora_evento: hora_evento,
            id_mob: id_mob,
            ocupados: ocupados,
            fecha_recoleccion_evento: fecha_recoleccion_evento
        };
        var options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        var url = 'http://avisositd.xyz/mobiliaria/disponibilidadEvento.php/';
        return new Promise(function (resolve) {
            _this.http.post(url, JSON.stringify(datos), options)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ///mobiliaria/uri/eliminarEvento.php
    HttpProvider.prototype.borrarEvento = function (id_evento) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/uri/eliminarEvento.php?id_evento=' + id_evento;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //actualizar observaciones
    HttpProvider.prototype.actualizarObservaciones = function (id_evento, observaciones) {
        var _this = this;
        var datos = {
            id_evento: id_evento,
            observaciones: observaciones
        };
        var options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        var url = 'http://avisositd.xyz/mobiliaria/uri/actualizarObservaciones.php/';
        return new Promise(function (resolve) {
            _this.http.post(url, JSON.stringify(datos), options)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    HttpProvider.prototype.borrarRemanentes = function (id_evento) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/uri/eliminarPagosYMob.php?id_evento=' + id_evento;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.insertarADisponibilidad = function (arreglo) {
        var _this = this;
        var options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        var url = 'http://avisositd.xyz/mobiliaria/disponibilidadEvento.php/';
        return new Promise(function (resolve) {
            _this.http.post(url, JSON.stringify(arreglo), options)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    HttpProvider.prototype.revisarDisponibilidadDia = function (fecha_envio_evento) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/sumammobiliarioPrueba.php?fecha_envio_evento=' + fecha_envio_evento;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.yanosequehaceesta = function (fecha_envio_evento) {
        //alert(usuario+contra);
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/sacarDisponiblesDelDia.php?fecha_envio_evento=' + fecha_envio_evento;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.detallesdeleventodeldia = function (id_evento) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/DetalleDelEventoDelDiaConItems.php?id_evento=' + id_evento;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.sacarItemsporEventos = function (id_evento) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/ItemsDelEventoDelDia.php?id_evento=' + id_evento;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.borraritemsdelEvento = function (id_evento, id_mob, costo_total) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/uri/borrarmoviliario.php?id_evento=' + id_evento + '&id_mob=' + id_mob + '&costo_mob=' + costo_total;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.borrrarItemsDelevento = function (id_evento, id_mob, costo_total, saldo) {
        var _this = this;
        var datos = {
            id_evento: id_evento,
            id_mob: id_mob,
            costo_total: costo_total,
            saldo: saldo,
        };
        var options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        var url = 'http://avisositd.xyz/mobiliaria/uri/borrarmoviliario2.php/';
        return new Promise(function (resolve) {
            _this.http.post(url, JSON.stringify(datos), options)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    //sacarCostoTotal.php
    HttpProvider.prototype.sacarTotalCosto = function (id_evento) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/uri/sacarCostoTotal.php?id_evento=' + id_evento;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.actualizarPagosacarTotalCosto = function (costo_total, saldo, id_evento) {
        var _this = this;
        var datos = {
            costo_total: costo_total,
            saldo: saldo,
            id_evento: id_evento
        };
        var options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        var url = 'http://avisositd.xyz/mobiliaria/uri/actualizarPago.php/';
        return new Promise(function (resolve) {
            _this.http.post(url, JSON.stringify(datos), options)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    HttpProvider.prototype.actualizarEvento = function (id_evento, nombre_evento, tipo_evento, fecha_envio_evento, hora_envio_evento, fecha_recoleccion_evento, hora_recoleccion_evento, nombre_titular_evento, direccion, telefono_titular_evento) {
        var _this = this;
        var datos = {
            id_evento: id_evento,
            nombre_evento: nombre_evento,
            tipo_evento: tipo_evento,
            fecha_envio_evento: fecha_envio_evento,
            hora_envio_evento: hora_envio_evento,
            fecha_recoleccion_evento: fecha_recoleccion_evento,
            hora_recoleccion_evento: hora_recoleccion_evento,
            nombre_titular_evento: nombre_titular_evento,
            direccion: direccion,
            telefono_titular_evento: telefono_titular_evento
        };
        var options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        var url = 'http://avisositd.xyz/mobiliaria/uri/actualizarEventos.php/';
        return new Promise(function (resolve) {
            _this.http.post(url, JSON.stringify(datos), options)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ////notas
    HttpProvider.prototype.borrarNota = function (id_note) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/notasNoMover/borrarNota.php?id_note=' + id_note;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.meterNotas = function (user, note, body, imagen) {
        var _this = this;
        var datos = {
            user: user,
            note: note,
            body: body,
            imagen: imagen
        };
        var options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        var url = 'http://avisositd.xyz/mobiliaria/notasNoMover/insertarNotas.php/';
        return new Promise(function (resolve) {
            _this.http.post(url, JSON.stringify(datos), options)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    HttpProvider.prototype.actualizarNotas = function (user, note, body, imagen) {
        var _this = this;
        var datos = {
            user: user,
            note: note,
            body: body,
            imagen: imagen
        };
        var options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        var url = 'http://avisositd.xyz/mobiliaria/notasNoMover/actualizarnota.php/';
        return new Promise(function (resolve) {
            _this.http.post(url, JSON.stringify(datos), options)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    HttpProvider.prototype.sacarNotas = function (user) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/notasNoMover/notasChidas.php?user=' + user;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.registrarUsuarioNotas = function (user, pass) {
        var _this = this;
        var datos = {
            user: user,
            pass: pass
        };
        var options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        var url = 'http://avisositd.xyz/mobiliaria/notasNoMover/registrarUsuario.php';
        return new Promise(function (resolve, reject) {
            _this.http.post(url, JSON.stringify(datos), options)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.compararUsuarioNotas = function (user, pass) {
        var _this = this;
        console.log("dentro del provider" + user + " " + pass);
        var url = 'http://avisositd.xyz/mobiliaria/notasNoMover/loginNotas.php?user=' + user + '&pass=' + pass;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ///////////////////////////Troca////////////////////////////////77
    HttpProvider.prototype.loginApp = function (usuario, contra) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/loginMobiliaira.php?usuario=' + usuario;
        return new Promise(function (resolve, reject) {
            _this.http.get(url + '&contra=' + contra)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.revisarBase = function () {
        //alert(usuario+contra);
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/ListaMobiliario.php';
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.sacarNombresMobiliarioBase = function () {
        // console.log("llega al http");
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/ListaMobiliarioNombre.php';
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                // console.log(data);
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.sacarDetalles = function (nombre_mob) {
        var _this = this;
        console.log(nombre_mob);
        var url = 'http://avisositd.xyz/mobiliaria/detalles.php?nombre_mob=' + nombre_mob;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                // console.log(data);
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.insertarInventario = function (todo, imagen) {
        var _this = this;
        var datos = { nombre: todo["nombre"], cantidad: todo["cantidad"], costo: todo["costo"], nombre_extra: todo["nombre_extra"], precio_extra: todo["precio_extra"], imagen: imagen };
        console.log(todo["precio_extra"]);
        var options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        var url = 'http://avisositd.xyz/mobiliaria/AgregarMobiliario.php/';
        return new Promise(function (resolve) {
            _this.http.post(url, JSON.stringify(datos), options)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    HttpProvider.prototype.modificarInventario = function (id, nombre, cantidad, costo, nombre_exta, extra_costo, imagen) {
        var _this = this;
        var datos = { id: id, nombre: nombre, cantidad: cantidad, costo: costo, nombre_extra: nombre_exta, precio_extra: extra_costo, imagen: imagen };
        console.log("Saliente      ");
        console.log(datos);
        var options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        var url = 'http://avisositd.xyz/mobiliaria/modificarInventario.php';
        return new Promise(function (resolve) {
            _this.http.post(url, JSON.stringify(datos), options)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    HttpProvider.prototype.revisarClientes = function () {
        //alert(usuario+contra);
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/ListaClientes.php';
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.eliminarCliente = function (id) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/eliminarCliente.php?id=' + id;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.anadirCliente = function (nombre, telefono, correo) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/agregarCliente.php?nombre=' + nombre + '&telefono=' + telefono + '&correo=' + correo;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.editarCliente = function (nombre, telefono, correo, id) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/editarCliente.php?nombre=' + nombre + '&telefono=' + telefono + '&correo=' + correo + '&id=' + id;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.revisarTrabajadores = function () {
        //alert(usuario+contra);
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/ListaTrabajadores.php';
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.eliminarTrabajador = function (id) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/eliminarTrabajador.php?id=' + id;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.anadirUsuario = function (nombre, usuario, contrasena, correo, rol, fecha) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/agregarUsuario.php?nombre=' + nombre + '&usuario=' + usuario + '&contrasena=' + contrasena + '&corr=' + correo + '&rol=' + rol + '&fecha=' + fecha;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.revisarSaldos = function () {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/ListaPagos.php';
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ////////detalle pago/////////////////////////////////////////////////////////////////////////////7
    HttpProvider.prototype.detallePago = function (id) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/pagos/seguimientopago.php?id_evento=' + id;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.abonarEvento = function (id, abono) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/pagos/abonar.php?id=' + id;
        return new Promise(function (resolve, reject) {
            _this.http.get(url + '&abono=' + abono)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.traerFechas = function () {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/eventosTodos.php';
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider.prototype.eliminarItem = function (nombre) {
        var _this = this;
        var url = 'http://avisositd.xyz/mobiliaria/eliminarItem.php?nombre=' + nombre;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventModalPage = /** @class */ (function () {
    function EventModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.event = { startTime: new Date().toISOString(), endTime: new Date().toISOString() };
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get('selectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
    }
    EventModalPage.prototype.save = function () {
        this.viewCtrl.dismiss(this.event);
    };
    EventModalPage.prototype.cancelar = function () {
        this.viewCtrl.dismiss();
    };
    EventModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-modal',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/event-modal/event-modal.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalles del Evento</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n    <ion-item>\n      <ion-input type = "text" placeholder="Nombre del Evento" [(ngModel)]="event.title"></ion-input>\n    </ion-item>\n\n   \n        <ion-item>\n          <ion-label>Inicia el: </ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY HH:mm" pickerFormtat="DD/MM/YYYY HH:mm" [(ngModel)]="event.startTime"></ion-datetime>\n        </ion-item>\n\n        \n            <ion-item>\n                <ion-label>Termina el: </ion-label>\n              <ion-datetime displayFormat="DD/MM/YYYY HH:mm" pickerFormtat="DD/MM/YYYY HH:mm" [(ngModel)]="event.endTime"></ion-datetime>\n            </ion-item>\n\n           \n                <ion-item>\n                    <ion-label>Titular del evento: </ion-label>\n                  <ion-input type = "text" [(ngModel)]="event.titular"></ion-input>\n                </ion-item>\n            \n\n                \n                <ion-item>\n\n                        <ion-label>Direccion: </ion-label>\n                      <ion-input type = "text" [(ngModel)]="event.direccion"></ion-input>\n                    </ion-item>\n\n                  \n\n  </ion-list>\n\n\n\n  <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button round icon-end color="danger"(click)="cancelar()">\n              <ion-icon padding name="close-circle"></ion-icon>Cancelar\n          </button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button round icon-end (click)="save()">\n              <ion-icon padding name="checkmark"></ion-icon>Agregar\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/event-modal/event-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], EventModalPage);
    return EventModalPage;
}());

//# sourceMappingURL=event-modal.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_mobiliario_mobiliario__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_configuracion_configuracion__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_notas_notas__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_event_modal_event_modal__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_detalleventodia_detalleventodia__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_seguimientopagodos_seguimientopagodos__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic2_calendar__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_http_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_mobiliario_mobiliario__["a" /* MobiliarioPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_configuracion_configuracion__["a" /* ConfiguracionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_event_modal_event_modal__["a" /* EventModalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detalleventodia_detalleventodia__["a" /* DetalleventodiaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_seguimientopagodos_seguimientopagodos__["a" /* SeguimientopagodosPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_notas_notas__["a" /* NotasPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_17_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/anadir-inv-modal/anadir-inv-modal.module#AnadirInvModalPageModule', name: 'AnadirInvModalPage', segment: 'anadir-inv-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/catalogoclientes/catalogoclientes.module#CatalogoclientesPageModule', name: 'CatalogoclientesPage', segment: 'catalogoclientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalle/detalle.module#DetallePageModule', name: 'DetallePage', segment: 'detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editar-inventario/editar-inventario.module#EditarInventarioPageModule', name: 'EditarInventarioPage', segment: 'editar-inventario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editar/editar.module#EditarPageModule', name: 'EditarPage', segment: 'editar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracion/configuracion.module#ConfiguracionPageModule', name: 'ConfiguracionPage', segment: 'configuracion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editarnota/editarnota.module#EditarnotaPageModule', name: 'EditarnotaPage', segment: 'editarnota', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mobiliario/mobiliario.module#MobiliarioPageModule', name: 'MobiliarioPage', segment: 'mobiliario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-agregar-pago-en-calendario/modal-agregar-pago-en-calendario.module#ModalAgregarPagoEnCalendarioPageModule', name: 'ModalAgregarPagoEnCalendarioPage', segment: 'modal-agregar-pago-en-calendario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modalnotasadd/modalnotasadd.module#ModalnotasaddPageModule', name: 'ModalnotasaddPage', segment: 'modalnotasadd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notas/notas.module#NotasPageModule', name: 'NotasPage', segment: 'notas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pagos/pagos.module#PagosPageModule', name: 'PagosPage', segment: 'pagos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seguimientopagodetalle/seguimientopagodetalle.module#SeguimientopagodetallePageModule', name: 'SeguimientopagodetallePage', segment: 'seguimientopagodetalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seguimientopagodos/seguimientopagodos.module#SeguimientopagodosPageModule', name: 'SeguimientopagodosPage', segment: 'seguimientopagodos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trabajadores/trabajadores.module#TrabajadoresPageModule', name: 'TrabajadoresPage', segment: 'trabajadores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cotizacionrapida-modal/cotizacionrapida-modal.module#CotizacionrapidaModalPageModule', name: 'CotizacionrapidaModalPage', segment: 'cotizacionrapida-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cotizacion-normal/cotizacion-normal.module#CotizacionNormalPageModule', name: 'CotizacionNormalPage', segment: 'cotizacion-normal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalleventodia/detalleventodia.module#DetalleventodiaPageModule', name: 'DetalleventodiaPage', segment: 'detalleventodia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/evento-agregaritems/evento-agregaritems.module#EventoAgregaritemsPageModule', name: 'EventoAgregaritemsPage', segment: 'evento-agregaritems', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_20__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_mobiliario_mobiliario__["a" /* MobiliarioPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_configuracion_configuracion__["a" /* ConfiguracionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_event_modal_event_modal__["a" /* EventModalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detalleventodia_detalleventodia__["a" /* DetalleventodiaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_seguimientopagodos_seguimientopagodos__["a" /* SeguimientopagodosPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_notas_notas__["a" /* NotasPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_http_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 169,
	"./af.js": 169,
	"./ar": 170,
	"./ar-dz": 171,
	"./ar-dz.js": 171,
	"./ar-kw": 172,
	"./ar-kw.js": 172,
	"./ar-ly": 173,
	"./ar-ly.js": 173,
	"./ar-ma": 174,
	"./ar-ma.js": 174,
	"./ar-sa": 175,
	"./ar-sa.js": 175,
	"./ar-tn": 176,
	"./ar-tn.js": 176,
	"./ar.js": 170,
	"./az": 177,
	"./az.js": 177,
	"./be": 178,
	"./be.js": 178,
	"./bg": 179,
	"./bg.js": 179,
	"./bm": 180,
	"./bm.js": 180,
	"./bn": 181,
	"./bn.js": 181,
	"./bo": 182,
	"./bo.js": 182,
	"./br": 183,
	"./br.js": 183,
	"./bs": 184,
	"./bs.js": 184,
	"./ca": 185,
	"./ca.js": 185,
	"./cs": 186,
	"./cs.js": 186,
	"./cv": 187,
	"./cv.js": 187,
	"./cy": 188,
	"./cy.js": 188,
	"./da": 189,
	"./da.js": 189,
	"./de": 190,
	"./de-at": 191,
	"./de-at.js": 191,
	"./de-ch": 192,
	"./de-ch.js": 192,
	"./de.js": 190,
	"./dv": 193,
	"./dv.js": 193,
	"./el": 194,
	"./el.js": 194,
	"./en-au": 195,
	"./en-au.js": 195,
	"./en-ca": 196,
	"./en-ca.js": 196,
	"./en-gb": 197,
	"./en-gb.js": 197,
	"./en-ie": 198,
	"./en-ie.js": 198,
	"./en-il": 199,
	"./en-il.js": 199,
	"./en-nz": 200,
	"./en-nz.js": 200,
	"./eo": 201,
	"./eo.js": 201,
	"./es": 202,
	"./es-do": 203,
	"./es-do.js": 203,
	"./es-us": 204,
	"./es-us.js": 204,
	"./es.js": 202,
	"./et": 205,
	"./et.js": 205,
	"./eu": 206,
	"./eu.js": 206,
	"./fa": 207,
	"./fa.js": 207,
	"./fi": 208,
	"./fi.js": 208,
	"./fo": 209,
	"./fo.js": 209,
	"./fr": 210,
	"./fr-ca": 211,
	"./fr-ca.js": 211,
	"./fr-ch": 212,
	"./fr-ch.js": 212,
	"./fr.js": 210,
	"./fy": 213,
	"./fy.js": 213,
	"./gd": 214,
	"./gd.js": 214,
	"./gl": 215,
	"./gl.js": 215,
	"./gom-latn": 216,
	"./gom-latn.js": 216,
	"./gu": 217,
	"./gu.js": 217,
	"./he": 218,
	"./he.js": 218,
	"./hi": 219,
	"./hi.js": 219,
	"./hr": 220,
	"./hr.js": 220,
	"./hu": 221,
	"./hu.js": 221,
	"./hy-am": 222,
	"./hy-am.js": 222,
	"./id": 223,
	"./id.js": 223,
	"./is": 224,
	"./is.js": 224,
	"./it": 225,
	"./it.js": 225,
	"./ja": 226,
	"./ja.js": 226,
	"./jv": 227,
	"./jv.js": 227,
	"./ka": 228,
	"./ka.js": 228,
	"./kk": 229,
	"./kk.js": 229,
	"./km": 230,
	"./km.js": 230,
	"./kn": 231,
	"./kn.js": 231,
	"./ko": 232,
	"./ko.js": 232,
	"./ky": 233,
	"./ky.js": 233,
	"./lb": 234,
	"./lb.js": 234,
	"./lo": 235,
	"./lo.js": 235,
	"./lt": 236,
	"./lt.js": 236,
	"./lv": 237,
	"./lv.js": 237,
	"./me": 238,
	"./me.js": 238,
	"./mi": 239,
	"./mi.js": 239,
	"./mk": 240,
	"./mk.js": 240,
	"./ml": 241,
	"./ml.js": 241,
	"./mn": 242,
	"./mn.js": 242,
	"./mr": 243,
	"./mr.js": 243,
	"./ms": 244,
	"./ms-my": 245,
	"./ms-my.js": 245,
	"./ms.js": 244,
	"./mt": 246,
	"./mt.js": 246,
	"./my": 247,
	"./my.js": 247,
	"./nb": 248,
	"./nb.js": 248,
	"./ne": 249,
	"./ne.js": 249,
	"./nl": 250,
	"./nl-be": 251,
	"./nl-be.js": 251,
	"./nl.js": 250,
	"./nn": 252,
	"./nn.js": 252,
	"./pa-in": 253,
	"./pa-in.js": 253,
	"./pl": 254,
	"./pl.js": 254,
	"./pt": 255,
	"./pt-br": 256,
	"./pt-br.js": 256,
	"./pt.js": 255,
	"./ro": 257,
	"./ro.js": 257,
	"./ru": 258,
	"./ru.js": 258,
	"./sd": 259,
	"./sd.js": 259,
	"./se": 260,
	"./se.js": 260,
	"./si": 261,
	"./si.js": 261,
	"./sk": 262,
	"./sk.js": 262,
	"./sl": 263,
	"./sl.js": 263,
	"./sq": 264,
	"./sq.js": 264,
	"./sr": 265,
	"./sr-cyrl": 266,
	"./sr-cyrl.js": 266,
	"./sr.js": 265,
	"./ss": 267,
	"./ss.js": 267,
	"./sv": 268,
	"./sv.js": 268,
	"./sw": 269,
	"./sw.js": 269,
	"./ta": 270,
	"./ta.js": 270,
	"./te": 271,
	"./te.js": 271,
	"./tet": 272,
	"./tet.js": 272,
	"./tg": 273,
	"./tg.js": 273,
	"./th": 274,
	"./th.js": 274,
	"./tl-ph": 275,
	"./tl-ph.js": 275,
	"./tlh": 276,
	"./tlh.js": 276,
	"./tr": 277,
	"./tr.js": 277,
	"./tzl": 278,
	"./tzl.js": 278,
	"./tzm": 279,
	"./tzm-latn": 280,
	"./tzm-latn.js": 280,
	"./tzm.js": 279,
	"./ug-cn": 281,
	"./ug-cn.js": 281,
	"./uk": 282,
	"./uk.js": 282,
	"./ur": 283,
	"./ur.js": 283,
	"./uz": 284,
	"./uz-latn": 285,
	"./uz-latn.js": 285,
	"./uz.js": 284,
	"./vi": 286,
	"./vi.js": 286,
	"./x-pseudo": 287,
	"./x-pseudo.js": 287,
	"./yo": 288,
	"./yo.js": 288,
	"./zh-cn": 289,
	"./zh-cn.js": 289,
	"./zh-hk": 290,
	"./zh-hk.js": 290,
	"./zh-tw": 291,
	"./zh-tw.js": 291
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 400;

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notas_notas__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, toastCtrl, loadingCtrl, http, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.mobiliarioPage = __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */];
        this.storage.get('USU').then(function (usu) {
            console.log("Usuario" + usu);
            _this.usuario = usu;
        });
        this.storage.get('PASS').then(function (pass) {
            console.log("Contrasena" + pass);
            _this.contra = pass;
        });
        this.storage.get('NUM').then(function (num) {
            console.log(num);
            var guardado = num;
            if (guardado != 0) {
                _this.inicioSesion(_this.usuario, _this.contra);
            }
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.notify = function () {
        console.log("Recuerdame es: " + this.recuerda);
        //alert(this.recuerda);
    };
    LoginPage.prototype.verifivarllenos = function () {
        if (this.usuariodos == null || "") {
            var toast = this.toastCtrl.create({
                message: 'Ingresa un usuario',
                duration: 1500,
                position: 'top'
            });
            toast.present();
        }
        else if (this.contra == null || "") {
            var toast = this.toastCtrl.create({
                message: 'Ingresa una contraseña',
                duration: 1500,
                position: 'top'
            });
            toast.present();
        }
        else {
            this.someFunction();
        }
    };
    LoginPage.prototype.someFunction = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Iniciando Sesion...'
        });
        loading.present();
        event.stopPropagation();
        if (this.recuerda == true) {
            this.storage.set('USU', this.usuario);
            this.storage.set('PASS', this.contra);
            this.storage.set('NUM', 1);
            //console.log("Guardaste"+this.usuario+this.contra);
        }
        else {
            //console.log("No vas a guardar DATOS");
        }
        this.http.loginApp(this.usuario, this.contra).then(function (data) {
            //console.log(data)  
            //var result = data["Usuario"];
            // console.log(data["rol"]);
            var json = data["Usuario"];
            //console.log("este es el json: "+json);
            for (var i = 0; i < json.length; i++) {
                // console.log(json[i].nombre_mob);
                //guardamos rol y id en variables
                _this.rol = json[i].rol;
                _this.id = json[i].id_usuario;
            }
            // console.log(this.id+this.rol);
            //console.log("Result"+result);
            //console.log("ID:  "+this.id);
            if (_this.id != 0) {
                loading.dismiss();
                if (_this.rol == "Administrador") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */], {
                        data: _this.id
                    });
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'Este Usuario no tiene los Privilegios necesarios',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
            }
            else {
                _this.compararUsuaroNotas(_this.usuario, _this.contra);
                loading.dismiss();
            }
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            _this.internetToast();
        });
    };
    LoginPage.prototype.compararUsuaroNotas = function (usuario, contra) {
        var _this = this;
        console.log(usuario + " " + contra);
        this.http.compararUsuarioNotas(usuario, contra).then(function (res) {
            var respuesta = res["esta"];
            if (respuesta == "esta") {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__notas_notas__["a" /* NotasPage */], { user: usuario, pass: contra });
                _this.presentToast("Hola usuario...", "top");
            }
            else {
                _this.presentToast("Usuario o Contraseña incorrectas", "top");
            }
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    LoginPage.prototype.presentToast = function (mensaje, posision) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: posision
        });
        toast.present();
    };
    LoginPage.prototype.internetToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Verifica que cuentes con Internet',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    LoginPage.prototype.inicioSesion = function (usuario, contra) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Iniciando Sesion...'
        });
        loading.present();
        // console.log(usuario+contra);
        this.http.loginApp(usuario, contra).then(function (data) {
            console.log(data);
            var json = data["Usuario"];
            for (var i = 0; i < json.length; i++) {
                // console.log(json[i].nombre_mob);
                _this.rol = json[i].rol;
                _this.id = json[i].id_usuario;
            }
            console.log("ID:  " + _this.id);
            if (_this.id != 0) {
                loading.dismiss();
                if (_this.rol == "Administrador") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */], {
                        data: _this.id
                    });
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'Este Usuario no tiene los Privilegios necesarios',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
            }
            else {
                _this.presentToast("Hola usuario!", "top");
                loading.dismiss();
            }
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            _this.internetToast();
        });
    };
    ////////////lo nuevo
    LoginPage.prototype.registrar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Usuario Nuevo',
            inputs: [
                {
                    name: 'user',
                    placeholder: 'Correo Electrónico'
                },
                {
                    name: 'pass',
                    placeholder: 'Contraseña'
                }, {
                    name: 'pass2',
                    placeholder: 'Confirma tu contraseña'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Registrar',
                    handler: function (data) {
                        if (data.pass == data.pass2) {
                            _this.registrarUsuarioNotas(data.user, data.pass);
                        }
                        else {
                            _this.presentToast("Ambas contraseñas deben ser iguales", "bottom");
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.registrarUsuarioNotas = function (user, pass) {
        var _this = this;
        this.http.registrarUsuarioNotas(user, pass).then(function (res) {
            var answer = res["registro"];
            console.log(answer);
            if (answer == "registrado") {
                _this.presentToast("Registro Exitoso", "middle");
                _this.anadirNotas(user, "Bienvenido", "Te damos la bienvenida a NotasSeguras Mobifest :D donde" +
                    " podras guardar de manera segura tus notas. Puedes borrar esta nota cuando quieras." +
                    "Sinceramente CarlitosRugratz DP");
            }
            else {
                _this.presentToast("Nombre de usuario no disponible", "middle");
            }
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    LoginPage.prototype.anadirNotas = function (user, note, body) {
        var _this = this;
        this.http.meterNotas(user, note, body, "").then(function (res) {
            _this.respuesta = res["notasuno"];
            console.log(_this.respuesta);
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/login/login.html"*/'\n\n<ion-content>\n\n\n  <body>\n       <ion-img src="../../assets/img/ic_logo.png"></ion-img> \n  <ion-item>\n    <ion-label color="primary" stacked>Usuario</ion-label>\n    <ion-input type="text"  [(ngModel)]="usuario" [(ngModel)]="usuariodos" placeholder="JoseManuelGdlO"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" stacked>Contraseña</ion-label>\n    <ion-input type="password"  [(ngModel)]="contra" [(ngModel)]="contrados" placeholder="**************"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label>¡Recuerdame!</ion-label>\n      <ion-toggle [(ngModel)]="recuerda" (ionChange)="notify()"></ion-toggle>\n    </ion-item>\n  <p></p>\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col>\n          <button ion-button color="registrar" block (click)="registrar()">Registrar</button>\n      </ion-col>\n      <ion-col>\n          <button ion-button (click)="verifivarllenos()" block>Iniciar Sesion</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n </body>\n</ion-content>\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mobiliario_mobiliario__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__configuracion_configuracion__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.calendario = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.inventario = __WEBPACK_IMPORTED_MODULE_5__mobiliario_mobiliario__["a" /* MobiliarioPage */];
        this.configuracion = __WEBPACK_IMPORTED_MODULE_6__configuracion_configuracion__["a" /* ConfiguracionPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        var openTab = this.navParams.get('openTab');
        if (openTab) {
            this.tabsRef.select(openTab);
        }
    };
    TabsPage.prototype.cerrarSesion = function () {
        this.storage.set('USU', null);
        this.storage.set('PASS', null);
        this.storage.set('NUM', 0);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    TabsPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Estas seguro?',
            message: 'Quieres Cerrar Sesion?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.cerrarSesion();
                    }
                }
            ]
        });
        confirm.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Tabs */])
    ], TabsPage.prototype, "tabsRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/tabs/tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-tabs  color="primary" #myTabs>\n    <ion-tab [root]="calendario" tabTitle="Calendario" tabIcon="calendar"></ion-tab>\n    <ion-tab [root]="inventario" tabTitle="Inventario" tabIcon="ios-archive-outline"></ion-tab>\n    <ion-tab [root]="configuracion" tabTitle="Otros" tabIcon="ios-more"></ion-tab>\n    <ion-tab tabTitle="Cerrar Sesion" (ionSelect)="showConfirm()" tabIcon="md-exit"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[336]);
//# sourceMappingURL=main.js.map