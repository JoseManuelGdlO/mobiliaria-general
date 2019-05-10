webpackJsonp([13],{

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnadirInvModalPageModule", function() { return AnadirInvModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__anadir_inv_modal__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AnadirInvModalPageModule = /** @class */ (function () {
    function AnadirInvModalPageModule() {
    }
    AnadirInvModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__anadir_inv_modal__["a" /* AnadirInvModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__anadir_inv_modal__["a" /* AnadirInvModalPage */]),
            ],
        })
    ], AnadirInvModalPageModule);
    return AnadirInvModalPageModule;
}());

//# sourceMappingURL=anadir-inv-modal.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnadirInvModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(333);
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
 * Generated class for the AnadirInvModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnadirInvModalPage = /** @class */ (function () {
    function AnadirInvModalPage(camera, platform, actionSheetCtrl, view, http, toastCtrl) {
        this.camera = camera;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.view = view;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.todo = {};
        /////Fotos////
        this.base64Image = "../assets/img/ic_card.jpg";
        this.nombre_extra_item = true;
        this.precio_extra_item = true;
        this.theWallImageUrl = "../assets/img/ic_card.jpg";
    }
    AnadirInvModalPage.prototype.tgExtras = function () {
        this.nombre_extra_item = !this.nombre_extra_item;
        this.precio_extra_item = !this.precio_extra_item;
    };
    AnadirInvModalPage.prototype.cerrarModal = function () {
        this.view.dismiss();
    };
    AnadirInvModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnadirInvModalPage');
    };
    AnadirInvModalPage.prototype.internetToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Registro Exitoso',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    AnadirInvModalPage.prototype.verificaToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Verifica tu Conexion a Internet',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    AnadirInvModalPage.prototype.logForm = function () {
        var _this = this;
        console.log(this.todo);
        this.http.insertarInventario(this.todo, this.base64Image).then(function (res) {
            console.log(res["registro"]);
            if (res["registro"] == "registrado") {
                _this.internetToast();
                _this.view.dismiss();
            }
            else if (res["registro"] == "noregistrado") {
                _this.verificaToast();
            }
        }, function (error) {
            console.error(error);
            _this.verificaToast();
        });
    };
    AnadirInvModalPage.prototype.openeditprofile = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Que Quieres Hacer?',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Tomar Foto',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'ios-camera-outline' : null,
                    handler: function () {
                        _this.takephoto();
                    }
                },
                {
                    text: 'Elegir Foto de la Galeria',
                    icon: !this.platform.is('ios') ? 'ios-images-outline' : null,
                    handler: function () {
                        _this.openGallery();
                    }
                },
            ]
        });
        actionSheet.present();
    };
    AnadirInvModalPage.prototype.takephoto = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    AnadirInvModalPage.prototype.openGallery = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    AnadirInvModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-anadir-inv-modal',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/anadir-inv-modal/anadir-inv-modal.html"*/'<!--\n  Generated template for the AnadirInvModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Añadir Articulo</ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="cerrarModal()">Cerrar</button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="container">\n        <img [src]="theWallImageUrl" alt="Snow">\n        <button ion-button (click)="openeditprofile()" class="btn">Añadir Imagen<ion-icon class="icon" name="camera"></ion-icon></button>\n      </div>\n\n      <form class="formEnv" (ngSubmit)="logForm()">\n          <ion-item>\n              <ion-label color="primary" floating>Nombre</ion-label>\n              <ion-input type="text" [(ngModel)]="todo.nombre" name="nombre"></ion-input>\n            </ion-item>\n          <ion-item>\n            <ion-label color="primary" floating>Cantidad</ion-label>\n            <ion-input type="number" [(ngModel)]="todo.cantidad" name="cantidad"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label color="primary" floating>Costo del Articulo</ion-label>\n              <ion-input type="number" [(ngModel)]="todo.costo" name="costo"></ion-input>\n            </ion-item>\n\n          <ion-item class="item2">\n              <ion-label class="extras">Extras</ion-label>\n              <ion-toggle (click)="tgExtras()"></ion-toggle>\n            </ion-item>\n\n\n            <ion-item [hidden]= "nombre_extra_item">\n                <ion-label color="primary">Nombre del Extra</ion-label>\n                <ion-input placeholder="Sombrilla de Silla" type="text" [(ngModel)]="todo.nombre_extra" name="nombre_extra"></ion-input>\n              </ion-item>\n\n\n            <ion-item [hidden]= "precio_extra_item">\n                <ion-label color="primary">Precio del Extra</ion-label>\n                <ion-input placeholder="100" type="number" [(ngModel)]="todo.precio_extra" name="precio_extra"></ion-input>\n            </ion-item>\n          \n          <button ion-button type="submit" block>Añadir al Inventario</button>\n        </form>\n\n      \n\n</ion-content>\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/anadir-inv-modal/anadir-inv-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], AnadirInvModalPage);
    return AnadirInvModalPage;
}());

//# sourceMappingURL=anadir-inv-modal.js.map

/***/ })

});
//# sourceMappingURL=13.js.map