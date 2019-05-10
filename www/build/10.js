webpackJsonp([10],{

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CotizacionrapidaModalPageModule", function() { return CotizacionrapidaModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cotizacionrapida_modal__ = __webpack_require__(464);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CotizacionrapidaModalPageModule = /** @class */ (function () {
    function CotizacionrapidaModalPageModule() {
    }
    CotizacionrapidaModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cotizacionrapida_modal__["a" /* CotizacionrapidaModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cotizacionrapida_modal__["a" /* CotizacionrapidaModalPage */]),
            ],
        })
    ], CotizacionrapidaModalPageModule);
    return CotizacionrapidaModalPageModule;
}());

//# sourceMappingURL=cotizacionrapida-modal.module.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizacionrapidaModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
 * Generated class for the CotizacionrapidaModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CotizacionrapidaModalPage = /** @class */ (function () {
    function CotizacionrapidaModalPage(navCtrl, navParams, modalCtrl, http, toastCtrl, alertCtrl, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.mobiliarios = [];
        this.costo_total = 0;
        this.arreglodeobjetos = [];
        this.arreglodefecha = [];
        this.fecha_envio_evento = navParams.get('data');
        this.hora_envio_evento = navParams.get('horae');
        this.hora_recoleccion_evento = navParams.get('horar');
        this.id_evento = navParams.get('id');
        this.ivavalor = Number(navParams.get('iva'));
        this.descuento = Number(navParams.get('descuent'));
        this.getMessages();
        this.sacarPago();
        console.log(this.ivavalor);
        console.log(this.descuento);
    }
    CotizacionrapidaModalPage.prototype.initializeItems = function () {
        //this.mobiliarios = this.inventario;
        this.items = this.inventario;
        this.inventario = this.moviles;
    };
    CotizacionrapidaModalPage.prototype.restablecervalores = function () {
        this.ivavalor = 0;
        this.descuento = 0;
    };
    CotizacionrapidaModalPage.prototype.getMessages = function () {
        var _this = this;
        this.http.yanosequehaceesta(this.fecha_envio_evento).then(function (inv) {
            _this.inventario = inv["inventario"];
            //this.mobiliarios = this.inventario;     
            _this.moviles = inv["inventario"];
            //this.nombres = JSON.parse(JSON.stringify(this.moviles));
            _this.items = _this.mobiliarios;
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    CotizacionrapidaModalPage.prototype.sacarPago = function () {
        var _this = this;
        this.http.sacarTotalCosto(this.id_evento).then(function (inv) {
            console.log(inv);
            _this.pagos = inv["costo"];
            for (var _i = 0, _a = _this.pagos; _i < _a.length; _i++) {
                var entry = _a[_i];
                _this.costo_total_recibido = entry.costo_total;
                _this.saldo_recibido = entry.saldo;
                _this.anticipo_recibido = entry.anticipo;
            }
            //       console.log("costo total primero: "+this.costo_total_recibido);
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    CotizacionrapidaModalPage.prototype.presentAlert = function (id_mob, nombre, cantidad, costo) {
        var _this = this;
        this.wakawaka = cantidad.toString();
        var alert = this.alertCtrl.create({
            title: 'Selecciona la cantidad',
            //inputs:[this.inventario.mob]
            inputs: [
                {
                    name: 'reservados',
                    placeholder: 'Cantidad',
                    type: 'Number',
                    min: "0",
                    max: this.wakawaka
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        if (parseInt(data.reservados) == 0) {
                            var toast = _this.toastCtrl.create({
                                message: 'No se pueden elegir 0 de ' + nombre,
                                duration: 2500,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                        else if (data.reservados == "") {
                            var toast = _this.toastCtrl.create({
                                message: 'Favor de elegir mas de 0',
                                duration: 2500,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                        else if (parseInt(data.reservados) > cantidad) {
                            console.log("---------------------------------------------------");
                            console.log("Disponibles2: " + cantidad);
                            console.log("Elgidos2:     " + parseInt(data.reservados));
                            var toast = _this.toastCtrl.create({
                                message: 'No hay cantidad suficiente',
                                duration: 3000,
                                position: 'top'
                            });
                            toast.present();
                        }
                        else {
                            console.log("Agregando a seikoas");
                            _this.seikoas(id_mob, data.reservados, costo);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    CotizacionrapidaModalPage.prototype.seikoas = function (id_mob, reservados, precio) {
        var tot;
        tot = precio * reservados;
        this.costo_total = tot + this.costo_total;
        this.arreglodeobjetos.push({
            id_mob: id_mob, ocupados: reservados
        });
        console.log(this.arreglodeobjetos);
    };
    CotizacionrapidaModalPage.prototype.continuarCotizacion = function (arreglochido) {
        var _this = this;
        this.costo_total_chido = this.costo_total - (this.costo_total * this.descuento);
        console.log(this.costo_total_chido);
        var alert = this.alertCtrl.create({
            title: 'Confirmar Cotización',
            message: 'El costo extra seria de: $' + this.costo_total_chido + '<br> ¿Desea agregar el inventario?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('Cancelar');
                    }
                },
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Ño');
                        //añadir a inventario
                        _this.viewCtrl.dismiss(_this.costo_total);
                        //this.confirmar();
                    }
                },
                {
                    text: 'Sí',
                    handler: function () {
                        console.log('Sí');
                        if (_this.ivavalor == 1) {
                            _this.costo_total = _this.costo_total_chido * 1.16;
                            _this.presentLoadingCustom();
                        }
                        else if (_this.ivavalor == 0) {
                            _this.costo_total = _this.costo_total_chido;
                            _this.presentLoadingCustom();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    CotizacionrapidaModalPage.prototype.presentLoadingCustom = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Agregando mobiliario por favor espere...',
            duration: 2000
        });
        loading.onDidDismiss(function () {
            _this.juntarobjetos();
            _this.actualizarpago();
            _this.viewCtrl.dismiss(_this.costo_total);
            _this.restablecervalores();
        });
        loading.present();
    };
    CotizacionrapidaModalPage.prototype.juntarobjetos = function () {
        for (var i = 0; i < this.arreglodeobjetos.length; i++) {
            this.arreglodefecha.push({
                fecha_evento: this.fecha_envio_evento,
                hora_evento: this.hora_envio_evento,
                id_evento: this.id_evento,
                hora_recoleccion_evento: this.hora_recoleccion_evento
            });
            console.log(this.arreglodeobjetos);
        }
        for (var i = 0; i < this.arreglodeobjetos.length; i++) {
            this.http.addInventorytoEvent(this.arreglodefecha[i].fecha_evento, this.arreglodefecha[i].hora_evento, this.arreglodeobjetos[i].id_mob, this.arreglodeobjetos[i].ocupados, this.arreglodefecha[i].id_evento, this.arreglodefecha[i].hora_recoleccion_evento).then(function (inv) {
            }, function (error) {
                console.log("Error" + JSON.stringify(error));
            });
        }
    };
    CotizacionrapidaModalPage.prototype.actualizarpago = function () {
        this.costo_final = this.costo_total + parseFloat(this.costo_total_recibido);
        this.saldo_final = parseFloat(this.saldo_recibido);
        this.anticipo_final = parseFloat(this.anticipo_recibido);
        this.saldo_final = this.costo_final - this.anticipo_final;
        this.http.actualizarPagosacarTotalCosto(this.costo_final, this.saldo_final, this.id_evento).then(function (inv) {
            console.log(inv);
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    CotizacionrapidaModalPage.prototype.getItems = function (ev) {
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
    CotizacionrapidaModalPage.prototype.atras = function () {
        this.navCtrl.pop();
    };
    CotizacionrapidaModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cotizacionrapida-modal',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/cotizacionrapida-modal/cotizacionrapida-modal.html"*/'<!--\n  Generated template for the CotizacionrapidaModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n\n  ESTA PAGINA ES PARA AÑADIR INVENTAIOR NO TIENE NADA QUE VER CON LA COTIZACION RAPIDA!!!!!!!\n  \n<ion-header>\n\n  <ion-navbar color="primary">\n      <button ion-button small (click)="atras()">\n          Atrás\n        </button>\n    <ion-title>Agregar a Inventario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n-->\n<ion-header class="header">\n    \n    <ion-navbar color="primary">\n        <div class="spacer" color="primary" style="height: 15px;"></div>  \n      \n         <ion-toolbar [hidden]="hideCards">\n          <ion-searchbar (ionInput)="getItems($event)" placeholder="Buscar"></ion-searchbar>\n          <ion-buttons left>\n              <button ion-button icon-only (click)="atras()">\n                <ion-icon name="arrow-round-back"></ion-icon>\n              </button>\n            </ion-buttons>\n        </ion-toolbar>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n\n  <ion-list>\n  \n    <ion-card\n    (click)="presentAlert(movil.id_mob, movil.nombre_mob, movil.cantidad_mob, movil.costo_mob)" \n    *ngFor="let movil of inventario">\n       \n    <ion-card-content>\n      <ion-card-title>\n          {{movil.nombre_mob}}\n        </ion-card-title>\n      <p>\n        Cantidad en el Inventario: {{movil.cantidad_mob}}\n      </p>\n      <p>\n        Costo: {{movil.costo_mob}}\n      </p>\n    </ion-card-content>\n     \n    </ion-card>\n  </ion-list>\n\n\n</ion-content>\n<ion-footer no-border>\n\n  <ion-toolbar>\n      <ion-item>\n          <ion-label color="primary">Subtotal: </ion-label>\n          <ion-input readonly="true" [value]="costo_total"></ion-input>\n        </ion-item>\n        \n    <button [hidden]="hideCards" ion-button full (click)="continuarCotizacion()">Continuar</button>\n  \n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/cotizacionrapida-modal/cotizacionrapida-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], CotizacionrapidaModalPage);
    return CotizacionrapidaModalPage;
}());

//# sourceMappingURL=cotizacionrapida-modal.js.map

/***/ })

});
//# sourceMappingURL=10.js.map