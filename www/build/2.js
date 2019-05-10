webpackJsonp([2],{

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagosPageModule", function() { return PagosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagos__ = __webpack_require__(461);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PagosPageModule = /** @class */ (function () {
    function PagosPageModule() {
    }
    PagosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pagos__["a" /* PagosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pagos__["a" /* PagosPage */]),
            ],
        })
    ], PagosPageModule);
    return PagosPageModule;
}());

//# sourceMappingURL=pagos.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagosPage; });
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
 * Generated class for the PagosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagosPage = /** @class */ (function () {
    function PagosPage(http, navParams, view, modCtrl) {
        this.http = http;
        this.navParams = navParams;
        this.view = view;
        this.modCtrl = modCtrl;
        this.sacarPagos();
    }
    PagosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagosPage');
    };
    PagosPage.prototype.cerrarModal = function () {
        this.view.dismiss();
    };
    PagosPage.prototype.sacarPagos = function () {
        var _this = this;
        this.http.revisarSaldos().then(function (inv) {
            console.log(inv);
            _this.pagos = inv["pago"];
            _this.compl = inv["pago"];
            console.log(_this.pagos);
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    PagosPage.prototype.abono = function (id) {
        this.modCtrl.create('SeguimientopagodetallePage', { data: id }).present();
    };
    PagosPage.prototype.initializeItems = function () {
        this.pagos = this.compl;
    };
    PagosPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.pagos = this.pagos.filter(function (item) {
                return (item.nombre_titular_evento.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    PagosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pagos',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/pagos/pagos.html"*/'<!--\n  Generated template for the PagosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Seguimiento de Pagos</ion-title>\n    <ion-buttons end>\n        <button ion-button (click)="cerrarModal()">Cerrar</button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n    <ion-card *ngFor="let item of pagos" >\n        <ion-item>\n            <ion-avatar item-start>\n              <img src="../../assets/img/ic_logo.png">\n            </ion-avatar>\n            <h2>{{item.nombre_titular_evento}}</h2>\n            <p>{{item.nombre_evento}}</p>\n          </ion-item>\n\n          <div *ngIf="item.saldo != 0; else pagado" class="cardnopadaga">\n          <ion-card-content>\n\n              \n              <h1 class="h1Content">Saldo Pendiente:    {{item.saldo}}</h1>\n              <p>Pagado:     {{item.anticipo}}</p>\n              <p>Costo Total:    {{item.costo_total}}</p>\n              \n\n            </ion-card-content>\n          \n            <ion-row>\n              <ion-col>\n                <ion-item icon-start clear small>\n                  <p>Fecha del Evento</p>\n                  <p class="h1Content">{{item.fecha_evento}}</p>\n                </ion-item>\n              </ion-col>\n              <ion-col  class="colElim">\n                <button (click)="abono(item.id_evento)" ion-button  icon-start color="primary"  round>\n                  <ion-icon name="ios-close"></ion-icon>\n                  Abono\n                </button>\n              </ion-col>\n             \n            </ion-row>\n\n          </div>\n\n          <ng-template #pagado class="cardpadaga">\n              \n              <ion-card-content>\n\n              \n                  <h1 class="h1Content">Evento Pagado</h1>\n                  \n    \n                </ion-card-content>\n              \n                <ion-row>\n                  <ion-col>\n                    <ion-item icon-start clear small>\n                      <p>Fecha del Evento</p>\n                      <p class="h1Content">{{item.fecha_evento}}</p>\n                    </ion-item>\n                  </ion-col>\n                 \n                 \n                </ion-row>\n\n\n          </ng-template>\n         </ion-card>\n  \n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="primary">\n      <ion-searchbar placeholder="Buscar por Nombre Titular" (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/pagos/pagos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], PagosPage);
    return PagosPage;
}());

//# sourceMappingURL=pagos.js.map

/***/ })

});
//# sourceMappingURL=2.js.map