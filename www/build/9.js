webpackJsonp([9],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePageModule", function() { return DetallePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetallePageModule = /** @class */ (function () {
    function DetallePageModule() {
    }
    DetallePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalle__["a" /* DetallePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalle__["a" /* DetallePage */]),
            ],
        })
    ], DetallePageModule);
    return DetallePageModule;
}());

//# sourceMappingURL=detalle.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallePage; });
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
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetallePage = /** @class */ (function () {
    function DetallePage(navCtrl, view, navParams, http, modCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.navParams = navParams;
        this.http = http;
        this.modCtrl = modCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.nombre = navParams.get('data');
        console.log(this.nombre);
        var i = 0, strLength = this.nombre.length;
        for (i; i < strLength; i++) {
            this.nombre = this.nombre.replace(" ", "_");
        }
        //  console.log(this.nombre);
        this.detalle(this.nombre);
    }
    DetallePage.prototype.EliminarItem = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Estas seguro?',
            message: 'Realmente quieres eliminar este Articulo?',
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
                        _this.eliminarItem();
                    }
                }
            ]
        });
        confirm.present();
    };
    DetallePage.prototype.eliminarItem = function () {
        var _this = this;
        this.http.eliminarItem(this.nombre).then(function (data) {
            console.log(data);
            _this.cerrarModal();
            var toast = _this.toastCtrl.create({
                message: 'el Item ha sido Eliminado',
                duration: 3000,
                position: 'top'
            });
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
        });
    };
    DetallePage.prototype.detalle = function (nombre) {
        var _this = this;
        this.http.sacarDetalles(nombre).then(function (data) {
            // console.log(data)  
            _this.detainv = data["detalle"];
            // console.log("Resultado"+JSON.stringify(this.detainv));
            /*  var json = data["detalle"];
     
            for (var i = 0; i < json.length; i++) {
            // console.log(json[i].nombre_mob);
            this.rango = json[i].cantidad_mob;
            }
     
             console.log("Nombre"+this.rango);
     */
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    DetallePage.prototype.cerrarModal = function () {
        this.view.dismiss();
    };
    DetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetallePage');
    };
    DetallePage.prototype.EditarItem = function () {
        var myAnadir = this.modCtrl.create('EditarInventarioPage', { nombre: this.nombre });
        myAnadir.present();
    };
    DetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalle',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/detalle/detalle.html"*/'<!--\n  Generated template for the DetallePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button (click)="EditarItem()">Editar</button>\n      <button ion-button (click)="eliminarItem()">Eliminar</button>\n      <button ion-button (click)="cerrarModal()">Cerrar</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n    \n  <ion-list *ngFor="let det of detainv">\n      <h1 class="nombre" align="center">{{det.nombre_mob}}</h1>\n    <ion-card >\n        <img [src]="det.ruta_imagen"/>\n        <div class="card-title">\n        </div>\n      </ion-card>\n    \n      <ion-card >\n          <ion-card-header>\n            \n            <h1 align="left">En el Inventario: {{det.cantidad_mob}}</h1>\n          </ion-card-header>\n          <ion-card-content>\n            <div align="left">Costo:  ${{det.costo_mob}}</div>\n\n            <!--\n            <ion-item>\n                <ion-range disabled min="0" max="det.cantidad_mob" [(ngModel)]="det.cantidad_mob" color="secondary">\n                    <ion-label range-left>0</ion-label>\n                    <ion-label range-right>{{det.cantidad_mob}}</ion-label>\n                </ion-range>\n               \n              </ion-item>\n              <p align="left">Disponibles : {{det.cantidad_mob}}</p> \n              <ion-item>\n                <p align="left">Extras: {{det.extra_mob}}</p>\n              </ion-item>\n              <ion-item>\n                <p align="left">Costo Extra: {{det.extra_mob_costo}}</p>\n              </ion-item>-->\n          </ion-card-content>\n        </ion-card>\n  </ion-list>\n\n  \n</ion-content>\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/detalle/detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], DetallePage);
    return DetallePage;
}());

//# sourceMappingURL=detalle.js.map

/***/ })

});
//# sourceMappingURL=9.js.map