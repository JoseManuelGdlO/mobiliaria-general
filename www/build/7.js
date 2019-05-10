webpackJsonp([7],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPageModule", function() { return EditarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editar__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditarPageModule = /** @class */ (function () {
    function EditarPageModule() {
    }
    EditarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editar__["a" /* EditarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editar__["a" /* EditarPage */]),
            ],
        })
    ], EditarPageModule);
    return EditarPageModule;
}());

//# sourceMappingURL=editar.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarPage; });
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
 * Generated class for the EditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditarPage = /** @class */ (function () {
    function EditarPage(navCtrl, navParams, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.idrecibido = navParams.get('id');
        console.log(this.idrecibido);
        this.sacardetalles(this.idrecibido);
    }
    EditarPage.prototype.patras = function () {
        this.navCtrl.pop();
    };
    EditarPage.prototype.sacardetalles = function (id_evento) {
        var _this = this;
        this.http.detallesdeleventodeldia(id_evento).then(function (res) {
            _this.evento = res["evento"];
            for (var _i = 0, _a = _this.evento; _i < _a.length; _i++) {
                var entry = _a[_i];
                _this.nombre_evento = entry.nombre_evento,
                    _this.tipo_evento = entry.tipo_evento,
                    _this.fecha_envio_evento = entry.fecha_envio_evento,
                    _this.hora_envio_evento = entry.hora_envio_evento,
                    _this.fecha_recoleccion_evento = entry.fecha_recoleccion_evento,
                    _this.hora_recoleccion_evento = entry.hora_recoleccion_evento;
                _this.pagado_evento = entry.pagado_evento,
                    _this.nombre_titular_evento = entry.nombre_titular_evento,
                    _this.direccion_evento = entry.direccion_evento,
                    _this.telefono_titular_evento = entry.telefono_titular_evento;
                console.log("this is:   " + _this.nombre_evento);
                console.log("this is:   " + _this.tipo_evento);
                console.log("this is:   " + _this.fecha_envio_evento);
                console.log("this is:   " + _this.hora_envio_evento);
                console.log("this is:   " + _this.fecha_recoleccion_evento);
                console.log("this is:   " + _this.hora_recoleccion_evento);
                console.log("this is:   " + _this.pagado_evento);
                console.log("this is:   " + _this.nombre_titular_evento);
                console.log("this is:   " + _this.direccion_evento);
                console.log("this is:   " + _this.telefono_titular_evento);
            }
            console.log(_this.evento);
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    EditarPage.prototype.save = function () {
        var _this = this;
        this.http.actualizarEvento(this.idrecibido, this.nombre_evento, this.tipo_evento, this.fecha_envio_evento, this.hora_envio_evento, this.fecha_recoleccion_evento, this.hora_recoleccion_evento, this.nombre_titular_evento, this.direccion_evento, this.telefono_titular_evento).then(function (res) {
            _this.respuesta = res['resultado'];
            console.log(_this.respuesta);
            for (var _i = 0, _a = _this.respuesta; _i < _a.length; _i++) {
                var entry = _a[_i];
                _this.respuestados = entry.resulta;
            }
            console.log("Respuesta dos: " + _this.respuestados);
            if (_this.respuestados == "registra") {
                _this.cambiosChidos();
                _this.navCtrl.pop();
            }
            else if (_this.respuestados == "noRegistra") {
                alert("No Registrado Asegurate de Cntar con Internet");
                _this.cambionoRealizdo();
                _this.navCtrl.pop();
            }
        }, function (error) {
            console.error(error);
            alert("No Registrado Asegurate de Cntar con Internet" + error);
            console.log("RegistroError en php Exitoso");
        });
    };
    EditarPage.prototype.cambiosChidos = function () {
        var toast = this.toastCtrl.create({
            message: 'Cambio Realizados Correctamente',
            duration: 2000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
        });
        toast.present();
    };
    EditarPage.prototype.cambionoRealizdo = function () {
        var toast = this.toastCtrl.create({
            message: 'Cambios NO realizados',
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
        });
        toast.present();
    };
    EditarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/editar/editar.html"*/'<!--\n  Generated template for the EditarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <div class="spacerw" style="height: 8px;"></div>\n    <ion-navbar color="primary">\n  \n      <ion-title>\n        Editar Evento\n      </ion-title>\n  \n      <ion-buttons left>\n        <button ion-button icon-only (click)="patras()">\n          <ion-icon name="arrow-round-back"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n\n\n<ion-content>\n\n    <ion-list>\n        <!--<ion-item>\n          <ion-input type = "text" placeholder="Nombre del Evento" [(ngModel)]="nombre_evento" clearInput></ion-input>\n        </ion-item>\n    -->\n       \n        <ion-item>\n            <ion-label>Tipo de Evento</ion-label>\n            <ion-select [(ngModel)]="tipo_evento">\n              <ion-option value="boda">Boda</ion-option>\n              <ion-option value="cumpleaños">Cumpleaños</ion-option>\n              <ion-option value="quinceañera">Quinceañera</ion-option>\n              <ion-option value="bautizo">Bautizo</ion-option>\n              <ion-option value="otro">Otro</ion-option>\n            </ion-select>\n          </ion-item>\n  \n  \n            \n  \n            <ion-item>\n                <ion-label>Fecha de Entrega: </ion-label>\n                <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YYYY"  min="2017" max="2050-10-17" [(ngModel)]="fecha_envio_evento" disabled></ion-datetime>\n              </ion-item>\n  \n              <ion-item>\n                  <ion-label>Hora de Entrega: </ion-label>\n                  <ion-datetime displayFormat="HH:mm" pickerFormtat="HH:mm" [(ngModel)]="hora_envio_evento"></ion-datetime>\n                </ion-item>\n    \n          \n                <ion-item>\n                    <ion-label>Fecha de recoleccion </ion-label>\n                  <ion-datetime displayFormat="DD/MM/YYYY"  pickerFormat="DD/MM/YYYY"  min="2017" max="2050-10-17" [(ngModel)]="fecha_recoleccion_evento"></ion-datetime>\n                </ion-item>\n  \n                <ion-item>\n                    <ion-label>Hora de recoleccion </ion-label>\n                  <ion-datetime displayFormat="HH:mm" pickerFormtat="HH:mm" [(ngModel)]="hora_recoleccion_evento"></ion-datetime>\n                </ion-item>\n    \n               \n                    <ion-item>\n                      <ion-input type = "text" placeholder="Titular del Evento:" [(ngModel)]="nombre_titular_evento" clearInput></ion-input>\n                    </ion-item>\n                    \n                    <ion-item>\n                      <ion-input type = "tel" placeholder="Telefono del titular:" [(ngModel)]="telefono_titular_evento" clearInput></ion-input>\n                    </ion-item>\n                    \n                    <ion-item>\n                          <ion-input type = "text" placeholder="Direccion" [(ngModel)]="direccion_evento" clearInput></ion-input>\n                        </ion-item>\n                        \n\n                            </ion-list>\n\n\n</ion-content>\n\n\n<ion-footer no-border>\n\n    <ion-toolbar>\n        \n          \n      <button ion-button full (click)="save()">Guardar Cambios</button>\n    \n    </ion-toolbar>\n  \n  </ion-footer>\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/editar/editar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], EditarPage);
    return EditarPage;
}());

//# sourceMappingURL=editar.js.map

/***/ })

});
//# sourceMappingURL=7.js.map