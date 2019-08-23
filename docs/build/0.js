webpackJsonp([0],{

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionPageModule", function() { return SelectionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectionPageModule = /** @class */ (function () {
    function SelectionPageModule() {
    }
    SelectionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__selection__["a" /* SelectionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__selection__["a" /* SelectionPage */]),
            ],
        })
    ], SelectionPageModule);
    return SelectionPageModule;
}());

//# sourceMappingURL=selection.module.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectionPage = /** @class */ (function () {
    function SelectionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selected = navParams.get('bank');
    }
    SelectionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectionPage');
    };
    SelectionPage.prototype.choose = function () {
        var data = {
            bank: this.selected
        };
        this.navCtrl.push('input-field', data);
    };
    SelectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selection',template:/*ion-inline-start:"/Users/ben/projects/EKASBON/webadmin/src/pages/selection/selection.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>{{selected.get(\'bank\')}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="wrapper">\n    <h4>Fitur dan Manfaat</h4>\n\n    <!-- <h2>Fitur dan Manfaat</h2> -->\n    <h5>KUR Mikro:</h5>\n      <p>1. Paling lama 3 (tiga) tahun untuk kredit/pembiayaan modal kerja; atau</p>\n      <p>2. Paling lama 5 (lima tahun untuk kredit/pembiayaan investasi.)</p>\n    <h5>KUR Kecil :</h5>\n      <p>1. Paling lama 4 (empat) tahun untuk kredit/pembiayaan modal kerja; atau</p>\n      <p>2. Paling lama 5 (lima tahun untuk kredit/pembiayaan investasi.)</p>\n    <h5>KUR TKI :</h5>\n      <p>Jangka waktu KUR penempatan tenaga kerja Indonesia paling lama sama dengan masa kontrak kerja dan tidak melebihi jangka waktu paling lama 3 (tiga) tahun.</p>\n    <h5>KUR Khusus :</h5>\n      <p>1. Paling lama 4 (empat) tahun untuk kredit/pembiayaan modal kerja; atau</p>\n      <p>2. Paling lama 5 (lima tahun untuk kredit/pembiayaan investasi.)</p>\n\n    <h5>Limit Kredit :</h5>\n    <p>KUR Mikro : Maksimal Rp 25 juta</p>\n    <p>KUR Kecil : > Rp 25 s.d Rp 500 juta</p>\n    <p>KUR TKI : Maksimal Rp 25 juta</p>\n    <p>KUR Khusus : > Rp 25 s.d Rp 500 juta</p>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button block outline (click)="navCtrl.pop()">Kembali</button>\n      </ion-col>\n      <ion-col col-6>\n          <button ion-button block (click)="choose()">Pilih</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/ben/projects/EKASBON/webadmin/src/pages/selection/selection.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SelectionPage);
    return SelectionPage;
}());

//# sourceMappingURL=selection.js.map

/***/ })

});
//# sourceMappingURL=0.js.map