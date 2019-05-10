webpackJsonp([6],{

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarnotaPageModule", function() { return EditarnotaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editarnota__ = __webpack_require__(458);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditarnotaPageModule = /** @class */ (function () {
    function EditarnotaPageModule() {
    }
    EditarnotaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editarnota__["a" /* EditarnotaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editarnota__["a" /* EditarnotaPage */]),
            ],
        })
    ], EditarnotaPageModule);
    return EditarnotaPageModule;
}());

//# sourceMappingURL=editarnota.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarnotaPage; });
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
 * Generated class for the EditarnotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditarnotaPage = /** @class */ (function () {
    function EditarnotaPage(navCtrl, view, navParams, camera, http, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.navParams = navParams;
        this.camera = camera;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.id_nota = navParams.get('id_nota');
        this.note = navParams.get('note');
        this.body = navParams.get('body');
        this.base64Image2 = navParams.get('ruta');
        this.base64Image = "nohay";
        console.log(this.id_nota);
        console.log(this.note);
        console.log(this.body);
        console.log("Ruta imagen" + this.base64Image);
    }
    EditarnotaPage.prototype.foto = function () {
        var _this = this;
        var options = {
            quality: 30,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.base64Image2 = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    EditarnotaPage.prototype.galeria = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.base64Image2 = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    EditarnotaPage.prototype.actualizar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Actualizando Nota..'
        });
        loading.present();
        console.log(this.base64Image);
        this.http.actualizarNotas(this.id_nota, this.note, this.body, this.base64Image).then(function (res) {
            _this.respuesta = res["registro"];
            console.log(_this.respuesta);
            loading.dismiss();
            _this.cerrarModal();
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            loading.dismiss();
            alert("Verifica que cuentes con internet");
        });
    };
    EditarnotaPage.prototype.cerrarModal = function () {
        this.view.dismiss();
    };
    EditarnotaPage.prototype.presentConfirm = function () {
        var _this = this;
        console.log(this.id_nota);
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
                        _this.loadingDeBorrar();
                        console.log();
                    }
                }
            ]
        });
        alert.present();
    };
    EditarnotaPage.prototype.loadingDeBorrar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.onDidDismiss(function () {
            _this.confirmar();
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    EditarnotaPage.prototype.confirmar = function () {
        var _this = this;
        this.http.borrarNota(this.id_nota).then(function (res) {
            _this.cerrarModal();
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    EditarnotaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editarnota',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/editarnota/editarnota.html"*/'<!--\n  Generated template for the EditarnotaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="registrar">\n      <ion-buttons start>\n          <button ion-button icon-only (click)="cerrarModal()">\n            <ion-icon name="arrow-round-back"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>Editar mi Nota</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentConfirm()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="fondo" >\n\n  <ion-card style="background-color: #393939;">\n\n\n  \n    <div *ngIf="base64Image2 == \'http://avisositd.xyz/mobiliaria/notasNoMover/\'; else nofoto">\n      <ion-card-content>\n        <ion-label color="registrar" stacked>Titulo Nota</ion-label>\n        <ion-input [(ngModel)]="note" class="input" type="text" ></ion-input>\n        <ion-label color="registrar" stacked>Mensaje</ion-label>\n        <ion-textarea [(ngModel)]="body" \n        class="textbox"\n        autocomplete="on"\n        autocorrect="on"\n        type="text"></ion-textarea>\n      </ion-card-content>\n    </div>\n    <ng-template #nofoto >\n      <ion-card-header>\n        <img [src]=\'base64Image2\' />\n       </ion-card-header>\n       <ion-card-content>\n        <ion-label color="registrar" stacked>Titulo Nota</ion-label>\n        <ion-input [(ngModel)]="note" class="input" type="text" ></ion-input>\n        <ion-label color="registrar" stacked>Mensaje</ion-label>\n        <ion-textarea [(ngModel)]="body" \n        class="textbox"\n        autocomplete="on"\n        autocorrect="on"\n        type="text"></ion-textarea>\n      </ion-card-content>\n    </ng-template>\n\n      \n      \n        \n        \n      \n    \n  </ion-card>\n\n  <div class="row">\n\n      <div class="column">\n          <button ion-button color="registrar"(click)="foto()" block>Tomar Foto</button>\n      </div>\n\n      <div class="column">\n          <button ion-button color="naranja" (click)="galeria()" block>Galeria</button>\n      </div>\n\n    </div>\n\n    \n\n</ion-content>\n\n<ion-footer primary>\n    <button ion-button color="registrar" (click)="actualizar()" full>Actualizar Nota</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/editarnota/editarnota.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], EditarnotaPage);
    return EditarnotaPage;
}());

//# sourceMappingURL=editarnota.js.map

/***/ })

});
//# sourceMappingURL=6.js.map