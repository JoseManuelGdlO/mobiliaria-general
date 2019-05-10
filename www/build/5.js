webpackJsonp([5],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoAgregaritemsPageModule", function() { return EventoAgregaritemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evento_agregaritems__ = __webpack_require__(466);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventoAgregaritemsPageModule = /** @class */ (function () {
    function EventoAgregaritemsPageModule() {
    }
    EventoAgregaritemsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__evento_agregaritems__["a" /* EventoAgregaritemsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__evento_agregaritems__["a" /* EventoAgregaritemsPage */]),
            ],
        })
    ], EventoAgregaritemsPageModule);
    return EventoAgregaritemsPageModule;
}());

//# sourceMappingURL=evento-agregaritems.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoAgregaritemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the EventoAregaritemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.../
 */
var EventoAgregaritemsPage = /** @class */ (function () {
    function EventoAgregaritemsPage(navCtrl, navParams, http, alertCtrl, toastCtrl, events, modalCtrl, view, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.view = view;
        this.loadingCtrl = loadingCtrl;
        this.tap = 0;
        //para el ultimo paso donde se va a la base de datos lo guardado
        this.haciaeventos = [];
        this.haciapagos = [];
        this.haciarentado = [];
        this.root_url = "http://avisositd.xyz/mobiliaria/ListaMobiliario.php";
        this.mobiliarios = [];
        this.searchQuery = '';
        this.todo = {};
        this.user = null;
        this.userId = [];
        this.arreglodefecha = [];
        this.arreglodeobjetos = [];
        this.arreglofinal = [];
        //para la fecha
        this.event = { startTime: new Date().toISOString(), endTime: new Date().toISOString() };
        this.costo_total = 0;
        //id del evento
        this.idEvento = 9999;
        this.costo_subtotal = 0;
        ///////Troca
        this.vistaBoo = true;
        this.searchQueryClient = '';
        //inician los cards visibles y ls fechas ocultas
        this.hideCards = false;
        this.hideDates = true;
        this.pagado_evento = false;
        this.anticipo = 0;
        this.hideIva = false;
        //para pasar al final de la cotizacion
        //enable add event button when class starts
        this.botonAgregar = false;
        //carga el metodo que trae los items de la abse de datos y lo guarda
        //en el array inventario []
        this.initializeItems();
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_5_moment__(this.navParams.get('selectedDay')).format();
        this.fecha_envio_evento = this.navParams.get('selectedDay');
        console.log(this.fecha_envio_evento);
        //this.fecha_envio_evento = this.fecha_tentativa['title'];
        //console.log(this.fecha_envio_evento);
        //se inicializan los valores de descuento e iva
        this.ivavalor = 0;
        this.descuento = 0;
        this.getMessages();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
        this.fecha_recoleccion_evento = this.fecha_envio_evento;
        this.traerClientes();
        this.initializeClientes();
    }
    EventoAgregaritemsPage.prototype.initializeItems = function () {
        //this.mobiliarios = this.inventario;
        this.items = this.inventario;
        this.inventario = this.moviles;
    };
    EventoAgregaritemsPage.prototype.cerrarModal = function () {
        this.view.dismiss();
    };
    EventoAgregaritemsPage.prototype.continuarCotizacion = function (arreglochido) {
        //this.navCtrl.push(EventModalPage, {arreglo: arreglochido});
        this.botonAgregar = !this.botonAgregar;
        if (this.nombre_titular_evento == null) {
            var toast = this.toastCtrl.create({
                message: 'Favor de elegir la titular del evento',
                duration: 2500,
                position: 'top'
            });
            toast.present();
            this.botonAgregar = !this.botonAgregar;
        }
        else if (this.fecha_envio_evento == "") {
            var toast = this.toastCtrl.create({
                message: 'No se eligió fecha de Evento!!',
                duration: 2500,
                position: 'middle'
            });
            toast.present();
            this.botonAgregar = !this.botonAgregar;
        }
        else {
            this.save();
        }
    };
    EventoAgregaritemsPage.prototype.iva = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'IVA',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        _this.ivavalor = 0;
                        console.log(_this.ivavalor);
                    }
                },
                {
                    text: 'Sí',
                    handler: function () {
                        _this.ivavalor = 1;
                        console.log("aplico iva?? " + _this.ivavalor);
                        _this.costo_total = _this.costo_total + (_this.costo_total * .16);
                        _this.hideIva = true;
                    }
                }
            ]
        });
        alert.present();
    };
    EventoAgregaritemsPage.prototype.descuentos = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Escriba el Porcentaje de Descuento',
            inputs: [
                {
                    name: 'descuento',
                    placeholder: 'Porcentaje de Descuento',
                    type: 'number'
                }
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
                    text: 'Aplicar',
                    handler: function (data) {
                        _this.descuento = data.descuento;
                        console.log(_this.descuento);
                        if (data.descuento == "") {
                            var toast = _this.toastCtrl.create({
                                message: 'Introduzca un número porfavor',
                                duration: 2500,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                        else {
                            _this.porcentaje = parseInt(data.descuento) / 100;
                            _this.costo_total = _this.costo_total - _this.costo_total * _this.porcentaje;
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    EventoAgregaritemsPage.prototype.ocultarFormulario = function () {
        this.hideDates = !this.hideDates;
        this.hideCards = !this.hideCards;
        this.getMessages();
    };
    EventoAgregaritemsPage.prototype.agregaraInventario = function () {
        //console.log(this.costo_total);
        // console.log(this.anticipo);
        var _this = this;
        console.log("IVA = " + this.ivavalor + " Descuento = " + this.descuento);
        if (this.nombre_evento == null) {
            this.nombre_evento = "Nombre de evento Pendiente";
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
            this.direccion_evento = "Dirección Pendiente";
        }
        if (this.telefono_titular_evento == null) {
            this.telefono_titular_evento = "Teléfono Pendiente";
        }
        this.http.insertarEvento(this.nombre_evento, this.tipo_evento, this.fecha_envio_evento, this.hora_envio_evento, this.fecha_recoleccion_evento, this.hora_recoleccion_evento, this.pagado_evento, this.nombre_titular_evento, this.direccion_evento, this.telefono_titular_evento, this.descuento, this.ivavalor).then(function (res) {
            _this.arreglodos = res['registro'];
            console.log(_this.arreglodos);
            if (_this.arreglodos == 'registrado') {
                console.log("registro Satisfactorio");
                _this.presentLoadingCustom();
            }
            else if (_this.arreglodos == 'noregistrado') {
                console.log("Contacte al URI");
                _this.presentToastWithOptions();
            }
        }, function (error) {
            console.error(error);
            alert("No Registrado Asegurate de Cntar con Internet" + error);
        });
    };
    EventoAgregaritemsPage.prototype.presentToastWithOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Evento NO REGISTRADO verifique la conexión a internet e inténtelo de nuevo.',
                            showCloseButton: true,
                            position: 'top',
                            closeButtonText: 'OK'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventoAgregaritemsPage.prototype.aNuevoMetodoparaPagos = function () {
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
    EventoAgregaritemsPage.prototype.pasaraCotizacionconIva = function () {
        this.hideCards = true;
        this.hideDates = false;
        this.costo_total = this.costo_total + (this.costo_total * .16);
    };
    EventoAgregaritemsPage.prototype.regresarpaatras = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    //alert para pedir numero de items de mobiliario
    EventoAgregaritemsPage.prototype.presentAlert = function (id_mob, nombre, cantidad, costo) {
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
                        console.log('Cancel clicked');
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
                            console.log("Nombre " + nombre + " ID " + id_mob);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    EventoAgregaritemsPage.prototype.tgExtras = function () {
        this.hideCards = true;
        this.hideDates = false;
        //this.arreglodefecha =[];
        //this.arreglodeobjetos=[];
        //this.arreglofinal=[];
        //console.log(this.todo);
    };
    EventoAgregaritemsPage.prototype.seikoas = function (id_mob, reservados, precio) {
        var tot;
        tot = precio * reservados;
        this.costo_total = tot + this.costo_total;
        this.costo_subtotal = this.costo_total;
        this.arreglodeobjetos.push({
            id_mob: id_mob, ocupados: reservados
        });
        console.log(this.arreglodeobjetos);
    };
    EventoAgregaritemsPage.prototype.juntarobjetos = function () {
        for (var i = 0; i < this.arreglodeobjetos.length; i++) {
            // console.log(json[i].nombre_mob);
            this.arreglodefecha.push({
                fecha_evento: this.fecha_envio_evento,
                hora_evento: this.hora_envio_evento,
                hora_recoleccion_evento: this.hora_recoleccion_evento
            });
        }
        for (var i = 0; i < this.arreglodeobjetos.length; i++) {
            // console.log(json[i].nombre_mob);
            //this.arreglofinal.push({
            this.http.dispoibilidadmob(this.arreglodefecha[i].fecha_evento, this.arreglodefecha[i].hora_evento, this.arreglodeobjetos[i].id_mob, this.arreglodeobjetos[i].ocupados, this.arreglodefecha[i].hora_recoleccion_evento).then(function (inv) {
            }, function (error) {
                console.log("Error" + JSON.stringify(error));
            });
        }
    };
    EventoAgregaritemsPage.prototype.getMessages = function () {
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
    EventoAgregaritemsPage.prototype.getItems = function (ev) {
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
    EventoAgregaritemsPage.prototype.save = function () {
        this.agregaraInventario();
        this.guardarCliente();
        //this.presentLoadingCustom();
    };
    EventoAgregaritemsPage.prototype.presentLoadingCustom = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Agregando Evento por favor espere...',
            duration: 1800
        });
        loading.onDidDismiss(function () {
            _this.juntarobjetos();
            _this.aNuevoMetodoparaPagos();
            var loading = _this.loadingCtrl.create({
                content: 'Agregando Mobiliario por favor espere...',
                duration: 400
            });
            loading.onDidDismiss(function () {
                //this.view.dismiss(this.event);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
                _this.botonAgregar = !_this.botonAgregar;
            });
            loading.present();
        });
        loading.present();
    };
    EventoAgregaritemsPage.prototype.revisar = function () {
        this.vistaBoo = false;
    };
    EventoAgregaritemsPage.prototype.guardarCliente = function () {
        this.http.anadirCliente(this.nombre_titular_evento, this.telefono_titular_evento, this.direccion_evento).then(function (inv) {
            console.log(inv);
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    EventoAgregaritemsPage.prototype.itemClick = function (nombre, telefono, direccion) {
        this.vistaBoo = true;
        this.telefono_titular_evento = telefono;
        //this.direccion_evento = direccion;
        this.nombre_titular_evento = nombre;
    };
    EventoAgregaritemsPage.prototype.initializeClientes = function () {
        this.inventarioCliente = this.complClient;
    };
    EventoAgregaritemsPage.prototype.getClientes = function (ev) {
        // Reset items back to all of the items
        this.initializeClientes();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.inventarioCliente = this.inventarioCliente.filter(function (item) {
                return (item.nombre_cliente.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    EventoAgregaritemsPage.prototype.traerClientes = function () {
        var _this = this;
        this.http.revisarClientes().then(function (inv) {
            // console.log(inv)     
            _this.inventarioCliente = inv["clientes"];
            _this.complClient = inv["clientes"];
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    EventoAgregaritemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-evento-agregaritems',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/evento-agregaritems/evento-agregaritems.html"*/'<!--\n  Generated template for the EventoAgregaritemsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n  <div class="spacer" color="primary" style="height: 15px;"></div>  \n-->\n\n<ion-header class="header">\n    \n  <ion-navbar color="primary">\n      \n    \n       <ion-toolbar [hidden]="hideCards">\n        <ion-searchbar (ionInput)="getItems($event)" placeholder="Buscar"></ion-searchbar>\n        <ion-buttons left>\n            <button ion-button icon-only (click)="cerrarModal()">\n              <ion-icon name="exit"></ion-icon>\n            </button>\n          </ion-buttons>\n      </ion-toolbar>\n\n      <ion-toolbar [hidden]="!hideCards">\n          <ion-title>Datos del Evento</ion-title>\n        </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content [hidden]="hideDates">\n\n\n    <ion-fab top right edge [hidden]="!hideCards">\n       \n          <button ion-fab mini color="secondary" (click)="descuentos()">\n            <ion-icon name="pricetags"></ion-icon>\n          </button>\n          <button ion-fab mini color="secondary" (click)="iva()">\n              IVA\n            </button>\n        \n      </ion-fab>\n\n      \n      \n\n      \n        \n        \n      \n\n        \n\n\n    <ion-list>\n      \n  \n     \n      <ion-item>\n          <ion-label>Tipo de Evento</ion-label>\n          <ion-select [(ngModel)]="tipo_evento">\n            <ion-option value="boda">Boda</ion-option>\n            <ion-option value="cumpleaños">Cumpleaños</ion-option>\n            <ion-option value="quinceañera">Quinceañera</ion-option>\n            <ion-option value="bautizo">Bautizo</ion-option>\n            <ion-option value="otro">Otro</ion-option>\n          </ion-select>\n        </ion-item>\n\n\n          \n\n          <ion-item>\n              <ion-label>Fecha de Entrega: </ion-label>\n              <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YYYY"  min="2017" max="2050-10-17" [(ngModel)]="fecha_envio_evento" disabled></ion-datetime>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Hora de Entrega: </ion-label>\n                <ion-datetime displayFormat="HH:mm" pickerFormtat="HH:mm" [(ngModel)]="hora_envio_evento"></ion-datetime>\n              </ion-item>\n  \n        \n              <ion-item>\n                  <ion-label>Fecha de recoleccion </ion-label>\n                <ion-datetime displayFormat="DD/MM/YYYY"  pickerFormat="DD/MM/YYYY"  min="2017" max="2050-10-17" [(ngModel)]="fecha_recoleccion_evento" ></ion-datetime>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label>Hora de recoleccion </ion-label>\n                <ion-datetime displayFormat="HH:mm" pickerFormtat="HH:mm" [(ngModel)]="hora_recoleccion_evento"></ion-datetime>\n              </ion-item>\n  \n              <ion-item class="item no-padding">\n                <ion-searchbar animated (ionInput)="getClientes($event)" (click)="revisar()" type = "text" placeholder="Titular del Evento:" [(ngModel)]="nombre_titular_evento" ></ion-searchbar>\n              </ion-item>\n\n              <ion-list [hidden]="vistaBoo">\n                <ion-item *ngFor="let item of inventarioCliente" (click)="itemClick(item.nombre_cliente,item.telefono_cliente, item.correo_cliente)">\n                    <h2 class="h1Nomb">{{item.nombre_cliente}}</h2>                        \n                  </ion-item>\n              </ion-list>\n\n                  \n                  <ion-item>\n                    <ion-input type = "tel" placeholder="Telefono del titular:" [(ngModel)]="telefono_titular_evento" clearInput></ion-input>\n                  </ion-item>\n                  \n                  <ion-item>\n                        <ion-input type = "text" placeholder="Direccion" [(ngModel)]="direccion_evento" clearInput></ion-input>\n                      </ion-item>\n\n                      <ion-item>\n                          <ion-label>Se realizo pago: </ion-label>\n                          <ion-toggle [(ngModel)]="pagado_evento"></ion-toggle>\n                        </ion-item>\n\n                        <ion-item [hidden]="!pagado_evento">\n                            <ion-input type = "text" placeholder="Cantidad Pagada" [(ngModel)]="anticipo"></ion-input>\n                          </ion-item>\n  \n                    \n  \n    </ion-list>\n  \n  \n  \n    <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <button ion-button round icon-end color="danger"(click)="cerrarModal()">\n                <ion-icon padding name="close-circle"></ion-icon>Cancelar\n            </button>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button round icon-end (click)="ocultarFormulario()">\n                <ion-icon padding name="checkmark"></ion-icon>Añadir Inv\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n  \n  </ion-content>\n  \n\n<ion-content [hidden]="hideCards">\n\n\n\n    \n<ion-list>\n  \n    <ion-card\n    (click)="presentAlert(movil.id_mob, movil.nombre_mob, movil.cantidad_mob, movil.costo_mob)" \n    *ngFor="let movil of inventario">\n       \n    <ion-card-content>\n      <ion-card-title>\n          {{movil.nombre_mob}}\n        </ion-card-title>\n      <p>\n        Cantidad en el Inventario: {{movil.cantidad_mob}}\n      </p>\n      <p>\n        Costo: {{movil.costo_mob}}\n      </p>\n    </ion-card-content>\n     \n    </ion-card>\n  </ion-list>\n  \n  \n</ion-content>\n\n<ion-footer no-border>\n\n  <ion-toolbar>\n      \n              \n\n\n              <ion-grid>\n                  <ion-row>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label color="primary">Subtotal: </ion-label>\n                            <ion-input readonly="true" [value]="costo_subtotal"></ion-input>\n                          </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label color="primary">Final: </ion-label>\n                            <ion-input readonly="true" [value]="costo_total"></ion-input>\n                          </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n           \n    <button [hidden]="hideCards" ion-button full (click)="tgExtras()">Continuar</button>\n    <button [hidden]="!hideCards" [disabled]=botonAgregar ion-button full (click)="continuarCotizacion()">Agregar Evento</button>\n  \n  </ion-toolbar>\n\n</ion-footer>\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/evento-agregaritems/evento-agregaritems.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], EventoAgregaritemsPage);
    return EventoAgregaritemsPage;
}());

//# sourceMappingURL=evento-agregaritems.js.map

/***/ })

});
//# sourceMappingURL=5.js.map