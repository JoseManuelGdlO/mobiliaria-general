webpackJsonp([12],{

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoclientesPageModule", function() { return CatalogoclientesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catalogoclientes__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CatalogoclientesPageModule = /** @class */ (function () {
    function CatalogoclientesPageModule() {
    }
    CatalogoclientesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__catalogoclientes__["a" /* CatalogoclientesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__catalogoclientes__["a" /* CatalogoclientesPage */]),
            ],
        })
    ], CatalogoclientesPageModule);
    return CatalogoclientesPageModule;
}());

//# sourceMappingURL=catalogoclientes.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogoclientesPage; });
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
 * Generated class for the CatalogoclientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CatalogoclientesPage = /** @class */ (function () {
    function CatalogoclientesPage(view, toastCtrl, http, alertCtrl) {
        this.view = view;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.searchQuery = '';
        this.traerDatos();
        this.initializeItems();
    }
    CatalogoclientesPage.prototype.update = function () {
        this.view.dismiss();
    };
    CatalogoclientesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CatalogoclientesPage');
    };
    CatalogoclientesPage.prototype.cerrarModal = function () {
        this.view.dismiss();
    };
    CatalogoclientesPage.prototype.abrirEditar = function (nombre, telefono, correo, id, slidingItem) {
        this.presentEditar(nombre, telefono, correo, id);
        slidingItem.close();
    };
    CatalogoclientesPage.prototype.abrirEliminar = function (id, slidingItem) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Estas seguro que deseas eliminar a este cliente?',
            message: 'Se eliminara de la lista de clientes y no podra ser recuperado ',
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
                        _this.eliminarCliente(id);
                    }
                }
            ]
        });
        confirm.present();
        slidingItem.close();
    };
    CatalogoclientesPage.prototype.eliminarCliente = function (id) {
        var _this = this;
        this.http.eliminarCliente(id).then(function (inv) {
            //console.log(inv) 
            //console.log(inv["cliente"]);
            if (inv["cliente"] == "eliminado") {
                var toast = _this.toastCtrl.create({
                    message: 'Cliente Eliminado',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                _this.update();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Fallo la eliminacion Contacta Administrador',
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
    CatalogoclientesPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Cliente Nuevo',
            inputs: [
                {
                    name: 'nombre',
                    placeholder: 'Jose Manuel G de la O'
                },
                {
                    name: 'telefono',
                    placeholder: '6181020927',
                    type: 'number'
                },
                {
                    name: 'correo',
                    placeholder: 'Escribe la dirección'
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
                        _this.anadirCliente(data.nombre, data.telefono, data.correo);
                    }
                }
            ]
        });
        alert.present();
    };
    CatalogoclientesPage.prototype.presentEditar = function (nombre, telefono, correo, id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Editar Cliente', message: 'Editar Cliente Seleccionado',
            inputs: [
                {
                    name: 'nombre',
                    placeholder: 'Jose Manuel G de la O',
                    value: nombre
                },
                {
                    name: 'telefono',
                    placeholder: '6181020927',
                    type: 'number',
                    value: telefono
                },
                {
                    name: 'correo',
                    placeholder: 'JoseManuelGdlO@gmail.com',
                    value: correo
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
                    text: 'Editar',
                    handler: function (data) {
                        _this.editarCliente(data.nombre, data.telefono, data.correo, id);
                    }
                }
            ]
        });
        alert.present();
    };
    CatalogoclientesPage.prototype.anadirCliente = function (nombre, telefono, correo) {
        var _this = this;
        this.http.anadirCliente(nombre, telefono, correo).then(function (inv) {
            // console.log(inv)     
            if (inv["cliente"] == "registrado") {
                var toast = _this.toastCtrl.create({
                    message: 'El cliente ha quedado registrado',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                _this.update();
            }
            else if (inv["cliente"] == "noregistrado") {
                var toast = _this.toastCtrl.create({
                    message: 'Ha ocurrido un error intenta mas tarde',
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
    CatalogoclientesPage.prototype.editarCliente = function (nombre, telefono, correo, id) {
        var _this = this;
        this.http.editarCliente(nombre, telefono, correo, id).then(function (inv) {
            console.log(inv);
            if (inv["cliente"] == "editado") {
                var toast = _this.toastCtrl.create({
                    message: 'El cliente ha sido editado',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                _this.update();
            }
            else if (inv["cliente"] == "noEditado") {
                var toast = _this.toastCtrl.create({
                    message: 'Ha ocurrido un error intenta mas tarde',
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
    CatalogoclientesPage.prototype.traerDatos = function () {
        var _this = this;
        this.http.revisarClientes().then(function (inv) {
            // console.log(inv)     
            _this.inventario = inv["clientes"];
            _this.compl = inv["clientes"];
        }, function (error) {
            console.log("Error" + JSON.stringify(error));
            alert("Verifica que cuentes con internet");
        });
    };
    CatalogoclientesPage.prototype.initializeItems = function () {
        this.inventario = this.compl;
    };
    CatalogoclientesPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.inventario = this.inventario.filter(function (item) {
                return (item.nombre_cliente.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    CatalogoclientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-catalogoclientes',template:/*ion-inline-start:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/catalogoclientes/catalogoclientes.html"*/'<!--\n  Generated template for the CatalogoclientesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    \n    <ion-title>Catalogo de Clientes</ion-title>\n    <ion-buttons end>\n        <button ion-button (click)="cerrarModal()">Cerrar</button>\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n\n    <ion-list class="mobList-class" *ngFor="let item of inventario"  >\n        <ion-item-sliding #slidingItem>  \n        <ion-item>\n          <h2 class="h1Nomb">{{item.nombre_cliente}}</h2>\n          <p>    Telefono  {{item.telefono_cliente}} </p>\n\n          \n        </ion-item>\n        <ion-item-options>\n            <button ion-button (click)="abrirEditar(item.nombre_cliente, item.telefono_cliente, item.correo_cliente, item.id_cliente, slidingItem)">Editar</button>\n            <button ion-button (click)="abrirEliminar(item.id_cliente, slidingItem)" color="danger">Eliminar</button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n\n      <ion-fab bottom right>\n          <button ion-fab (click)="presentPrompt()"><ion-icon name="add"></ion-icon></button>\n      </ion-fab>\n     \n\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar color="primary">\n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/josemanuelgarciadelao/Desktop/angular/mobifest/src/pages/catalogoclientes/catalogoclientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], CatalogoclientesPage);
    return CatalogoclientesPage;
}());

//# sourceMappingURL=catalogoclientes.js.map

/***/ })

});
//# sourceMappingURL=12.js.map