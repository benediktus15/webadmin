webpackJsonp([2],{

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFieldPageModule", function() { return InputFieldPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_field__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InputFieldPageModule = /** @class */ (function () {
    function InputFieldPageModule() {
    }
    InputFieldPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__input_field__["a" /* InputFieldPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__input_field__["a" /* InputFieldPage */]),
            ],
        })
    ], InputFieldPageModule);
    return InputFieldPageModule;
}());

//# sourceMappingURL=input-field.module.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFieldPage; });
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



var InputFieldPage = /** @class */ (function () {
    function InputFieldPage(navCtrl, navParams, toastCtrl, loadingCtrl, parse) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.parse = parse;
        this.data = {
            nama: '',
            perusahaan: '',
            jabatan: '',
            noHp: '',
            noTelepon: '',
            jumlahKaryawanTetap: '',
            karyawanLepas: '',
            rataGaji: '',
            rencanaRataPlafon: '',
            email: '',
            agreement: this.agreement,
            bank: this.bank
        };
        this.bank = navParams.get('bank');
    }
    InputFieldPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InputFieldPage');
    };
    InputFieldPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    InputFieldPage.prototype.send = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Harap tunggu...'
        });
        loading.present();
        var toast = this.toastCtrl.create({
            message: 'Data Anda Telah Terkirim',
            duration: 2000,
            position: 'buttom'
        });
        this.parse.pushData(this.data).then(function (res) {
            console.log(res);
            loading.dismiss();
            _this.navCtrl.popTo(_this.navCtrl.getByIndex(0));
            toast.present();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    InputFieldPage.prototype.onSelectChange = function (ev) {
        this.agreement = ev.value;
        this.data.agreement = ev.value;
    };
    InputFieldPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-input-field',template:/*ion-inline-start:"/Users/ben/projects/EKASBON/webadmin/src/pages/input-field/input-field.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>{{bank.get(\'bank\')}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="div_wrapper">\n    <ion-row>\n      <ion-col col-12>\n        <h4>Silahkan Lengkapi data dibawah ini:</h4>\n      </ion-col>\n    </ion-row>\n\n    <div input-list>\n      <ion-row>\n        <ion-col col-12>\n          <h6>Nama Lengkap</h6>\n          <ion-item>\n            <ion-input type="text" #name [(ngModel)]="data.nama" placeholder="Nama Lengkap"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <h6>Name Perusahaan / Koperasi</h6>\n          <ion-item>\n            <ion-input type="text" [(ngModel)]="data.perusahaan" placeholder="Nama Perusahaan"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <h6>Jabatan</h6>\n          <ion-item>\n            <ion-input type="text" [(ngModel)]="data.jabatan" placeholder="Jabatan"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <h6>No. HP</h6>\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="data.noHp" placeholder="0812 xxx"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <h6>No. Telepon</h6>\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="data.noTelepon" placeholder="021 123 xxx"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <h6>Jumlah Karyawan Tetap</h6>\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="data.jumlahKaryawanTetap" placeholder="0"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <h6>Karyawan Lepas</h6>\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="data.karyawanLepas" placeholder="0"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col col-12>\n          <h6>Rata-rata Gaji Karyawan</h6>\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="data.rataGaji" placeholder="0"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col col-12>\n          <h6>Rencana Rata-rata Plafon</h6>\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="data.rencanaRataPlafon" placeholder="0"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <h6>Email</h6>\n          <ion-item>\n            <ion-input type="text" [(ngModel)]="data.email" placeholder="mail@mail.com"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <div>\n        <p>\n          Kami akan mengirimkan data Bapak/Ibu kepada pihak bank terkait, selanjutnya pihak bank yang akan menghubungi Bapak/Ibu untuk menindaklanjuti kebutuhan yang diinginkan.\n        </p>\n      </div>\n\n      <ion-item>\n        <ion-label>Setuju dengan syarat dan ketentuan yang telah ditentutakn</ion-label>\n        <ion-checkbox color="primary" checked="false" [disabled]="data.nama == \'\' || data.perusahaan == \'\' || data.jabatan == \'\' || data.noHp == \'\' || data.email == \'\'" (ionChange)="onSelectChange($event)"></ion-checkbox>\n      </ion-item>\n\n    </div>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button block outline (click)="navCtrl.pop()">Kembali</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button block class="send()" [disabled]="!agreement" (click)="send()">Kirim</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/ben/projects/EKASBON/webadmin/src/pages/input-field/input-field.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_parse_parse__["a" /* ParseProvider */]])
    ], InputFieldPage);
    return InputFieldPage;
}());

//# sourceMappingURL=input-field.js.map

/***/ })

});
//# sourceMappingURL=2.js.map