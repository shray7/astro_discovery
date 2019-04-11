(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-img{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.mat-card-avatar{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkLWltZ3tcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtYXZhdGFye1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <h2>BoldIQ Astro Instances</h2>\n    </mat-card-title>\n    <div mat-card-avatar>\n      <img class=\"mat-card-img\" src=\"../assets/tablogo.png\">\n    </div>\n  </mat-card-header>\n  <mat-card-content>\n    <app-main-table></app-main-table>\n    <app-test-table></app-test-table>\n  </mat-card-content>\n</mat-card>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'astro-discovery';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _main_table_main_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-table/main-table.component */ "./src/app/main-table/main-table.component.ts");
/* harmony import */ var _test_table_test_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test-table/test-table.component */ "./src/app/test-table/test-table.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _main_table_main_table_component__WEBPACK_IMPORTED_MODULE_6__["MainTableComponent"],
                _test_table_test_table_component__WEBPACK_IMPORTED_MODULE_7__["TestTableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/backend.service.ts":
/*!************************************!*\
  !*** ./src/app/backend.service.ts ***!
  \************************************/
/*! exports provided: BackendService, InstanceModel, GenModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstanceModel", function() { return InstanceModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenModel", function() { return GenModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BackendService = /** @class */ (function () {
    function BackendService(http) {
        this.client = http;
    }
    BackendService.prototype.getVersion = function (model, isExternal) {
        if (isExternal === void 0) { isExternal = false; }
        if (isExternal == true) {
            var requestUrl = model.baseurl + "/external/administration.svc/version?apikey=" + model.apiKey;
        }
        else {
            var requestUrl = model.baseurl + "/internal/administration.svc/version?apikey=" + model.apiKey;
        }
        return this.client.get(requestUrl);
    };
    BackendService.prototype.getSolverVersion = function (model, isExternal) {
        if (isExternal === void 0) { isExternal = false; }
        if (isExternal == true) {
            var requestUrl = model.baseurl + "/external/solver.svc/version?apikey=" + model.apiKey;
        }
        else {
            var requestUrl = model.baseurl + "/internal/solver.svc/version?apikey=" + model.apiKey;
        }
        return this.client.get(requestUrl);
    };
    BackendService.prototype.getAllInstances = function () {
        var m = new Array();
        m.push(this.getAcrInstances());
        m.push(this.getEasInstances());
        m.push(this.getGaInstances());
        m.push(this.getJsInstances());
        m.push(this.getKlInstances());
        m.push(this.getPsInstances());
        m.push(this.getTwInstances());
        return m;
    };
    BackendService.prototype.getAcrInstances = function () {
        var m = new InstanceModel();
        m.dev = this.getAcrDevGenModel();
        m.qa = this.getAcrQaGenModel();
        m.prod = this.getAcrProdGenModel();
        m.stage = this.getAcrStageGenModel();
        m.live = this.getAcrLiveGenModel();
        return m;
    };
    BackendService.prototype.getAcrDevGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_ACR-DEV/ASTROSvc_ACR-DEV";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_ACR-DEV/Reports/browse/ACR-DEV";
        m.pilotPortal = "http://ASTRO-WEB_ACR-DEV/ASTROWeb_ACR-DEV";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m).subscribe(function (x) { _this.getFromObj(m, x); });
        return m;
    };
    ;
    BackendService.prototype.getFromObj = function (m, x) {
        m.version = x["ASTROVersion"];
        m.built = x["BuildDate"];
        m.db = x["Database"];
        m.dbver = x["FrameworkVersion"];
    };
    BackendService.prototype.getAcrQaGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_ACR-QA/ASTROSvc_ACR-QA";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_ACR-QA/Reports/browse/ACR-QA";
        m.pilotPortal = "http://ASTRO-WEB_ACR-QA/ASTROWeb_ACR-QA";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m).subscribe(function (x) { _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getAcrProdGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_ACR-PROD/ASTROSvc_ACR-PROD";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_ACR-PROD/Reports/browse/ACR-PROD";
        m.pilotPortal = "http://ASTRO-WEB_ACR-PROD/ASTROWeb_ACR-PROD";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m, true).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m, true).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getAcrStageGenModel = function () {
        return null;
    };
    BackendService.prototype.getAcrLiveGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://189.206.77.51/astrosvc";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m, true).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m, true).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getEasInstances = function () {
        var m = new InstanceModel();
        m.dev = this.getEasDevGenModel();
        m.qa = this.getEasQaGenModel();
        m.prod = this.getEasProdGenModel();
        m.stage = this.getEasStageGenModel();
        m.live = this.getEasLiveGenModel();
        return m;
    };
    BackendService.prototype.getEasDevGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_EAS-DEV/ASTROSvc_EAS-DEV";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_EAS-DEV/Reports/Pages/Folder.aspx?ItemPath=%2fEAS-DEV";
        m.pilotPortal = "http://ASTRO-WEB_EAS-DEV/ASTROWeb_EAS-DEV";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getEasQaGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_EAS-QA/ASTROSvc_EAS-QA";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_EAS-QA/Reports/Pages/Folder.aspx?ItemPath=%2fEAS-QA";
        m.pilotPortal = "http://ASTRO-WEB_EAS-QA/ASTROWeb_EAS-QA";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getEasProdGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_EAS-PROD/ASTROSvc_EAS-PROD";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_EAS-PROD/Reports/Pages/Folder.aspx?ItemPath=%2fEAS-PROD";
        m.pilotPortal = "http://ASTRO-WEB_EAS-PROD/ASTROWeb_EAS-PROD";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m, true).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m, true).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getEasStageGenModel = function () {
        return null;
    };
    BackendService.prototype.getEasLiveGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://184.106.41.230/ASTROSvc";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m, true).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m, true).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getGaInstances = function () {
        var m = new InstanceModel();
        m.dev = this.getGaDevGenModel();
        m.qa = this.getGaQaGenModel();
        m.prod = this.getGaProdGenModel();
        m.stage = this.getGaStageGenModel();
        m.live = this.getGaLiveGenModel();
        return m;
    };
    BackendService.prototype.getGaDevGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_GA-DEV/ASTROSvc_GA-DEV";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_GA-DEV/Reports/browse/GA-DEV";
        m.pilotPortal = "http://ASTRO-WEB_GA-DEV/ASTROWeb_GA-DEV";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getGaQaGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_GA-QA/ASTROSvc_GA-QA";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_GA-QA/Reports/browse/GA-QA";
        m.pilotPortal = "http://ASTRO-WEB_GA-QA/ASTROWeb_GA-QA";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getGaProdGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_GA-PROD/ASTROSvc_GA-PROD";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_GA-PROD/Reports/browse/GA-PROD";
        m.pilotPortal = "http://ASTRO-WEB_GA-PROD/ASTROWeb_GA-PROD";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m, true).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m, true).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getGaStageGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "https://stg.globeair.com/ASTROSvc_ga-Stage";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getGaLiveGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "https://api.globeair.com/astrosvc";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m, true).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m, true).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getJsInstances = function () {
        var m = new InstanceModel();
        m.dev = this.getJsDevGenModel();
        m.qa = this.getJsQaGenModel();
        m.prod = this.getJsProdGenModel();
        m.stage = this.getJsStageGenModel();
        m.live = this.getJsLiveGenModel();
        return m;
    };
    BackendService.prototype.getJsDevGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_JS-DEV/ASTROSvc_JS-DEV";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_JS-DEV/Reports/Pages/Folder.aspx?ItemPath=%2fJS-DEV";
        m.pilotPortal = "http://ASTRO-WEB_JS-DEV/ASTROWeb_JS-DEV";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getJsQaGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_JS-QA/ASTROSvc_JS-QA";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_JS-QA/Reports/Pages/Folder.aspx?ItemPath=%2fJS-QA";
        m.pilotPortal = "http://ASTRO-WEB_JS-QA/ASTROWeb_JS-QA";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getJsProdGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_JS-PROD/ASTROSvc_JS-PROD";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_JS-PROD/Reports/Pages/Folder.aspx?ItemPath=%2fJS-PROD";
        m.pilotPortal = "http://ASTRO-WEB_JS-PROD/ASTROWeb_JS-PROD";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m, true).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m, true).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getJsStageGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://206.193.214.18:25809/ASTROSvc_Stage";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getJsLiveGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "https://astrosvc.jetsuite.com/astrosvc";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m, true).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m, true).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getKlInstances = function () {
        var m = new InstanceModel();
        m.dev = this.getKlDevGenModel();
        m.qa = this.getKlQaGenModel();
        m.prod = this.getKlProdGenModel();
        m.stage = this.getKlStageGenModel();
        m.live = this.getKlLiveGenModel();
        return m;
    };
    BackendService.prototype.getKlDevGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_KL-DEV/ASTROSvc_KL-DEV";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_KL-DEV/Reports/Pages/Folder.aspx?ItemPath=%2fKL-DEV";
        m.pilotPortal = "http://ASTRO-WEB_KL-DEV/ASTROWeb_KL-DEV";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getKlQaGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_KL-QA/ASTROSvc_KL-QA";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_KL-QA/Reports/Pages/Folder.aspx?ItemPath=%2fKL-QA";
        m.pilotPortal = "http://ASTRO-WEB_KL-QA/ASTROWeb_KL-QA";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getKlProdGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_KL-PROD/ASTROSvc_KL-PROD";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_KL-PROD/Reports/Pages/Folder.aspx?ItemPath=%2fKL-PROD";
        m.pilotPortal = "http://ASTRO-WEB_KL-PROD/ASTROWeb_KL-PROD";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getKlStageGenModel = function () {
        return null;
    };
    BackendService.prototype.getKlLiveGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "https://pilot.kalittaair.com/astrosvc";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getVersion(m).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getPsInstances = function () {
        var m = new InstanceModel();
        m.dev = this.getPsDevGenModel();
        m.qa = this.getPsQaGenModel();
        m.prod = this.getPsProdGenModel();
        m.stage = this.getPsStageGenModel();
        m.live = this.getPsLiveGenModel();
        return m;
    };
    BackendService.prototype.getPsDevGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_PS-DEV/ASTROSvc_PS-DEV";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_PS-DEV/Reports/browse/PS-DEV";
        m.pilotPortal = "http://ASTRO-WEB_PS-DEV/ASTROWeb_PS-DEV";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m, true).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getPsQaGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_PS-QA/ASTROSvc_PS-QA";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_PS-QA/Reports/browse/PS-QA";
        m.pilotPortal = "http://ASTRO-WEB_PS-QA/ASTROWeb_PS-QA";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getPsProdGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_PS-PROD/ASTROSvc_PS-PROD";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_PS-PROD/Reports/browse/PS-PROD";
        m.pilotPortal = "http://ASTRO-WEB_PS-PROD/ASTROWeb_PS-PROD";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        //this.getSolverVersion(m).subscribe(x => m.solverver = x.toString());
        this.getVersion(m, true).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getPsStageGenModel = function () {
        return null;
    };
    BackendService.prototype.getPsLiveGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "https://log.planesense.com/astrosvc";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m, true).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m, true).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getTwInstances = function () {
        var m = new InstanceModel();
        m.dev = this.getTwDevGenModel();
        m.qa = this.getTwQaGenModel();
        m.prod = this.getTwProdGenModel();
        m.stage = this.getTwStageGenModel();
        m.live = this.getTwLiveGenModel();
        return m;
    };
    BackendService.prototype.getTwDevGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_TW-DEV/ASTROSvc_TW-DEV";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_TW-DEV/Reports/browse/TW-DEV";
        m.pilotPortal = "http://ASTRO-WEB_TW-DEV/ASTROWeb_TW-DEV";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getTwQaGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_TW-QA/ASTROSvc_TW-QA";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_TW-QA/Reports/browse/TW-QA";
        m.pilotPortal = "http://ASTRO-WEB_TW-QA/ASTROWeb_TW-QA";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getTwProdGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "http://ASTRO-WEB_TW-PROD/ASTROSvc_TW-PROD";
        m.opsmgr = "http://boldiq_test/ClickOnceSSO/?userName=sa@boldiq.com";
        m.reports = "http://ASTRO-RPT_TW-PROD/Reports/browse/TW-PROD";
        m.pilotPortal = "http://ASTRO-WEB_TW-PROD/ASTROWeb_TW-PROD";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService.prototype.getTwStageGenModel = function () {
        return null;
    };
    BackendService.prototype.getTwLiveGenModel = function () {
        var _this = this;
        var m = new GenModel();
        m.baseurl = "https://astroapi.flytradewind.com";
        m.requestSolver = true;
        m.site = m.baseurl + '?' + m.apiKey;
        this.getSolverVersion(m).subscribe(function (x) { return m.solverver = x.toString(); });
        this.getVersion(m).subscribe(function (x) { return _this.getFromObj(m, x); });
        return m;
    };
    BackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BackendService);
    return BackendService;
}());

