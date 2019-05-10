webpackJsonp([11],{

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CotizacionNormalPageModule", function() { return CotizacionNormalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cotizacion_normal__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CotizacionNormalPageModule = /** @class */ (function () {
    function CotizacionNormalPageModule() {
    }
    CotizacionNormalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cotizacion_normal__["a" /* CotizacionNormalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cotizacion_normal__["a" /* CotizacionNormalPage */]),
            ],
        })
    ], CotizacionNormalPageModule);
    return CotizacionNormalPageModule;
}());

//# sourceMappingURL=cotizacion-normal.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizacionNormalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(29);
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
 * Generated class for the CotizacionNormalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CotizacionNormalPage = /** @class */ (function () {
    function CotizacionNormalPage(navCtrl, navParams, http, view, alertCtrl, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.view = view;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.mobiliarios = [];
        this.arreglodeobjetos = [];
        this.event = { startTime: new Date().toISOString(), endTime: new Date().toISOString() };
        this.ivavalor = 0;
        this.descuento = 0;
        this.costo_total = 0;
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get('selectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
        this.hideFechas = false;
        this.hideCards = true;
        this.pagado_evento = false;
        this.anticipo = 0;
        this.mostrarfinal = true;
        //metodo principal para el molibiario sin filtro de ocupado
        //this.getMessages();
        this.initializeItems();
    }
    CotizacionNormalPage.prototype.initializeItems = function () {
        //this.mobiliarios = this.inventario;
        this.items = this.inventario;
        this.inventario = this.moviles;
        this.arreglodeobjetos = [];
    };
    CotizacionNormalPage.prototype.changed = function () {
        this.fecha_recoleccion_evento = this.fecha_envio_evento;
    };
    CotizacionNormalPage.prototype.agregarDisponibilidad = function (id_mob, reservados) {
        var _this = this;
        console.log(this.fecha_envio_evento);
        console.log(this.hora_envio_evento);
        console.log(reservados);
        console.log(id_mob);
        this.http.dispoibilidadmob(this.fecha_envio_evento, this.hora_envio_evento, id_mob, reservados, this.fecha_recoleccion_evento).then(function (inv) {
            _this.cantidadisponible = inv["cantidadusada"];
            console.log(_this.cantidadisponible);
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    CotizacionNormalPage.prototype.aNuevoMetodoparaPagos = function () {
        var _this = this;
        this.saldo = this.costo_total - this.anticipo;
        this.http.addPagosMetodoNuevo(this.costo_total, this.saldo, this.anticipo).then(function (res) {
            _this.arreglodos = res['registro'];
            console.log("El ID encontrado es:   " + _this.arreglodos);
            console.log(_this.costo_total);
            console.log(_this.saldo);
            console.log(_this.anticipo);
        }, function (error) {
            console.error(error);
            alert("No Registrado Asegurate de Cntar con Internet" + error);
        });
    };
    CotizacionNormalPage.prototype.agregaraInventario = function () {
        var _this = this;
        this.saldo = this.costo_total - this.anticipo;
        console.log("El saldo final es de" + this.saldo);
        if (this.nombre_evento == null) {
            this.nombre_evento = "Pendiente";
        }
        if (this.tipo_evento == null) {
            this.tipo_evento = "Otro";
        }
        if (this.hora_envio_evento == null) {
            this.hora_envio_evento = "00:00:00";
            console.log(this.hora_envio_evento);
        }
        if (this.hora_recoleccion_evento == null) {
            this.hora_recoleccion_evento = "00:00:00";
        }
        if (this.direccion_evento == null) {
            this.direccion_evento = "Pendiente";
        }
        if (this.telefono_titular_evento == null) {
            this.telefono_titular_evento = "Pendiente";
        }
        this.http.insertarEvento(this.nombre_evento, this.tipo_evento, this.fecha_envio_evento, this.hora_envio_evento, this.fecha_recoleccion_evento, this.hora_recoleccion_evento, this.pagado_evento, this.nombre_titular_evento, this.direccion_evento, this.telefono_titular_evento, this.ivavalor, this.descuento).then(function (res) {
            console.log(res["registro"]);
            if (res["registro"] == "registrado") {
                _this.view.dismiss();
            }
            else if (res["registro"] == "noregistrado") {
                alert("No Registrado Asegurate de Contar con Internet");
            }
        }, function (error) {
            console.error(error);
            alert("No Registrado Asegurate de Contar con Internet" + error);
            console.log("RegistroError en php Exitoso");
        });
    };
    CotizacionNormalPage.prototype.ocultarFormulario = function () {
        if (this.fecha_envio_evento == null) {
            var toast = this.toastCtrl.create({
                message: 'Favor de elegir la fecha del evento',
                duration: 2500,
                position: 'top'
            });
            toast.present();
        }
        else {
            this.hideFechas = !this.hideFechas;
            this.sacarCosas();
        }
    };
    CotizacionNormalPage.prototype.sacarCosas = function () {
        var _this = this;
        this.http.yanosequehaceesta(this.fecha_envio_evento).then(function (inv) {
            _this.inventario = inv["inventario"];
            //this.mobiliarios = this.inventario;     
            _this.moviles = inv["inventario"];
            //this.nombres = JSON.parse(JSON.stringify(this.moviles));
            _this.items = _this.mobiliarios;
            console.log(_this.inventario);
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    CotizacionNormalPage.prototype.continuarCotizacion = function (arreglochido) {
        var _this = this;
        //this.navCtrl.push(EventModalPage, {arreglo: arreglochido});
        var alert = this.alertCtrl.create({
            title: 'Confirmar Cotización',
            message: 'El costo total seria de: ' + this.costo_total + '<br> Desea agregar IVA?',
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
                        //this.view.dismiss();
                        _this.regresarAfinal();
                    }
                },
                {
                    text: 'Sí',
                    handler: function () {
                        console.log('Sí');
                        _this.pasaraCotizacionconIva();
                    }
                }
            ]
        });
        alert.present();
    };
    CotizacionNormalPage.prototype.pasaraCotizacionconIva = function () {
        this.costo_total = this.costo_total + (this.costo_total * .16);
        this.regresarAfinal();
    };
    CotizacionNormalPage.prototype.getItems = function (ev) {
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
    CotizacionNormalPage.prototype.presentAlert = function (id_mob, nombre, cantidad, costo) {
        var _this = this;
        this.wakawaka = cantidad.toString();
        var alert = this.alertCtrl.create({
            title: 'Selecciona la cantidad',
            //inputs:[this.inventario.mob]
            inputs: [
                {
                    name: 'reservados',
                    placeholder: 'Cantidad',
                    type: 'number',
                    min: "0",
                    max: this.wakawaka
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        //this.seikoas(id_mob,data.reservados,costo,nombre);
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
                            _this.seikoas(id_mob, data.reservados);
                            _this.calcularTotal(data.reservados, costo);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    CotizacionNormalPage.prototype.seikoas = function (id_mob, reservados) {
        this.arreglodeobjetos.push({
            fecha_evento: this.fecha_envio_evento,
            hora_evento: this.hora_envio_evento,
            id_mob: id_mob,
            ocupados: reservados,
            hora_recoleccion_evento: this.hora_recoleccion_evento
        });
        console.log(this.arreglodeobjetos);
    };
    CotizacionNormalPage.prototype.juntarobjetos = function () {
        for (var i = 0; i < this.arreglodeobjetos.length; i++) {
            // console.log(json[i].nombre_mob);
            //this.arreglofinal.push({
            this.http.dispoibilidadmob(this.arreglodeobjetos[i].fecha_evento, this.arreglodeobjetos[i].hora_evento, this.arreglodeobjetos[i].id_mob, this.arreglodeobjetos[i].ocupados, this.arreglodeobjetos[i].hora_recoleccion_evento).then(function (inv) {
            }, function (error) {
                console.log("Error" + JSON.stringify(error));
            });
        }
    };
    CotizacionNormalPage.prototype.calcularTotal = function (reservados, precio) {
        var tot;
        tot = precio * reservados;
        this.costo_total = tot + this.costo_total;
    };
    CotizacionNormalPage.prototype.save = function () {
        if (this.nombre_titular_evento == null) {
            var toast = this.toastCtrl.create({
                message: 'Favor de elegir la titular del evento',
                duration: 2500,
                position: 'top'
            });
            toast.present();
        }
        else {
            this.agregaraInventario();
            this.presentLoadingCustom();
            this.view.dismiss();
        }
    };
    CotizacionNormalPage.prototype.presentLoadingCustom = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Agregando Evento por favor espere...',
            duration: 2000
        });
        loading.onDidDismiss(function () {
            _this.juntarobjetos();
            _this.aNuevoMetodoparaPagos();
        });
        loading.present();
    };
    CotizacionNormalPage.prototype.regresarAfinal = function () {
        console.log("regresaralfinal");
        this.hideFechas = !this.hideFechas;
        this.mostrarfinal = !this.mostrarfinal;
    };
    CotizacionNormalPage.prototype.cerrarModal = function () {
        this.view.dismiss();
    };
    CotizacionNormalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cotizacion-normal',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/cotizacion-normal/cotizacion-normal.html"*/'<!--\n  Generated template for the CotizacionNormalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      \n    \n      \n    <ion-toolbar [hidden]="!hideFechas">\n        <ion-searchbar (ionInput)="getItems($event)" placeholder="Buscar"></ion-searchbar>\n        <ion-buttons left>\n            <button ion-button icon-only (click)="ocultarFormulario()">\n              <ion-icon name="arrow-round-back"></ion-icon>\n            </button>\n          </ion-buttons>\n    </ion-toolbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  [hidden]="hideFechas">\n\n    <ion-list>\n        <ion-item>\n          <ion-input type = "text" placeholder="Nombre del Evento" [(ngModel)]="nombre_evento" [(ngModel)]="event.title"></ion-input>\n        </ion-item>\n    \n       \n        <ion-item>\n            <ion-label>Tipo de Evento</ion-label>\n            <ion-select [(ngModel)]="tipo_evento">\n              <ion-option value="boda">Boda</ion-option>\n              <ion-option value="cumpleaños">Cumpleaños</ion-option>\n              <ion-option value="quinceañera">Quinceañera</ion-option>\n              <ion-option value="bautizo">Bautizo</ion-option>\n              <ion-option value="otro">Otro</ion-option>\n            </ion-select>\n          </ion-item>\n  \n            <ion-item>\n                <ion-label>Fecha de Entrega: </ion-label>\n                <ion-datetime required displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YYYY"  min="2017" max="2050-10-17" [(ngModel)]="fecha_envio_evento" (ionChange)="changed()"></ion-datetime>\n              </ion-item>\n  \n              <ion-item>\n                  <ion-label>Hora de Entrega: </ion-label>\n                  <ion-datetime displayFormat="HH:mm" pickerFormtat="HH:mm" [(ngModel)]="hora_envio_evento"></ion-datetime>\n                </ion-item>\n    \n          \n                <ion-item>\n                    <ion-label>Fecha de recoleccion </ion-label>\n                  <ion-datetime displayFormat="DD/MM/YYYY"  pickerFormat="DD/MM/YYYY"  min="2017" max="2050-10-17" [(ngModel)]="fecha_recoleccion_evento"></ion-datetime>\n                </ion-item>\n  \n                <ion-item>\n                    <ion-label>Hora de recoleccion </ion-label>\n                  <ion-datetime displayFormat="HH:mm" pickerFormtat="HH:mm" [(ngModel)]="hora_recoleccion_evento"></ion-datetime>\n                </ion-item>\n    \n               \n                    <ion-item>\n                      <ion-input required type = "text" placeholder="Titular del Evento:" [(ngModel)]="nombre_titular_evento"></ion-input>\n                    </ion-item>\n                    \n                    <ion-item>\n                      <ion-input type = "number" placeholder="Telefono del titular:" [(ngModel)]="telefono_titular_evento"></ion-input>\n                    </ion-item>\n                    \n                    <ion-item>\n                          <ion-input type = "text" placeholder="Direccion" [(ngModel)]="direccion_evento"></ion-input>\n                        </ion-item>\n  \n                        \n                      <ion-item [hidden]="mostrarfinal">\n                          <ion-label>Se realizo pago: </ion-label>\n                          <ion-toggle [(ngModel)]="pagado_evento"></ion-toggle>\n                        </ion-item>\n\n                        <ion-item [hidden]="!pagado_evento">\n                            <ion-input type = "text" placeholder="Cantidad Pagada" [(ngModel)]="anticipo"></ion-input>\n                          </ion-item>\n  \n                          \n\n                            <ion-grid>\n                                <ion-row>\n                                  <ion-col col-6>\n                                    <button ion-button round icon-end color="danger"(click)="cerrarModal()">\n                                        <ion-icon padding name="close-circle"></ion-icon>Cancelar\n                                    </button>\n                                  </ion-col>\n                                  <ion-col col-6>\n                                    <button type="submit" ion-button round icon-end (click)="ocultarFormulario()">\n                                        <ion-icon padding name="checkmark"></ion-icon>Añadir Mov\n                                    </button>\n                                  </ion-col>\n                                </ion-row>\n                              </ion-grid>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-content [hidden]="!hideFechas" class="eventosDelDia">\n    \n\n\n    \n    <ion-list>\n      \n        <ion-card\n        (click)="presentAlert(movil.id_mob,movil.nombre_mob, movil.cantidad_mob, movil.costo_mob)" \n        *ngFor="let movil of inventario">\n           \n        <ion-card-content>\n          <ion-card-title>\n              {{movil.nombre_mob}}\n            </ion-card-title>\n          <p>\n            Cantidad Disponible en inventario: {{movil.cantidad_mob}}\n          </p>\n          <p>\n            Costo: {{movil.costo_mob}}\n          </p>\n        </ion-card-content>\n         \n        </ion-card>\n      \n      </ion-list>\n      \n      \n    </ion-content>\n    <ion-footer no-border>\n\n        <ion-toolbar>\n            <ion-item>\n                <ion-label color="primary">Total: </ion-label>\n                <ion-input readonly="true" [value]="costo_total"></ion-input>\n              </ion-item>\n              \n          <button [hidden]="!hideFechas" ion-button full (click)="continuarCotizacion()">Continuar</button>\n          <button [hidden]="hideFechas" ion-button full (click)="save()">Agregar Evento</button>\n        \n        </ion-toolbar>\n      \n      </ion-footer>\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/cotizacion-normal/cotizacion-normal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], CotizacionNormalPage);
    return CotizacionNormalPage;
}());

//# sourceMappingURL=cotizacion-normal.js.map

/***/ })

});
//# sourceMappingURL=11.js.map