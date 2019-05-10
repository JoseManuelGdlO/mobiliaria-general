webpackJsonp([3],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalnotasaddPageModule", function() { return ModalnotasaddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modalnotasadd__ = __webpack_require__(460);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalnotasaddPageModule = /** @class */ (function () {
    function ModalnotasaddPageModule() {
    }
    ModalnotasaddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modalnotasadd__["a" /* ModalnotasaddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modalnotasadd__["a" /* ModalnotasaddPage */]),
            ],
        })
    ], ModalnotasaddPageModule);
    return ModalnotasaddPageModule;
}());

//# sourceMappingURL=modalnotasadd.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalnotasaddPage; });
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
 * Generated class for the ModalnotasaddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalnotasaddPage = /** @class */ (function () {
    function ModalnotasaddPage(loadingCtrl, http, navCtrl, navParams, view, camera) {
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.camera = camera;
        this.user = navParams.get('nombre');
        this.base64Image = "nohay";
        console.log(this.user);
        console.log(this.base64Image);
    }
    ModalnotasaddPage.prototype.foto = function () {
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
        }, function (err) {
            console.log(err);
        });
    };
    ModalnotasaddPage.prototype.galeria = function () {
        var _this = this;
        var options = {
            quality: 30,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    ModalnotasaddPage.prototype.agregar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Agregando Nota..'
        });
        loading.present();
        console.log(this.base64Image);
        this.http.meterNotas(this.user, this.titulo, this.texto, this.base64Image).then(function (res) {
            loading.dismiss();
            _this.respuesta = res["registro"];
            console.log(_this.respuesta);
            _this.cerrarModal();
        }, function (error) {
            loading.dismiss();
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    ModalnotasaddPage.prototype.cerrarModal = function () {
        this.view.dismiss();
    };
    ModalnotasaddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalnotasadd',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/modalnotasadd/modalnotasadd.html"*/'<!--\n  Generated template for the ModalnotasaddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="registrar">\n    <ion-title>Nueva Nota</ion-title>\n    <ion-buttons end>\n        <button ion-button (click)="cerrarModal()">Cerrar</button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="fondo"g> \n  <div *ngIf="base64Image == \'nohay\'; else nofoto">\n    <ion-list>\n          <ion-label class="stak" stacked>Titulo de la Nota</ion-label>\n            <ion-input [(ngModel)]="titulo" type="text"></ion-input>\n          <ion-label class="stak" stacked>Texto de la nota</ion-label>\n            <ion-textarea [(ngModel)]="texto" \n            class="textbox"\n            autocomplete="on"\n            autocorrect="on"\n            type="text"></ion-textarea>\n    </ion-list>\n  </div>\n  <ng-template #nofoto >\n      <img style="width: 80%;" [src]="base64Image" />\n    <ion-list>\n        <ion-label class="stak" stacked>Titulo de la Nota</ion-label>\n            <ion-input [(ngModel)]="titulo" type="text"></ion-input>\n            <ion-label class="stak" stacked>Texto de la nota</ion-label>\n            <ion-textarea [(ngModel)]="texto" \n            class="textbox"\n            autocomplete="on"\n            autocorrect="on"\n            type="text"></ion-textarea>\n      </ion-list>\n  </ng-template>\n\n  \n\n\n\n</ion-content>\n\n<ion-footer primary>\n        <ion-row>\n          <ion-col col-6><button ion-button (click)="foto()" color="registrar"  outline full round>Tomar Foto </button></ion-col>\n          <ion-col col-6><button ion-button (click)="galeria()" color="registrar"  outline full round>Galeria</button></ion-col>\n        </ion-row>\n    <button ion-button (click)="agregar()" full color="registrar" >Agregar Nota </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/modalnotasadd/modalnotasadd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], ModalnotasaddPage);
    return ModalnotasaddPage;
}());

//# sourceMappingURL=modalnotasadd.js.map

/***/ })

});
//# sourceMappingURL=3.js.map