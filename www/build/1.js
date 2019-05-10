webpackJsonp([1],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguimientopagodetallePageModule", function() { return SeguimientopagodetallePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seguimientopagodetalle__ = __webpack_require__(462);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SeguimientopagodetallePageModule = /** @class */ (function () {
    function SeguimientopagodetallePageModule() {
    }
    SeguimientopagodetallePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seguimientopagodetalle__["a" /* SeguimientopagodetallePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__seguimientopagodetalle__["a" /* SeguimientopagodetallePage */]),
            ],
        })
    ], SeguimientopagodetallePageModule);
    return SeguimientopagodetallePageModule;
}());

//# sourceMappingURL=seguimientopagodetalle.module.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeguimientopagodetallePage; });
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
 * Generated class for the SeguimientopagodetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SeguimientopagodetallePage = /** @class */ (function () {
    function SeguimientopagodetallePage(navCtrl, toastCtrl, http, view, navParams) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.view = view;
        this.navParams = navParams;
        this.id = navParams.get('data');
        this.sacarPago();
        console.log(this.id);
    }
    SeguimientopagodetallePage.prototype.cerrarModal = function () {
        this.view.dismiss();
    };
    SeguimientopagodetallePage.prototype.sacarPago = function () {
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
    SeguimientopagodetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SeguimientopagodetallePage');
    };
    SeguimientopagodetallePage.prototype.abonar = function (abono) {
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
    SeguimientopagodetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-seguimientopagodetalle',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/seguimientopagodetalle/seguimientopagodetalle.html"*/'<!--\n  Generated template for the SeguimientopagodetallePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalle</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="cerrarModal()">Cerrar</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n    <ion-card *ngFor="let item of pagos" >\n        <ion-item class="center">\n            <h1 class="h1Content">{{item.nombre_titular_evento}}</h1>\n            <h2>Evento {{item.nombre_evento}} </h2>\n          </ion-item>\n\n          <ion-card-content>\n              \n              <div class = "row">\n                  <div class = "col">Costo Total</div>\n                  <div class = "col">{{item.costo_total}}</div>\n                </div>\n              <div class = "row">\n                  <div class = "col">Pagado</div>\n                  <div class = "col">{{item.anticipo}}</div>\n                </div>\n              <div class = "row">\n                  <div class = "col" class="hdContent">Saldo Pendiente</div>\n                  <div class = "col" class="hddContent">{{item.saldo}}</div>\n                </div>\n\n                <p>\n                    <ion-item>\n                        <ion-label color="primary" stacked>Cantidad a Abonar</ion-label>\n                        <ion-input type="number" [(ngModel)]="abono" placeholder="{{item.saldo}}"></ion-input>\n                      </ion-item>\n                       \n                </p>\n                <button ion-button (click)="abonar(abono)" full>Abonar</button>\n\n  \n\n            </ion-card-content>\n         </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/seguimientopagodetalle/seguimientopagodetalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SeguimientopagodetallePage);
    return SeguimientopagodetallePage;
}());

//# sourceMappingURL=seguimientopagodetalle.js.map

/***/ })

});
//# sourceMappingURL=1.js.map