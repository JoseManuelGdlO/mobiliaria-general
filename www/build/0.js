webpackJsonp([0],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajadoresPageModule", function() { return TrabajadoresPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trabajadores__ = __webpack_require__(463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrabajadoresPageModule = /** @class */ (function () {
    function TrabajadoresPageModule() {
    }
    TrabajadoresPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trabajadores__["a" /* TrabajadoresPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trabajadores__["a" /* TrabajadoresPage */]),
            ],
        })
    ], TrabajadoresPageModule);
    return TrabajadoresPageModule;
}());

//# sourceMappingURL=trabajadores.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajadoresPage; });
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
 * Generated class for the TrabajadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrabajadoresPage = /** @class */ (function () {
    function TrabajadoresPage(navCtrl, toastCtrl, alertCtrl, http, navParams, view) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.navParams = navParams;
        this.view = view;
        this.currentDate = new Date().toLocaleDateString();
        this.sacarTrabajadores();
        //console.log(this.currentDate);
    }
    TrabajadoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrabajadoresPage');
    };
    TrabajadoresPage.prototype.cerrarModal = function () {
        this.view.dismiss();
    };
    TrabajadoresPage.prototype.sacarTrabajadores = function () {
        //console.log("entraste al metodo");
        var _this = this;
        this.http.revisarTrabajadores().then(function (inv) {
            // console.log(inv)     
            _this.inventario = inv["trabajadores"];
            //console.log(this.trabajadores);
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    TrabajadoresPage.prototype.eliminarTrabjador = function (id) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Estas seguro que deseas eliminar a este Usuario?',
            message: 'Se eliminara de la lista de usuarios y no podra ser recuperado ',
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
                        _this.eliminarTrabajadores(id);
                    }
                }
            ]
        });
        confirm.present();
    };
    TrabajadoresPage.prototype.eliminarTrabajadores = function (id) {
        var _this = this;
        this.http.eliminarTrabajador(id).then(function (inv) {
            // console.log(inv)     
            if (inv["trabajador"] == "eliminado") {
                var toast = _this.toastCtrl.create({
                    message: 'Usuario Eliminado',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                _this.cerrarModal();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Fallo la eliminacion Contacta Administrador',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            //console.log(this.trabajadores);
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    TrabajadoresPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Usuario Nuevo',
            inputs: [
                {
                    name: 'nombre_comp',
                    placeholder: 'Nombre Completo'
                },
                {
                    name: 'usuario',
                    placeholder: 'Nombre del Usuario'
                },
                {
                    name: 'contrasena',
                    placeholder: 'Contraseña'
                },
                {
                    name: 'correo',
                    placeholder: 'Correo Electronico'
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
                    text: 'Añadir',
                    handler: function (data) {
                        _this.decidirRol(data.nombre_comp, data.usuario, data.contrasena, data.correo);
                    }
                }
            ]
        });
        alert.present();
    };
    TrabajadoresPage.prototype.decidirRol = function (nombre, usuario, contrasena, correo) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Decide rol al nuevo Usuario',
            message: 'Elige el tipo de premisos que tendra el usuario',
            buttons: [
                {
                    text: 'Administrador',
                    role: 'cancel',
                    handler: function () {
                        _this.anadirUsuario(nombre, usuario, contrasena, correo, "Administrador");
                    }
                },
                {
                    text: 'Repartidor',
                    handler: function () {
                        _this.anadirUsuario(nombre, usuario, contrasena, correo, "Trabajador");
                    }
                }
            ]
        });
        alert.present();
    };
    TrabajadoresPage.prototype.anadirUsuario = function (nombre, usuario, contrasena, correo, rol) {
        //  console.log(nombre+usuario+contrasena+rol+this.currentDate);
        var _this = this;
        this.http.anadirUsuario(nombre, usuario, contrasena, correo, rol, this.currentDate).then(function (inv) {
            console.log(inv);
            if (inv["trabajador"] == "registrado") {
                var toast = _this.toastCtrl.create({
                    message: 'Usuario Agregado',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                _this.cerrarModal();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Fallo Agregar Usuario Contacta Administrador',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    TrabajadoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trabajadores',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/trabajadores/trabajadores.html"*/'<!--\n  Generated template for the TrabajadoresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar color="primary">\n    <ion-title>Administrar Trabajadores</ion-title>\n    <ion-buttons end>\n        <button ion-button (click)="cerrarModal()">Cerrar</button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n     <ion-card *ngFor="let item of inventario" >\n      <ion-item>\n          <ion-avatar item-start>\n            <img src="../../assets/img/ic_admin.jpg">\n          </ion-avatar>\n          <h2>{{item.nombre_comp}}</h2>\n          <p>Creacion {{item.fecha_creacion}}</p>\n        </ion-item>\n\n        <ion-card-content>\n            <h1 class="h1Content">Usuario:     {{item.usuario}}</h1>\n            <p>Contraseña:    {{item.contrasena}}</p>\n            <p>Correo:    {{item.correo}}</p>\n          </ion-card-content>\n        \n          <ion-row>\n            <ion-col>\n              <ion-item icon-start clear small>\n                <p>Rol del usuario</p>\n                <p class="h1Content">{{item.rol_usuario}}</p>\n                \n              </ion-item>\n            </ion-col>\n            <ion-col  class="colElim">\n              <button ion-button  icon-start color="danger" (click)="eliminarTrabjador(item.id_usuario)" round>\n                <ion-icon name="ios-close"></ion-icon>\n                Eliminar\n              </button>\n            </ion-col>\n           \n          </ion-row>\n       </ion-card>\n\n       <ion-fab bottom right>\n          <button ion-fab (click)="presentPrompt()"><ion-icon name="add"></ion-icon></button>\n      </ion-fab>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/trabajadores/trabajadores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], TrabajadoresPage);
    return TrabajadoresPage;
}());

//# sourceMappingURL=trabajadores.js.map

/***/ })

});
//# sourceMappingURL=0.js.map