var InstanceModel = /** @class */ (function () {
    function InstanceModel() {
    }
    return InstanceModel;
}());

var GenModel = /** @class */ (function () {
    function GenModel() {
        this.apiKey = "158A50E3-77C2-4BF8-9BF5-2E3EDC18FA27";
    }
    return GenModel;
}());



/***/ }),

/***/ "./src/app/main-table/main-table.component.css":
/*!*****************************************************!*\
  !*** ./src/app/main-table/main-table.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tdGFibGUvbWFpbi10YWJsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main-table/main-table.component.html":
/*!******************************************************!*\
  !*** ./src/app/main-table/main-table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" multiTemplateDataRows>\n\n  <!--- Note that these columns can be defined in any order. The actual rendered columns are set as a property on the row definition\" -->\n\n\n  <ng-container matColumnDef=\"env\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element\">\n    </td>\n  </ng-container>\n  <ng-container matColumnDef=\"details\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element\">\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"dev\">\n    <th mat-header-cell *matHeaderCellDef> DEV </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <mat-card>\n        <mat-card-content>\n          <div>{{element.dev.version}}</div>\n          <div>{{element.dev.built}}</div>\n          <div>{{element.dev.db}}</div>\n          <div>{{element.dev.dbver}}</div>\n          <div>{{element.dev.solverver}}</div>\n        </mat-card-content>\n        <mat-card-actions>\n            <a mat-raised-button (click)=\"openWindow(element.dev.site)\">Site</a>\n            <a mat-raised-button (click)=\"openWindow(element.dev.opsmgr)\">OpsMgr</a>\n            <a mat-raised-button (click)=\"openWindow(element.dev.reports)\">Reports</a>\n            <a mat-raised-button (click)=\"openWindow(element.dev.pilotPortal)\">Pilot Portal</a>\n          </mat-card-actions>\n      </mat-card>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"qa\">\n    <th mat-header-cell *matHeaderCellDef> QA </th>\n    <td mat-cell *matCellDef=\"let element\">\n        <mat-card>\n          <mat-card-content>\n            <div>{{element.qa.version}}</div>\n            <div>{{element.qa.built}}</div>\n            <div>{{element.qa.db}}</div>\n            <div>{{element.qa.dbver}}</div>\n            <div>{{element.qa.solverver}}</div>\n          </mat-card-content>\n          <mat-card-actions>\n              <a mat-raised-button (click)=\"openWindow(element.qa.site)\">Site</a>\n              <a mat-raised-button (click)=\"openWindow(element.qa.opsmgr)\">OpsMgr</a>\n              <a mat-raised-button (click)=\"openWindow(element.qa.reports)\">Reports</a>\n              <a mat-raised-button (click)=\"openWindow(element.qa.pilotPortal)\">Pilot Portal</a>\n            </mat-card-actions>\n        </mat-card>\n      </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"prod\">\n    <th mat-header-cell *matHeaderCellDef> PROD </th>\n    <td mat-cell *matCellDef=\"let element\">\n        <mat-card>\n          <mat-card-content>\n            <div>{{element.prod.version}}</div>\n            <div>{{element.prod.built}}</div>\n            <div>{{element.prod.db}}</div>\n            <div>{{element.prod.dbver}}</div>\n            <div>{{element.prod.solverver}}</div>\n          </mat-card-content>\n          <mat-card-actions>\n              <a mat-raised-button (click)=\"openWindow(element.prod.site)\">Site</a>\n              <a mat-raised-button (click)=\"openWindow(element.prod.opsmgr)\">OpsMgr</a>\n              <a mat-raised-button (click)=\"openWindow(element.prod.reports)\">Reports</a>\n              <a mat-raised-button (click)=\"openWindow(element.prod.pilotPortal)\">Pilot Portal</a>\n            </mat-card-actions>\n        </mat-card>\n      </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"stage\">\n    <th mat-header-cell *matHeaderCellDef> STAGE </th>\n    <td mat-cell *matCellDef=\"let element\">\n        <mat-card *ngIf=\"element.stage\">\n          <mat-card-content>\n            <div>{{element.stage.version}}</div>\n            <div>{{element.stage.built}}</div>\n            <div>{{element.stage.db}}</div>\n            <div>{{element.stage.dbver}}</div>\n            <div>{{element.stage.solverver}}</div>\n          </mat-card-content>\n          <mat-card-actions>\n              <a mat-raised-button (click)=\"openWindow(element.stage.site)\">Site</a>\n              <a mat-raised-button (click)=\"openWindow(element.stage.opsmgr)\">OpsMgr</a>\n              <a mat-raised-button (click)=\"openWindow(element.stage.reports)\">Reports</a>\n              <a mat-raised-button (click)=\"openWindow(element.stage.pilotPortal)\">Pilot Portal</a>\n            </mat-card-actions>\n        </mat-card>\n      </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"live\">\n    <th mat-header-cell *matHeaderCellDef> LIVE(Production) </th>\n    <td mat-cell *matCellDef=\"let element\">\n        <mat-card>\n          <mat-card-content>\n            <div>{{element.live.version}}</div>\n            <div>{{element.live.built}}</div>\n            <div>{{element.live.db}}</div>\n            <div>{{element.live.dbver}}</div>\n            <div>{{element.live.solverver}}</div>\n          </mat-card-content>\n          <mat-card-actions>\n              <a mat-raised-button (click)=\"openWindow(element.live.site)\">Site</a>\n              <a mat-raised-button (click)=\"openWindow(element.live.opsmgr)\">OpsMgr</a>\n              <a mat-raised-button (click)=\"openWindow(element.live.reports)\">Reports</a>\n              <a mat-raised-button (click)=\"openWindow(element.live.pilotPortal)\">Pilot Portal</a>\n            </mat-card-actions>\n        </mat-card>\n      </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n</mat-table>"

/***/ }),

