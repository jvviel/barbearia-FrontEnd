webpackJsonp([3],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApresentacaoPageModule", function() { return ApresentacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apresentacao__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApresentacaoPageModule = /** @class */ (function () {
    function ApresentacaoPageModule() {
    }
    ApresentacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__apresentacao__["a" /* ApresentacaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__apresentacao__["a" /* ApresentacaoPage */]),
            ],
        })
    ], ApresentacaoPageModule);
    return ApresentacaoPageModule;
}());

//# sourceMappingURL=apresentacao.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApresentacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
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
 * Generated class for the ApresentacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApresentacaoPage = /** @class */ (function () {
    function ApresentacaoPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
    }
    ApresentacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApresentacaoPage');
    };
    ApresentacaoPage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
    };
    ApresentacaoPage.prototype.irParaLogin = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    ApresentacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-apresentacao',template:/*ion-inline-start:"/home/alansep/Documentos/barbearia-FrontEnd/src/pages/apresentacao/apresentacao.html"*/'<ion-content padding>\n\n  <ion-slides pager>\n    <ion-slide>\n      <p class="titulo">Agende um Horário</p>\n    </ion-slide>\n    <ion-slide>\n      <p class="titulo">Escolha um Serviço</p>\n    </ion-slide>\n    <ion-slide>\n      <p class="titulo">Em qualquer lugar!</p>\n    </ion-slide>\n    <ion-slide>\n      <p class="titulo">Vamos começar?</p>\n      <button ion-button outline block (click)="irParaLogin()">INICIAR</button>\n    </ion-slide>\n  </ion-slides>\n\n\n</ion-content>'/*ion-inline-end:"/home/alansep/Documentos/barbearia-FrontEnd/src/pages/apresentacao/apresentacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], ApresentacaoPage);
    return ApresentacaoPage;
}());

//# sourceMappingURL=apresentacao.js.map

/***/ })

});
//# sourceMappingURL=3.js.map