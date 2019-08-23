webpackJsonp([1],{

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendanaanKoperasiPageModule", function() { return PendanaanKoperasiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pendanaan_koperasi__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PendanaanKoperasiPageModule = /** @class */ (function () {
    function PendanaanKoperasiPageModule() {
    }
    PendanaanKoperasiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pendanaan_koperasi__["a" /* PendanaanKoperasiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pendanaan_koperasi__["a" /* PendanaanKoperasiPage */]),
            ],
        })
    ], PendanaanKoperasiPageModule);
    return PendanaanKoperasiPageModule;
}());

//# sourceMappingURL=pendanaan-koperasi.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendanaanKoperasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_parse_parse__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var PendanaanKoperasiPage = /** @class */ (function () {
    function PendanaanKoperasiPage(navCtrl, navParams, parse) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.parse = parse;
    }
    PendanaanKoperasiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendanaanKoperasiPage');
    };
    PendanaanKoperasiPage.prototype.ionViewWillEnter = function () {
        this.loadTypeOfBank();
    };
    PendanaanKoperasiPage.prototype.loadTypeOfBank = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.parse.getTypeOfBank().then(function (res) {
                    console.log(res);
                    _this.bank = res;
                }, function (err) {
                    console.log(err);
                });
                return [2 /*return*/];
            });
        });
    };
    PendanaanKoperasiPage.prototype.selectBank = function (bank) {
        var data = {
            bank: bank
        };
        this.navCtrl.push('selection', data);
    };
    PendanaanKoperasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pendanaan-koperasi',template:/*ion-inline-start:"/Users/ben/projects/EKASBON/webadmin/src/pages/pendanaan-koperasi/pendanaan-koperasi.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pendanaan Koperasi</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="wrapper">\n    <h4>Pilih Bank :</h4>\n  </div>\n\n  <ion-grid no-padding>\n    <ion-row>\n      <ion-col col-12 col-md-4 col-lg-3 *ngFor="let item of bank" tappable (click)="selectBank(item)">\n        <ion-card>\n          <ion-item>\n\n            <img [src]="item.get(\'logo\') != undefined ? item.get(\'logo\').url() : \'\'" alt="">\n            <h2>{{item.get(\'bank\')}}</h2>\n\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- <ion-item>\n    <ion-label>Arya Stark</ion-label>\n    <ion-checkbox color="dark" checked="true"></ion-checkbox>\n  </ion-item> -->\n\n  <!-- <ion-card *ngFor="let item of bank" tappable>\n\n    <img [src]="item.get(\'logo\') != undefined ? item.get(\'logo\').url() : \'\'" alt="">\n    <p>{{item.get(\'bank\')}}</p>\n\n  </ion-card> -->\n\n</ion-content>'/*ion-inline-end:"/Users/ben/projects/EKASBON/webadmin/src/pages/pendanaan-koperasi/pendanaan-koperasi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_parse_parse__["a" /* ParseProvider */]])
    ], PendanaanKoperasiPage);
    return PendanaanKoperasiPage;
}());

//# sourceMappingURL=pendanaan-koperasi.js.map

/***/ })

});
//# sourceMappingURL=1.js.map