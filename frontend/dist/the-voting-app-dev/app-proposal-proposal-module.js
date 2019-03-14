(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-proposal-proposal-module"],{

/***/ "./src/app/proposal/create-proposal/create-proposal.component.css":
/*!************************************************************************!*\
  !*** ./src/app/proposal/create-proposal/create-proposal.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3Bvc2FsL2NyZWF0ZS1wcm9wb3NhbC9jcmVhdGUtcHJvcG9zYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/proposal/create-proposal/create-proposal.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/proposal/create-proposal/create-proposal.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <h1>Create a Proposal</h1>\n  <div class=\"form-group\">\n    <label for=\"proposalVoterGroup\">Select Voter Group</label>\n    <select class=\"form-control\" id=\"proposalVoterGroup\">\n      <option>Shareholders</option>\n      <option>Residents</option>\n      <option>Board of Directors</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"proposalName\">Name</label>\n    <input type=\"text\"\n           name=\"name\"\n           class=\"form-control\"\n           id=\"proposalName\"\n           aria-describedby=\"nameHelp\"\n           placeholder=\"Enter name of the proposal\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"proposalDescription\">Description</label>\n    <textarea class=\"form-control\"\n              name=\"description\"\n              id=\"proposalDescription\"\n              placeholder=\"Describe your proposal\"\n              rows=\"3\">\n    </textarea>\n  </div>\n  <div class=\"custom-file mb-3\">\n    <input type=\"file\"\n           class=\"custom-file-input\"\n           id=\"proposalAttachment\">\n    <label class=\"custom-file-label\"\n           for=\"proposalAttachment\">\n      Choose file...\n    </label>\n  </div>\n  <button type=\"button\"\n          class=\"btn btn-primary\">\n    Create Proposal\n  </button>\n</form>\n"

/***/ }),

/***/ "./src/app/proposal/create-proposal/create-proposal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/proposal/create-proposal/create-proposal.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateProposalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProposalComponent", function() { return CreateProposalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreateProposalComponent = /** @class */ (function () {
    function CreateProposalComponent() {
    }
    CreateProposalComponent.prototype.ngOnInit = function () {
    };
    CreateProposalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-proposal',
            template: __webpack_require__(/*! ./create-proposal.component.html */ "./src/app/proposal/create-proposal/create-proposal.component.html"),
            styles: [__webpack_require__(/*! ./create-proposal.component.css */ "./src/app/proposal/create-proposal/create-proposal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreateProposalComponent);
    return CreateProposalComponent;
}());



/***/ }),

/***/ "./src/app/proposal/proposal-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/proposal/proposal-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProposalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalRoutingModule", function() { return ProposalRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _proposal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proposal.component */ "./src/app/proposal/proposal.component.ts");
/* harmony import */ var _create_proposal_create_proposal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-proposal/create-proposal.component */ "./src/app/proposal/create-proposal/create-proposal.component.ts");





var routes = [
    { path: '', component: _proposal_component__WEBPACK_IMPORTED_MODULE_3__["ProposalComponent"] },
    { path: 'create', component: _create_proposal_create_proposal_component__WEBPACK_IMPORTED_MODULE_4__["CreateProposalComponent"] },
    { path: 'id', component: _proposal_component__WEBPACK_IMPORTED_MODULE_3__["ProposalComponent"] },
];
var ProposalRoutingModule = /** @class */ (function () {
    function ProposalRoutingModule() {
    }
    ProposalRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProposalRoutingModule);
    return ProposalRoutingModule;
}());



/***/ }),

/***/ "./src/app/proposal/proposal.component.css":
/*!*************************************************!*\
  !*** ./src/app/proposal/proposal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3Bvc2FsL3Byb3Bvc2FsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/proposal/proposal.component.html":
/*!**************************************************!*\
  !*** ./src/app/proposal/proposal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Increase Total Number of Shares</h1>\n\n<p>This proposal will increase the total number of shares at the Quarry from 800 to 830.\nWe have decided to do this because we purchased another 10 acres valued at $30,000, and in order to pay for it would like to increase the total number of shares by the equivalent value.\n</p>\n\n<div class=\"row\">\n  <div class=\"col-sm-6 mb-2\">\n    <button type=\"button\"\n            class=\"btn btn-lg btn-success\">\n      Approve\n    </button>\n  </div>\n  <div class=\"col-sm-6\">\n    <button type=\"button\"\n            class=\"btn btn-lg btn-danger\">\n      Decline\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/proposal/proposal.component.ts":
/*!************************************************!*\
  !*** ./src/app/proposal/proposal.component.ts ***!
  \************************************************/
/*! exports provided: ProposalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalComponent", function() { return ProposalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProposalComponent = /** @class */ (function () {
    function ProposalComponent() {
    }
    ProposalComponent.prototype.ngOnInit = function () {
    };
    ProposalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proposal',
            template: __webpack_require__(/*! ./proposal.component.html */ "./src/app/proposal/proposal.component.html"),
            styles: [__webpack_require__(/*! ./proposal.component.css */ "./src/app/proposal/proposal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProposalComponent);
    return ProposalComponent;
}());



/***/ }),

/***/ "./src/app/proposal/proposal.module.ts":
/*!*********************************************!*\
  !*** ./src/app/proposal/proposal.module.ts ***!
  \*********************************************/
/*! exports provided: ProposalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalModule", function() { return ProposalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _proposal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proposal.component */ "./src/app/proposal/proposal.component.ts");
/* harmony import */ var _proposal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proposal-routing.module */ "./src/app/proposal/proposal-routing.module.ts");
/* harmony import */ var _create_proposal_create_proposal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-proposal/create-proposal.component */ "./src/app/proposal/create-proposal/create-proposal.component.ts");







var ProposalModule = /** @class */ (function () {
    function ProposalModule() {
    }
    ProposalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_proposal_component__WEBPACK_IMPORTED_MODULE_4__["ProposalComponent"], _create_proposal_create_proposal_component__WEBPACK_IMPORTED_MODULE_6__["CreateProposalComponent"]],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _proposal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProposalRoutingModule"]
            ]
        })
    ], ProposalModule);
    return ProposalModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-proposal-proposal-module.js.map