/***/ "./src/app/main-table/main-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/main-table/main-table.component.ts ***!
  \****************************************************/
/*! exports provided: MainTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTableComponent", function() { return MainTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backend.service */ "./src/app/backend.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MainTableComponent = /** @class */ (function () {
    function MainTableComponent(service) {
        this.service = service;
        this.displayedColumns = ['env', 'details', 'dev', 'qa', 'prod', 'stage', 'live'];
        this.displayedRows = ['acr', 'eas', 'ga', 'js', 'kl', 'ps', 'tw'];
    }
    MainTableComponent.prototype.ngOnInit = function () {
        var m = this.service.getAllInstances();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](m);
    };
    MainTableComponent.prototype.openWindow = function (url) {
        window.open(url, "_blank");
    };
    MainTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-table',
            template: __webpack_require__(/*! ./main-table.component.html */ "./src/app/main-table/main-table.component.html"),
            styles: [__webpack_require__(/*! ./main-table.component.css */ "./src/app/main-table/main-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]])
    ], MainTableComponent);
    return MainTableComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/test-table/test-table.component.css":
/*!*****************************************************!*\
  !*** ./src/app/test-table/test-table.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtdGFibGUvdGVzdC10YWJsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test-table/test-table.component.html":
/*!******************************************************!*\
  !*** ./src/app/test-table/test-table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test-table works!\n</p>\n"

/***/ }),

/***/ "./src/app/test-table/test-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/test-table/test-table.component.ts ***!
  \****************************************************/
/*! exports provided: TestTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestTableComponent", function() { return TestTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestTableComponent = /** @class */ (function () {
    function TestTableComponent() {
    }
    TestTableComponent.prototype.ngOnInit = function () {
    };
    TestTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-table',
            template: __webpack_require__(/*! ./test-table.component.html */ "./src/app/test-table/test-table.component.html"),
            styles: [__webpack_require__(/*! ./test-table.component.css */ "./src/app/test-table/test-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestTableComponent);
    return TestTableComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Git\astro-discovery\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map