webpackJsonp([8],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarInventarioPageModule", function() { return EditarInventarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editar_inventario__ = __webpack_require__(456);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditarInventarioPageModule = /** @class */ (function () {
    function EditarInventarioPageModule() {
    }
    EditarInventarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editar_inventario__["a" /* EditarInventarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editar_inventario__["a" /* EditarInventarioPage */]),
            ],
        })
    ], EditarInventarioPageModule);
    return EditarInventarioPageModule;
}());

//# sourceMappingURL=editar-inventario.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarInventarioPage; });
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
 * Generated class for the EditarInventarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditarInventarioPage = /** @class */ (function () {
    function EditarInventarioPage(camera, platform, actionSheetCtrl, view, http, params, toastCtrl) {
        this.camera = camera;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.view = view;
        this.http = http;
        this.params = params;
        this.toastCtrl = toastCtrl;
        this.base64Image = "../assets/img/ic_card.jpg";
        this.todo = {};
        this.theWallImageUrl = "../assets/img/ic_card.jpg";
        // console.log(params.get('nombre'));
        this.resivido = params.get('nombre');
        var i = 0, strLength = this.resivido.length;
        for (i; i < strLength; i++) {
            this.resivido = this.resivido.replace(" ", "_");
        }
        //console.log(this.resivido);
        this.detalle(this.resivido);
    }
    EditarInventarioPage.prototype.detalle = function (nombre) {
        var _this = this;
        this.http.sacarDetalles(nombre).then(function (data) {
            // console.log(data)  
            _this.detainv = data["detalle"];
            console.log(nombre);
            // console.log("Resultado"+JSON.stringify(this.detainv));
            var json = data["detalle"];
            for (var i = 0; i < json.length; i++) {
                // console.log(json[i].nombre_mob);
                _this.cantidad_mob = json[i].cantidad_mob;
                _this.nombre_mob = json[i].nombre_mob;
                _this.costo_mob = json[i].costo_mob;
                _this.extra_mob = json[i].extra_mob;
                _this.extra_costo_mob = json[i].extra_mob_costo;
                _this.id_mob = json[i].id_mob;
            }
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    EditarInventarioPage.prototype.internetToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Registro Exitoso',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    EditarInventarioPage.prototype.verificaToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Verifica tu Conexion a Internet',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    EditarInventarioPage.prototype.logForm = function () {
        var _this = this;
        this.http.modificarInventario(this.id_mob, this.nombre_mob, this.cantidad_mob, this.costo_mob, this.extra_mob, this.extra_costo_mob, this.base64Image).then(function (res) {
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
    EditarInventarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditarInventarioPage');
    };
    EditarInventarioPage.prototype.cerrarModal = function () {
        this.view.dismiss();
    };
    EditarInventarioPage.prototype.openeditprofile = function () {
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
    EditarInventarioPage.prototype.takephoto = function () {
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
    EditarInventarioPage.prototype.openGallery = function () {
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
    EditarInventarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar-inventario',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/editar-inventario/editar-inventario.html"*/'<!--\n  Generated template for the EditarInventarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar Inventario</ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="cerrarModal()">Cerrar</button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="container">\n        <img [src]="base64Image" alt="Snow">\n        <button ion-button (click)="openeditprofile()" class="btn">Cambiar la Imagen<ion-icon class="icon" name="camera"></ion-icon></button>\n      </div>\n\n      <form class="formEnv" (ngSubmit)="logForm()">\n          <ion-item>\n              <ion-label color="primary" floating>Nombre</ion-label>\n              <ion-input type="text" [(ngModel)]="nombre_mob" name="nombre"></ion-input>\n            </ion-item>\n          <ion-item>\n            <ion-label color="primary" floating>Cantidad</ion-label>\n            <ion-input type="number" [(ngModel)]="cantidad_mob" name="cantidad"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label color="primary" floating>Costo del Articulo</ion-label>\n              <ion-input type="number" [(ngModel)]="costo_mob" name="costo"></ion-input>\n            </ion-item>\n\n        \n     <!--\n\n            <ion-item class="itemTop">\n                <ion-label color="primary">Nombre del Extra</ion-label>\n                <ion-input placeholder="Sombrilla de Silla" type="text" [(ngModel)]="extra_mob" name="nombre_extra"></ion-input>\n              </ion-item>\n\n\n            <ion-item >\n                <ion-label color="primary">Precio del Extra</ion-label>\n                <ion-input placeholder="100" type="number" [(ngModel)]="extra_costo_mob" name="precio_extra"></ion-input>\n            </ion-item>-->\n          \n          <button ion-button type="submit" block>Aceptar Edicion</button>\n        </form>\n\n      \n\n</ion-content>\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/editar-inventario/editar-inventario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], EditarInventarioPage);
    return EditarInventarioPage;
}());

//# sourceMappingURL=editar-inventario.js.map

/***/ })

});
//# sourceMappingURL=8.js.map