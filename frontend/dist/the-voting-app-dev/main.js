(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./../app/home/home.module": [
		"./src/app/home/home.module.ts",
		"app-home-home-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _signup_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/confirmation/confirmation.component */ "./src/app/signup/confirmation/confirmation.component.ts");
/* harmony import */ var _voter_group_voter_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./voter-group/voter-group.component */ "./src/app/voter-group/voter-group.component.ts");
/* harmony import */ var _voter_group_create_voter_group_create_voter_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./voter-group/create-voter-group/create-voter-group.component */ "./src/app/voter-group/create-voter-group/create-voter-group.component.ts");
/* harmony import */ var _proposal_proposal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./proposal/proposal.component */ "./src/app/proposal/proposal.component.ts");
/* harmony import */ var _proposal_create_proposal_create_proposal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./proposal/create-proposal/create-proposal.component */ "./src/app/proposal/create-proposal/create-proposal.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");












var routes = [
    { path: '', loadChildren: './../app/home/home.module#HomeModule' },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'signup/confirmation', component: _signup_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'voter-group', component: _voter_group_voter_group_component__WEBPACK_IMPORTED_MODULE_6__["VoterGroupComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'voter-group/create', component: _voter_group_create_voter_group_create_voter_group_component__WEBPACK_IMPORTED_MODULE_7__["CreateVoterGroupComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'proposal', component: _proposal_proposal_component__WEBPACK_IMPORTED_MODULE_8__["ProposalComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'proposal/create', component: _proposal_create_proposal_create_proposal_component__WEBPACK_IMPORTED_MODULE_9__["CreateProposalComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'proposal/:proposalId/:voterGroupId', component: _proposal_proposal_component__WEBPACK_IMPORTED_MODULE_8__["ProposalComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
];
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

module.exports = ".off-white-background {\n  background-color: #fdfdfd;\n}\n\n.vh-100 {\n  height: 100vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vZmYtd2hpdGUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XG59XG5cbi52aC0xMDAge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"off-white-background vh-100\">\n  <app-layout>\n    <router-outlet></router-outlet>\n  </app-layout>\n</div>\n"

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib/index.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_3__);




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'the-voting-app-dev';
        aws_amplify__WEBPACK_IMPORTED_MODULE_3___default.a.configure({
            Auth: {
                mandatorySignIn: true,
                region: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].cognito.REGION,
                userPoolId: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].cognito.USER_POOL_ID,
                identityPoolId: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].cognito.IDENTITY_POOL_ID,
                userPoolWebClientId: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].cognito.APP_CLIENT_ID
            },
            // Storage: {
            //   region: config.s3.REGION,
            //   bucket: config.s3.BUCKET,
            //   identityPoolId: config.cognito.IDENTITY_POOL_ID
            // },
            API: {
                endpoints: [
                    {
                        name: "createVoterGroup",
                        endpoint: 'https://id5sul3r1e.execute-api.us-east-1.amazonaws.com/dev',
                        region: 'us-east-1'
                    },
                    {
                        name: "getVoterGroups",
                        endpoint: 'https://id5sul3r1e.execute-api.us-east-1.amazonaws.com/dev',
                        region: 'us-east-1'
                    },
                    {
                        name: "addVoterToGroup",
                        endpoint: 'https://id5sul3r1e.execute-api.us-east-1.amazonaws.com/dev',
                        region: 'us-east-1'
                    },
                    {
                        name: "updateVoterGroup",
                        endpoint: 'https://id5sul3r1e.execute-api.us-east-1.amazonaws.com/dev',
                        region: 'us-east-1'
                    },
                    {
                        name: "getUser",
                        endpoint: 'https://ril7jqatdc.execute-api.us-east-1.amazonaws.com/dev',
                        region: 'us-east-1'
                    },
                    {
                        name: "createProposal",
                        endpoint: 'https://tjntc3twq1.execute-api.us-east-1.amazonaws.com/dev',
                        region: 'us-east-1'
                    },
                    {
                        name: "addProposalToGroup",
                        endpoint: 'https://tjntc3twq1.execute-api.us-east-1.amazonaws.com/dev',
                        region: 'us-east-1'
                    },
                    {
                        name: "getProposals",
                        endpoint: 'https://tjntc3twq1.execute-api.us-east-1.amazonaws.com/dev',
                        region: 'us-east-1'
                    },
                    {
                        name: "getProposal",
                        endpoint: 'https://tjntc3twq1.execute-api.us-east-1.amazonaws.com/dev',
                        region: 'us-east-1'
                    },
                    {
                        name: "castVote",
                        endpoint: 'https://hpwedhgb06.execute-api.us-east-1.amazonaws.com/dev',
                        region: 'us-east-1'
                    },
                    {
                        name: "getVote",
                        endpoint: 'https://hpwedhgb06.execute-api.us-east-1.amazonaws.com/dev',
                        region: 'us-east-1'
                    }
                ]
            }
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_proposal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/proposal.service */ "./src/app/services/proposal.service.ts");
/* harmony import */ var _services_voterGroup_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/voterGroup.service */ "./src/app/services/voterGroup.service.ts");
/* harmony import */ var _services_vote_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/vote.service */ "./src/app/services/vote.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _voter_group_voter_group_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./voter-group/voter-group.component */ "./src/app/voter-group/voter-group.component.ts");
/* harmony import */ var _proposal_create_proposal_create_proposal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./proposal/create-proposal/create-proposal.component */ "./src/app/proposal/create-proposal/create-proposal.component.ts");
/* harmony import */ var _proposal_proposal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./proposal/proposal.component */ "./src/app/proposal/proposal.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _signup_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./signup/confirmation/confirmation.component */ "./src/app/signup/confirmation/confirmation.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _voter_group_create_voter_group_create_voter_group_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./voter-group/create-voter-group/create-voter-group.component */ "./src/app/voter-group/create-voter-group/create-voter-group.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/loading/loading.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"],
                _signup_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmationComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                _voter_group_voter_group_component__WEBPACK_IMPORTED_MODULE_14__["VoterGroupComponent"],
                _voter_group_create_voter_group_create_voter_group_component__WEBPACK_IMPORTED_MODULE_20__["CreateVoterGroupComponent"],
                _proposal_proposal_component__WEBPACK_IMPORTED_MODULE_16__["ProposalComponent"],
                _proposal_create_proposal_create_proposal_component__WEBPACK_IMPORTED_MODULE_15__["CreateProposalComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_21__["LoadingComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_6__["UiModule"],
            ],
            exports: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                _services_proposal_service__WEBPACK_IMPORTED_MODULE_9__["ProposalService"],
                _services_voterGroup_service__WEBPACK_IMPORTED_MODULE_10__["VoterGroupService"],
                _services_vote_service__WEBPACK_IMPORTED_MODULE_11__["VoteService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding-top-10vh {\n  padding-top: 10vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGRpbmctdG9wLTEwdmgge1xuICBwYWRkaW5nLXRvcDogMTB2aDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"busy\"></app-loading>\n\n<div *ngIf=\"!busy && voterGroups.length == 0\" class=\"padding-top-10vh\">\n  <div class=\"row align-items-center padding-top-20vh\">\n    <div class=\"col-12 text-center\">\n      <h3>You need to create a voter group</h3>\n      <div>\n        <button class=\"btn btn-info btn-lg mr-2\" type=\"button\" (click)=\"createVoterGroup()\">Create Voter Group</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"!busy && proposals.length == 0\">\n  <div class=\"row align-items-center padding-top-20vh\">\n    <div class=\"col-12 text-center\">\n      <h3>Create a proposal</h3>\n      <div>\n        <button class=\"btn btn-success btn-lg\" type=\"button\" (click)=\"createProposal()\">Create Proposal</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div *ngIf=\"!busy\">\n  <div *ngIf=\"proposals?.length > 0\">\n    <h3>Your Proposals</h3>\n    <div *ngFor=\"let proposal of proposals\" class=\"card shadow mb-5 bg-white rounded\">\n      <h4 class=\"card-header\">{{proposal.title}}</h4>\n      <div class=\"card-body\">\n        <!--<a class=\"btn btn-warning\" [routerLink]=\"['/proposal/' + proposal.pk]\">View Proposal</a>-->\n        <button type=\"button\"\n                class=\"btn btn-warning\"\n                (click)=\"viewProposal(proposal)\">\n          View Proposal\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"voterGroups?.length > 0\">\n    <h2>Your Voting Groups</h2>\n    <div *ngFor=\"let voterGroup of voterGroups\" class=\"card shadow mb-5 bg-white rounded\">\n      <h4 class=\"card-header\">{{voterGroup.title}}</h4>\n      <div class=\"card-body\">\n        <h6 class=\"card-title\">\n          {{voterGroup.description}}\n        </h6>\n        <button type=\"button\"\n                class=\"btn btn-warning\"\n                (click)=\"viewVoterGroup(voterGroup)\">\n          View Voter Group\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_voterGroup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/voterGroup.service */ "./src/app/services/voterGroup.service.ts");
/* harmony import */ var _services_proposal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/proposal.service */ "./src/app/services/proposal.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(voterGroupService, authService, proposalService, router) {
        this.voterGroupService = voterGroupService;
        this.authService = authService;
        this.proposalService = proposalService;
        this.router = router;
        this.voterGroups = [];
        this.proposals = [];
        this.userInfo = {};
        this.busy = true;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.userInfo = this.authService.getUserInfo();
        this.getVoterGroups({ email: this.userInfo.email });
    };
    DashboardComponent.prototype.getVoterGroups = function (params) {
        var _this = this;
        this.voterGroupService.getVoterGroups(params)
            .subscribe(function (result) {
            if (result.length > 0) {
                _this.voterGroups = result;
                _this.getProposals();
            }
            else {
                _this.busy = false;
            }
        }, function (error) {
            // todo handle error
            _this.busy = false;
            console.log(error);
        });
    };
    DashboardComponent.prototype.getProposals = function () {
        var _this = this;
        var voterGroupIds = [];
        for (var _i = 0, _a = this.voterGroups; _i < _a.length; _i++) {
            var group = _a[_i];
            voterGroupIds.push(group.pk);
        }
        var params = {
            voterGroupIds: voterGroupIds
        };
        this.proposalService.getProposals(params)
            .subscribe(function (result) {
            if (result.length > 0) {
                _this.proposals = result;
            }
            _this.busy = false;
        }, function (error) {
            // todo handle error
            console.log(error);
            _this.busy = false;
        });
    };
    DashboardComponent.prototype.viewVoterGroup = function (voterGroup) {
        this.voterGroupService.selectedVoterGroup = voterGroup;
        this.router.navigate(['/voter-group']);
    };
    DashboardComponent.prototype.viewProposal = function (proposal) {
        this.proposalService.selectedProposal = proposal;
        this.router.navigate(['/proposal/' + proposal.pk + '/' + proposal.voterGroupId]);
    };
    DashboardComponent.prototype.createVoterGroup = function () {
        this.router.navigate(['/voter-group/create']);
    };
    DashboardComponent.prototype.createProposal = function () {
        this.router.navigate(['/proposal/create']);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_voterGroup_service__WEBPACK_IMPORTED_MODULE_2__["VoterGroupService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_proposal_service__WEBPACK_IMPORTED_MODULE_3__["ProposalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.isAuthenticated()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loggedIn) {
            if (!loggedIn) {
                _this.router.navigate(['/']);
            }
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/loading/loading.component.css":
/*!***********************************************!*\
  !*** ./src/app/loading/loading.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #343a40;\n  z-index: 100;\n  opacity: 0.85;\n}\n\n.padding-top-20vh {\n  padding-top: 20vh;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xuICB6LWluZGV4OiAxMDA7XG4gIG9wYWNpdHk6IDAuODU7XG59XG5cbi5wYWRkaW5nLXRvcC0yMHZoIHtcbiAgcGFkZGluZy10b3A6IDIwdmg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/loading/loading.component.html":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <div class=\"row align-items-center padding-top-20vh\">\n    <div class=\"col-12 text-center\">\n      <h3 class=\"text-white\">Loading..</h3>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/loading/loading.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"busy\"></app-loading>\n\n<div *ngIf=\"!busy\">\n  <form>\n    <h3>Login</h3>\n    <div class=\"form-group\">\n      <input type=\"email\"\n             name=\"email\"\n             class=\"form-control\"\n             id=\"loginEmail\"\n             [(ngModel)]=\"user.email\"\n             aria-describedby=\"emailHelp\"\n             placeholder=\"Enter email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"loginPassword\">Password</label>\n      <input type=\"password\"\n             name=\"password\"\n             class=\"form-control\"\n             id=\"loginPassword\"\n             [(ngModel)]=\"user.password\"\n             placeholder=\"Password\">\n    </div>\n    <button type=\"button\"\n            class=\"btn btn-primary\"\n            (click)=\"login(user)\">\n      Submit\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utilities.service */ "./src/app/services/utilities.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = {};
        this.busy = false;
        this.isEmpty = _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"].isEmpty;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (user) {
        var _this = this;
        this.busy = true;
        this.authService.signIn(user.email, user.password)
            .subscribe(function (result) {
            if (!_this.isEmpty(result.userDataKey)) {
                _this.getUserInfo();
            }
            else {
                _this.busy = false;
            }
        }, function (error) {
            // todo handle error
            console.log(error);
            _this.busy = false;
        });
    };
    LoginComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.authService.getCognitoUserInfo()
            .subscribe(function (result) {
            if (result) {
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.busy = false;
            }
        }, function (error) {
            // todo handle error
            console.log(error);
            _this.busy = false;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

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

module.exports = "<form name=\"createProposal\">\n  <h3>Create a Proposal</h3>\n  <div class=\"form-group\">\n    <label for=\"voterGroup\">Select Voter Group</label>\n    <select class=\"form-control\" id=\"voterGroup\" name=\"voterGroup\" [(ngModel)]=\"proposal.voterGroupId\">\n      <option *ngFor=\"let voterGroup of voterGroups\"\n              [value]=\"voterGroup.pk\">\n        {{voterGroup.title}}\n      </option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\"\n           name=\"title\"\n           class=\"form-control\"\n           id=\"proposalTitle\"\n           aria-describedby=\"titleHelp\"\n           [(ngModel)]=\"proposal.title\"\n           placeholder=\"Enter title of the proposal\">\n  </div>\n  <div class=\"form-group\">\n    <textarea class=\"form-control\"\n              name=\"description\"\n              id=\"proposalDescription\"\n              [(ngModel)]=\"proposal.description\"\n              placeholder=\"Describe your proposal\"\n              rows=\"3\">\n    </textarea>\n  </div>\n  <button type=\"button\"\n          class=\"btn btn-primary\"\n          (click)=\"createProposal(proposal)\">\n    Create Proposal\n  </button>\n</form>\n"

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
/* harmony import */ var _services_proposal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/proposal.service */ "./src/app/services/proposal.service.ts");
/* harmony import */ var _services_voterGroup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/voterGroup.service */ "./src/app/services/voterGroup.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CreateProposalComponent = /** @class */ (function () {
    function CreateProposalComponent(proposalService, voterGroupService, authService, router) {
        this.proposalService = proposalService;
        this.voterGroupService = voterGroupService;
        this.authService = authService;
        this.router = router;
        this.userInfo = {};
        this.voterGroups = [];
        this.proposal = {};
    }
    CreateProposalComponent.prototype.ngOnInit = function () {
        this.userInfo = this.authService.getUserInfo();
        this.getVoterGroups({ email: this.userInfo.email });
    };
    CreateProposalComponent.prototype.getVoterGroups = function (params) {
        var _this = this;
        this.voterGroupService.getVoterGroups(params)
            .subscribe(function (result) {
            _this.voterGroups = result;
        }, function (error) {
            console.log(error);
        });
    };
    CreateProposalComponent.prototype.createProposal = function (proposal) {
        var _this = this;
        var params = { title: proposal.title, description: proposal.description, voterGroupId: proposal.voterGroupId };
        this.proposalService.createProposal(params)
            .subscribe(function (result) {
            if (result.pk) {
                _this.addProposalToGroup(result.pk);
            }
        }, function (error) {
            console.log(error);
        });
    };
    CreateProposalComponent.prototype.addProposalToGroup = function (proposalId) {
        var _this = this;
        var params = {
            proposalId: proposalId,
            voterGroupId: this.proposal.voterGroupId
        };
        this.proposalService.addProposalToGroup(params)
            .subscribe(function (result) {
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            console.log(error);
        });
    };
    CreateProposalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-proposal',
            template: __webpack_require__(/*! ./create-proposal.component.html */ "./src/app/proposal/create-proposal/create-proposal.component.html"),
            styles: [__webpack_require__(/*! ./create-proposal.component.css */ "./src/app/proposal/create-proposal/create-proposal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_proposal_service__WEBPACK_IMPORTED_MODULE_2__["ProposalService"],
            _services_voterGroup_service__WEBPACK_IMPORTED_MODULE_3__["VoterGroupService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CreateProposalComponent);
    return CreateProposalComponent;
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

module.exports = "<h1>{{proposal.title}}</h1>\n\n<p>{{proposal.description}}</p>\n\n<div *ngIf=\"!vote.sk\" class=\"row\">\n  <div class=\"col-sm-6 mb-2\">\n    <button type=\"button\"\n            class=\"btn btn-lg btn-success\"\n            (click)=\"castVote(true)\">\n      Approve\n    </button>\n  </div>\n  <div class=\"col-sm-6\">\n    <button type=\"button\"\n            class=\"btn btn-lg btn-danger\"\n            (click)=\"castVote(false)\">\n      Decline\n    </button>\n  </div>\n</div>\n"

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
/* harmony import */ var _services_proposal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/proposal.service */ "./src/app/services/proposal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_vote_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/vote.service */ "./src/app/services/vote.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/utilities.service */ "./src/app/services/utilities.service.ts");







var ProposalComponent = /** @class */ (function () {
    function ProposalComponent(proposalService, route, voteService, authService, router) {
        this.proposalService = proposalService;
        this.route = route;
        this.voteService = voteService;
        this.authService = authService;
        this.router = router;
        this.proposal = {};
        this.userInfo = {};
        this.vote = {};
        this.busy = true;
        this.isEmpty = _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"].isEmpty;
    }
    ProposalComponent.prototype.ngOnInit = function () {
        this.userInfo = this.authService.getUserInfo();
        if (this.proposalService.selectedProposal.pk) {
            this.proposal = this.proposalService.selectedProposal;
            this.getVote();
        }
        else {
            this.getProposalParams();
        }
    };
    ProposalComponent.prototype.getProposalParams = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params);
            var proposalParams = {
                proposalId: params.proposalId,
                voterGroupId: params.voterGroupId,
                email: _this.userInfo.email
            };
            _this.getProposal(proposalParams);
        });
    };
    ProposalComponent.prototype.getProposal = function (params) {
        var _this = this;
        this.proposalService.getProposal(params)
            .subscribe(function (result) {
            _this.proposal = result;
            _this.getVote();
        }, function (error) {
            _this.busy = false;
        });
    };
    ProposalComponent.prototype.getVote = function () {
        var _this = this;
        var params = {
            email: this.userInfo.email,
            proposalId: this.proposal.pk
        };
        this.voteService.getVote(params)
            .subscribe(function (result) {
            if (!_this.isEmpty(result.pk)) {
                _this.vote = result;
            }
            _this.busy = false;
        }, function (error) {
            _this.busy = false;
        });
    };
    ProposalComponent.prototype.castVote = function (vote) {
        var _this = this;
        var params = {
            email: this.userInfo.email,
            proposalId: this.proposal.pk,
            voterGroupId: this.proposal.voterGroupId,
            vote: vote
        };
        this.voteService.castVote(params)
            .subscribe(function (result) {
            if (result.sk) {
                _this.vote = result;
                _this.router.navigate(['/dashboard']);
            }
            console.log(result);
        }, function (error) {
            // todo handle error
        });
    };
    ProposalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proposal',
            template: __webpack_require__(/*! ./proposal.component.html */ "./src/app/proposal/proposal.component.html"),
            styles: [__webpack_require__(/*! ./proposal.component.css */ "./src/app/proposal/proposal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_proposal_service__WEBPACK_IMPORTED_MODULE_2__["ProposalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_vote_service__WEBPACK_IMPORTED_MODULE_5__["VoteService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProposalComponent);
    return ProposalComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal-compatibility */ "./node_modules/rxjs/_esm5/internal-compatibility/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib/index.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities.service */ "./src/app/services/utilities.service.ts");









var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.userInfo = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.isEmpty = _utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"].isEmpty;
        this.setLocal = _utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"].setLocal;
        this.getLocal = _utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"].getLocal;
        this.storageSupported = _utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"].storageSupported;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        // initialize user info from local storage
        var userInfo = {};
        try {
            userInfo = JSON.parse(this.getLocal('userInfo'));
        }
        catch (e) {
            console.log(e);
        }
        this.updateUserInfo(userInfo);
    }
    /** signup */
    AuthService.prototype.signUp = function (params) {
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_4__["fromPromise"])(aws_amplify__WEBPACK_IMPORTED_MODULE_6__["Auth"].signUp(params));
    };
    /** confirm code */
    AuthService.prototype.confirmSignUp = function (email, code) {
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_4__["fromPromise"])(aws_amplify__WEBPACK_IMPORTED_MODULE_6__["Auth"].confirmSignUp(email, code))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            // this.getCognitoUserInfo();
        }, function (error) {
            // handle error
            console.log(error);
        }));
    };
    /** signin */
    AuthService.prototype.signIn = function (email, password) {
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_4__["fromPromise"])(aws_amplify__WEBPACK_IMPORTED_MODULE_6__["Auth"].signIn(email, password))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
        }, function (error) {
            // handle error
            console.log(error);
        }));
    };
    // setUserInfo() {
    //   this.getCognitoUserInfo().subscribe(
    //     (result: any) => {
    //       debugger;
    //       if (!this.isEmpty(result.attributes)) {
    //         this.loggedIn.next(true);
    //         let userInfo = result.attributes;
    //         this.setLocal("userInfo", JSON.stringify(userInfo));
    //         this.updateUserInfo(userInfo);
    //       }
    //     }
    //   );
    // }
    AuthService.prototype.getUserInfo = function () {
        return this.userInfo.getValue();
    }; // getUserInfo()
    AuthService.prototype.updateUserInfo = function (userInfo) {
        this.userInfo.next(userInfo);
    }; // updateUserInfo()
    AuthService.prototype.getCognitoUserInfo = function () {
        var _this = this;
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_4__["fromPromise"])(aws_amplify__WEBPACK_IMPORTED_MODULE_6__["Auth"].currentUserInfo())
            .map(function (result) {
            debugger;
            if (!_this.isEmpty(result.attributes)) {
                _this.loggedIn.next(true);
                var userInfo = result.attributes;
                _this.setLocal("userInfo", JSON.stringify(userInfo));
                _this.updateUserInfo(userInfo);
            }
            return true;
        }, function (error) {
            // return and handle error
            console.log(error);
        });
    };
    AuthService.prototype.getUser = function (params) {
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_4__["fromPromise"])(aws_amplify__WEBPACK_IMPORTED_MODULE_6__["API"].post("getUser", "/getUser", { body: params }))
            .map(function (result) {
            return result;
        }, function (error) {
            // return and handle error
            console.log(error);
        });
    };
    /** get authenticat state */
    AuthService.prototype.isAuthenticated = function () {
        var _this = this;
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_4__["fromPromise"])(aws_amplify__WEBPACK_IMPORTED_MODULE_6__["Auth"].currentAuthenticatedUser())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.loggedIn.next(true);
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.loggedIn.next(false);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    };
    /** signout */
    AuthService.prototype.signOut = function () {
        var _this = this;
        Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_4__["fromPromise"])(aws_amplify__WEBPACK_IMPORTED_MODULE_6__["Auth"].signOut())
            .subscribe(function (result) {
            _utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"].clearStorage();
            _this.updateUserInfo({});
            _this.loggedIn.next(false);
            _this.router.navigate(['/login']);
        }, function (error) { return console.log(error); });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/proposal.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/proposal.service.ts ***!
  \**********************************************/
/*! exports provided: ProposalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalService", function() { return ProposalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal-compatibility */ "./node_modules/rxjs/_esm5/internal-compatibility/index.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib/index.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_6__);







var ProposalService = /** @class */ (function () {
    function ProposalService(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        this._selectedProposal = {};
    } // constructor()
    Object.defineProperty(ProposalService.prototype, "selectedProposal", {
        get: function () {
            return this._selectedProposal;
        },
        set: function (value) {
            this._selectedProposal = value;
        },
        enumerable: true,
        configurable: true
    });
    ProposalService.prototype.createProposal = function (params) {
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_5__["fromPromise"])(aws_amplify__WEBPACK_IMPORTED_MODULE_6__["API"].post("createProposal", "/createProposal", { body: params }))
            .map(function (result) {
            return result;
        }, function (error) {
            // return and handle error
            console.log(error);
        });
    };
    ProposalService.prototype.addProposalToGroup = function (params) {
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_5__["fromPromise"])(aws_amplify__WEBPACK_IMPORTED_MODULE_6__["API"].post("addProposalToGroup", "/addProposalToGroup", { body: params }))
            .map(function (result) {
            return result;
        }, function (error) {
            // return and handle error
            console.log(error);
        });
    };
    ProposalService.prototype.getProposals = function (params) {
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_5__["fromPromise"])(aws_amplify__WEBPACK_IMPORTED_MODULE_6__["API"].post("getProposals", "/getProposals", { body: params }))
            .map(function (result) {
            return result;
        }, function (error) {
            // return and handle error
            console.log(error);
        });
    };
    ProposalService.prototype.getProposal = function (params) {
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_5__["fromPromise"])(aws_amplify__WEBPACK_IMPORTED_MODULE_6__["API"].post("getProposal", "/getProposal", { body: params }))
            .map(function (result) {
            return result;
        }, function (error) {
            // return and handle error
            console.log(error);
        });
    };
    ProposalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProposalService);
    return ProposalService;
}());



/***/ }),

/***/ "./src/app/services/utilities.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/utilities.service.ts ***!
  \***********************************************/
/*! exports provided: UtilitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesService", function() { return UtilitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UtilitiesService = /** @class */ (function () {
    function UtilitiesService() {
    }
    UtilitiesService_1 = UtilitiesService;
    UtilitiesService.reallyIsNaN = function (x) {
        return x !== x;
    }; // reallyIsNaN()
    UtilitiesService.isEmpty = function (value) {
        return !(value !== null
            && typeof value !== "undefined"
            && value != ""
            && value != "null"
            && !UtilitiesService_1.reallyIsNaN(value)
            && !(value.constructor === Array && value.length == 0)
            && !(typeof value == "object" && Object.keys(value).length == 0));
    }; // isEmpty()
    UtilitiesService.testFunction = function () {
        return true;
    };
    UtilitiesService.storageSupported = function (storage) {
        try {
            storage.setItem('test', '1');
            storage.removeItem('test');
            return true;
        }
        catch (error) {
            return false;
        }
    }; // storageSupported()
    UtilitiesService.isNotEmpty = function (value) {
        return !this.isEmpty(value);
    };
    /**
     * converts a string of type "yyyy-MM-dd hh:mm:ss" to a timestamp
     * this prevents any changing of date based on timezones
     *
     * @param dateTimeString
     */
    UtilitiesService.timestampFromDate = function (dateTimeString) {
        var date = new Date();
        date.setFullYear(dateTimeString.substring(0, 4), parseInt(dateTimeString.substring(5, 7), 10) - 1, dateTimeString.substring(8, 10));
        date.setHours(dateTimeString.substring(11, 13), dateTimeString.substring(14, 16), dateTimeString.substring(17, 19));
        date.setMilliseconds(0);
        return date.getTime();
    }; // timestampFromDate()
    /**
     * converts a string of type "yyyy-MM-dd hh:mm:ss" to a timestamp
     * this prevents any changing of date based on timezones
     *
     * @param dateTimeString
     */
    UtilitiesService.dateFromString = function (dateTimeString) {
        var date = new Date();
        date.setFullYear(dateTimeString.substring(0, 4), parseInt(dateTimeString.substring(5, 7), 10) - 1, dateTimeString.substring(8, 10));
        date.setHours(dateTimeString.substring(11, 13), dateTimeString.substring(14, 16), dateTimeString.substring(17, 19));
        date.setMilliseconds(0);
        return date;
    }; // dateFromString()
    /**
     * converts a timestamp to a string of type "yyyy-MM-dd hh:mm:ss"
     *
     * @param timestamp
     */
    UtilitiesService.dateFromTimestamp = function (timestamp) {
        var date = new Date(timestamp);
        var month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
        var day = date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate();
        var hours = date.getHours() < 10 ? '0' + date.getHours().toString() : date.getHours();
        var mins = date.getMinutes() < 10 ? '0' + date.getMinutes().toString() : date.getMinutes();
        var sec = date.getSeconds() < 10 ? '0' + date.getSeconds().toString() : date.getSeconds();
        return date.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + mins + ':' + sec;
    }; // dateFromTimestamp()
    /**
     * sets the hours, minutes, and seconds of a date to 0
     * @param date
     */
    UtilitiesService.setDateToMidnight = function (date) {
        if (date instanceof Date) {
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            date.setMilliseconds(0);
        }
        return date;
    }; // setDateToMidnight()
    UtilitiesService.setDateToEndOfDay = function (date) {
        date.setHours(23);
        date.setMinutes(59);
        date.setSeconds(59);
        date.setMilliseconds(0);
        return date;
    }; // setDateToEndOfDay()
    UtilitiesService.getLocal = function (name) {
        if (this.isEmpty(this.storage)) {
            if (this.storageSupported(localStorage)) {
                this.storage = localStorage;
            }
            else if (this.storageSupported(sessionStorage)) {
                this.storage = sessionStorage;
            }
            else {
                return null;
            }
        }
        return this.storage.getItem(name);
    }; // getLocal()
    UtilitiesService.setLocal = function (name, value) {
        // if (this.testFunction()) {
        //   console.log('test')
        // }
        if (this.isEmpty(this.storage)) {
            if (this.storageSupported(localStorage)) {
                this.storage = localStorage;
            }
            else if (this.storageSupported(sessionStorage)) {
                this.storage = sessionStorage;
            }
            else {
                this.storage = this.tempStorage();
            }
        }
        this.storage.setItem(name, value);
    }; // setLocal()
    UtilitiesService.removeLocal = function (name) {
        if (this.isEmpty(this.storage)) {
            if (this.storageSupported(localStorage)) {
                this.storage = localStorage;
            }
            else if (this.storageSupported(sessionStorage)) {
                this.storage = sessionStorage;
            }
            else {
                this.storage = this.tempStorage();
            }
        }
        delete this.storage[name];
    }; // removeLocal()
    UtilitiesService.tempStorage = function () {
        var _this = this;
        var api = { setItem: null, getItem: null, clear: null };
        var store = {};
        api.setItem = function (name, value) {
            store[name] = value;
        };
        api.getItem = function (name) {
            return !_this.isEmpty(store[name]) ? store[name] : null;
        };
        api.clear = function () {
            store = {};
        };
        return api;
    }; // tempStorage()
    UtilitiesService.clearStorage = function () {
        if (this.isEmpty(this.storage)) {
            if (this.storageSupported(localStorage)) {
                this.storage = localStorage;
            }
            else if (this.storageSupported(sessionStorage)) {
                this.storage = sessionStorage;
            }
            else {
                this.storage = this.tempStorage();
            }
        }
        this.storage.clear();
    }; // clearStorage()
    UtilitiesService.randomString = function (length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }; // randomString()
    var UtilitiesService_1;
    UtilitiesService.storage = null;
    UtilitiesService = UtilitiesService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UtilitiesService);
    return UtilitiesService;
}());



/***/ }),

/***/ "./src/app/services/vote.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/vote.service.ts ***!
  \******************************************/
/*! exports provided: VoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteService", function() { return VoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal-compatibility */ "./node_modules/rxjs/_esm5/internal-compatibility/index.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib/index.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_6__);







var VoteService = /** @class */ (function () {
    function VoteService(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
    } // constructor()
    VoteService.prototype.castVote = function (params) {
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_5__["fromPromise"])(aws_amplify__WEBPACK_IMPORTED_MODULE_6__["API"].post("castVote", "/castVote", { body: params }))
            .map(function (result) {
            return result;
        }, function (error) {
            // return and handle error
            console.log(error);
        });
    };
    VoteService.prototype.getVote = function (params) {
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_5__["fromPromise"])(aws_amplify__WEBPACK_IMPORTED_MODULE_6__["API"].post("getVote", "/getVote", { body: params }))
            .map(function (result) {
            return result;
        }, function (error) {
            // return and handle error
            console.log(error);
        });
    };
    VoteService.prototype.getVotes = function (params) {
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_5__["fromPromise"])(aws_amplify__WEBPACK_IMPORTED_MODULE_6__["API"].post("getVotes", "/getVotes", { body: params }))
            .map(function (result) {
            return result;
        }, function (error) {
            // return and handle error
            console.log(error);
        });
    };
    VoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], VoteService);
    return VoteService;
}());



/***/ }),

/***/ "./src/app/services/voterGroup.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/voterGroup.service.ts ***!
  \************************************************/
/*! exports provided: VoterGroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoterGroupService", function() { return VoterGroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib/index.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal-compatibility */ "./node_modules/rxjs/_esm5/internal-compatibility/index.js");









var VoterGroupService = /** @class */ (function () {
    function VoterGroupService(http) {
        this.http = http;
        this.API_URL = 'https://3ybk8299p4.execute-api.us-east-1.amazonaws.com/dev';
        this._selectedVoterGroup = {};
        // Amplify.configure({
        //   API: {
        //     endpoints: [
        //       {
        //         name: "createVoterGroup",
        //         endpoint: 'https://3ybk8299p4.execute-api.us-east-1.amazonaws.com/dev',
        //         region: 'us-east-1'
        //       },
        //     ]
        //   }
        // });
    }
    Object.defineProperty(VoterGroupService.prototype, "selectedVoterGroup", {
        get: function () {
            return this._selectedVoterGroup;
        },
        set: function (value) {
            this._selectedVoterGroup = value;
        },
        enumerable: true,
        configurable: true
    });
    // createVoterGroup(name, description) {
    //   let headers = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
    //   // let options = new RequestOptions({ headers: headers});
    //   let DATA =  Object.assign(name, description);
    //   let body = JSON.stringify(DATA);
    //   return this.http.post(this.API_URL + '/createVoterGroup', body, headers).map((res: HttpResponse) => res.json());
    // }
    VoterGroupService.prototype.createVoterGroup = function (params) {
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_8__["fromPromise"])(aws_amplify__WEBPACK_IMPORTED_MODULE_7__["API"].post("createVoterGroup", "/createVoterGroup", { body: params }))
            .map(function (result) {
            return result;
        }, function (error) {
            // return and handle error
            console.log(error);
        });
    };
    VoterGroupService.prototype.addVoterToGroup = function (params) {
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_8__["fromPromise"])(aws_amplify__WEBPACK_IMPORTED_MODULE_7__["API"].post("addVoterToGroup", "/addVoterToGroup", { body: params }))
            .map(function (result) {
            return result;
        }, function (error) {
            // return and handle error
            console.log(error);
        });
    };
    VoterGroupService.prototype.updateVoterGroup = function (params) {
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_8__["fromPromise"])(aws_amplify__WEBPACK_IMPORTED_MODULE_7__["API"].post("updateVoterGroup", "/updateVoterGroup", { body: params }))
            .map(function (result) {
            return result;
        }, function (error) {
            // return and handle error
            console.log(error);
        });
    };
    VoterGroupService.prototype.getVoterGroups = function (params) {
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_8__["fromPromise"])(aws_amplify__WEBPACK_IMPORTED_MODULE_7__["API"].post("getVoterGroups", "/getVoterGroups", { body: params }))
            .map(function (result) {
            return result;
        }, function (error) {
            // return and handle error
            console.log(error);
        });
    };
    VoterGroupService.prototype.createUserVoterGroup = function (params) {
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_8__["fromPromise"])(aws_amplify__WEBPACK_IMPORTED_MODULE_7__["API"].post("createUserVoterGroup", "/createUserVoterGroup", { body: params }))
            .map(function (result) {
            console.log(result);
            return result;
        }, function (error) {
            // retun and handle error
            console.log(error);
        });
    };
    VoterGroupService.prototype.createVG = function (params) {
        var _this = this;
        var headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post(this.API_URL + '/createVoterGroup', JSON.stringify(params), headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            return _this.handleError(err);
        }));
    };
    VoterGroupService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    VoterGroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VoterGroupService);
    return VoterGroupService;
}());



/***/ }),

/***/ "./src/app/signup/confirmation/confirmation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/signup/confirmation/confirmation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/signup/confirmation/confirmation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/signup/confirmation/confirmation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <h3>Enter Confirmation Code</h3>\n  <p>Do not close this page until you have entered the code sent via email.</p>\n  <div class=\"form-group\">\n    <input [(ngModel)]=\"user.code\" type=\"password\" name=\"code\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter code\">\n  </div>\n  <button type=\"button\" (click)=\"submit(user)\" class=\"btn btn-primary\">Submit</button>\n</form>\n"

/***/ }),

/***/ "./src/app/signup/confirmation/confirmation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/signup/confirmation/confirmation.component.ts ***!
  \***************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_add_observable_forkJoin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/forkJoin */ "./node_modules/rxjs-compat/_esm5/add/observable/forkJoin.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utilities.service */ "./src/app/services/utilities.service.ts");







var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.user = {};
        this.busy = false;
        this.isEmpty = _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"].isEmpty;
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
    };
    ConfirmationComponent.prototype.submit = function (user) {
        var _this = this;
        var email = user.email;
        var code = user.code;
        var password = user.password;
        this.authService.confirmSignUp(email, code)
            .subscribe(function (result) {
            if (result === 'SUCCESS') {
                _this.signIn(email, password);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConfirmationComponent.prototype.signIn = function (email, password) {
        var _this = this;
        this.authService.signIn(email, password)
            .subscribe(function (result) {
            if (!_this.isEmpty(result.userDataKey)) {
                _this.getUserInfo();
            }
            else {
                _this.busy = false;
            }
        }, function (error) {
            // todo handle error
            console.log(error);
            _this.busy = false;
        });
    };
    ConfirmationComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.authService.getCognitoUserInfo()
            .subscribe(function (result) {
            if (result) {
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.busy = false;
            }
        }, function (error) {
            // todo handle error
            console.log(error);
            _this.busy = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConfirmationComponent.prototype, "user", void 0);
    ConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmation',
            template: __webpack_require__(/*! ./confirmation.component.html */ "./src/app/signup/confirmation/confirmation.component.html"),
            styles: [__webpack_require__(/*! ./confirmation.component.css */ "./src/app/signup/confirmation/confirmation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"!showConfirmation\">\n  <h3>Signup</h3>\n  <div class=\"form-group\">\n    <input [(ngModel)]=\"user.email\" type=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <input [(ngModel)]=\"user.firstName\" type=\"text\" name=\"firstName\" class=\"form-control\" id=\"firstName\" aria-describedby=\"firstNameHelp\" placeholder=\"First Name\">\n  </div>\n  <div class=\"form-group\">\n    <input [(ngModel)]=\"user.lastName\" type=\"text\" name=\"lastName\" class=\"form-control\" id=\"lastName\" aria-describedby=\"lastNameHelp\" placeholder=\"Last Name\">\n  </div>\n  <div class=\"form-group\">\n    <input [(ngModel)]=\"user.password\" type=\"password\" name=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n    <small id=\"passwordHelp\" class=\"form-text text-muted\">Password must 8 characters and include upper and lowercase letters, a numer and a special character</small>\n  </div>\n  <button type=\"button\" (click)=\"submit(user)\" class=\"btn btn-primary\">Submit</button>\n</form>\n\n<app-confirmation *ngIf=\"showConfirmation\" [user]=\"user\"></app-confirmation>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
        this.user = {};
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.submit = function (user) {
        var _this = this;
        var email = user.email;
        var password = user.password;
        var firstName = user.firstName;
        var lastName = user.lastName;
        var params = {
            username: email,
            password: password,
            attributes: {
                'custom:firstName': firstName,
                'custom:lastName': lastName
            }
        };
        this.authService.signUp(params).subscribe(function (result) {
            _this.showConfirmation = true;
        }, function (error) {
            console.log(error);
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/ui/footer/footer.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/footer/footer.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mt-5 fixed-bottom\">\n  <div class=\"navbar-expand m-auto navbar-text\">\n    Made with <i class=\"fa fa-heart\"></i> by <a href=\"https://bootstrapjuicebox.com\">Michael Jeppesen</a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/ui/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/header/header.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/header/header.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mb-3\">\n  <a class=\"navbar-brand\" href=\"/\">The Voting App</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarToggler\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarToggler\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item active\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n      </li>\n      <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n        <a class=\"nav-link\"[routerLink]=\"['/signup']\">Signup</a>\n      </li>\n      <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n        <a class=\"nav-link\"[routerLink]=\"['/login']\">Login</a>\n      </li>\n      <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n        <a class=\"nav-link\"[routerLink]=\"['/voter-group/create']\">Create Voter Group</a>\n      </li>\n      <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n        <a class=\"nav-link\"[routerLink]=\"['/proposal/create']\">Create Proposal</a>\n      </li>\n      <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n        <a class=\"nav-link\" (click)=\"signOut()\">Signout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/ui/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ui/layout/layout.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/layout/layout.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n  <div class=\"container\" style=\"margin-bottom: 5rem!important;\">\n      <ng-content></ng-content>\n  </div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/layout/layout.component.ts ***!
  \***********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/ui/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/ui/layout/layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/ui/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/ui/footer/footer.component.ts");







var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"]]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/app/voter-group/create-voter-group/create-voter-group.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/voter-group/create-voter-group/create-voter-group.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZvdGVyLWdyb3VwL2NyZWF0ZS12b3Rlci1ncm91cC9jcmVhdGUtdm90ZXItZ3JvdXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/voter-group/create-voter-group/create-voter-group.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/voter-group/create-voter-group/create-voter-group.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <h3>Create a Voter Group</h3>\n  <div class=\"form-group\">\n    <input type=\"text\"\n           name=\"title\"\n           class=\"form-control\"\n           id=\"voterGroupTitle\"\n           aria-describedby=\"titleHelp\"\n           [(ngModel)]=\"voterGroup.title\"\n           placeholder=\"Enter title of the voter group\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"voterGroupDescription\">Description</label>\n    <textarea class=\"form-control\"\n              name=\"description\"\n              id=\"voterGroupDescription\"\n              [(ngModel)]=\"voterGroup.description\"\n              placeholder=\"Describe your voter group\"\n              rows=\"3\">\n    </textarea>\n  </div>\n  <div *ngIf=\"addVoter\" class=\"input-group mb-3\">\n    <input type=\"email\"\n           name=\"email\"\n           class=\"form-control\"\n           id=\"loginEmail\"\n           aria-describedby=\"emailHelp\"\n           placeholder=\"Enter email\">\n    <div class=\"input-group-append\">\n      <button class=\"btn btn-primary\" type=\"button\">Invite Voter</button>\n    </div>\n  </div>\n  <small *ngIf=\"addVoter\" id=\"inviteHelp\" class=\"form-text text-muted mb-2\">Invite must be sent to existing user of the voting app. We're a work in progress here ;)</small>\n\n  <div class=\"row p-0\">\n    <div class=\"col-sm-4 mb-2\">\n      <button type=\"button\"\n              class=\"btn btn-large btn-warning\"\n              (click)=\"addVoter = true;\">\n        Add Voter\n      </button>\n    </div>\n  </div>\n  <div class=\"row p-0\">\n    <div class=\"col-sm-4\">\n      <button type=\"button\"\n              class=\"btn btn-primary\"\n              (click)=\"createVoterGroup(voterGroup)\">\n        Create Voter Group\n      </button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/voter-group/create-voter-group/create-voter-group.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/voter-group/create-voter-group/create-voter-group.component.ts ***!
  \********************************************************************************/
/*! exports provided: CreateVoterGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVoterGroupComponent", function() { return CreateVoterGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_voterGroup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/voterGroup.service */ "./src/app/services/voterGroup.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CreateVoterGroupComponent = /** @class */ (function () {
    function CreateVoterGroupComponent(voterGroupService, authService, router) {
        this.voterGroupService = voterGroupService;
        this.authService = authService;
        this.router = router;
        this.userInfo = {};
        this.voterGroup = {};
        this.email = '';
    }
    CreateVoterGroupComponent.prototype.ngOnInit = function () {
        this.getCognitoUserInfo();
    };
    CreateVoterGroupComponent.prototype.getCognitoUserInfo = function () {
        this.userInfo = this.authService.getUserInfo();
    };
    CreateVoterGroupComponent.prototype.createVoterGroup = function (voterGroup) {
        var _this = this;
        var params = { title: voterGroup.title, description: voterGroup.description };
        this.voterGroupService.createVoterGroup(params)
            .subscribe(function (result) {
            if (result.pk) {
                _this.addVoterToGroup(result.pk);
            }
        }, function (error) {
            console.log(error);
        });
    };
    CreateVoterGroupComponent.prototype.addVoterToGroup = function (voterGroupId) {
        var _this = this;
        var params = {
            email: this.userInfo.email,
            voterGroupId: voterGroupId
        };
        this.voterGroupService.addVoterToGroup(params)
            .subscribe(function (result) {
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            console.log(error);
        });
    };
    CreateVoterGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-voter-group',
            template: __webpack_require__(/*! ./create-voter-group.component.html */ "./src/app/voter-group/create-voter-group/create-voter-group.component.html"),
            styles: [__webpack_require__(/*! ./create-voter-group.component.css */ "./src/app/voter-group/create-voter-group/create-voter-group.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_voterGroup_service__WEBPACK_IMPORTED_MODULE_2__["VoterGroupService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CreateVoterGroupComponent);
    return CreateVoterGroupComponent;
}());



/***/ }),

/***/ "./src/app/voter-group/voter-group.component.css":
/*!*******************************************************!*\
  !*** ./src/app/voter-group/voter-group.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZvdGVyLWdyb3VwL3ZvdGVyLWdyb3VwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/voter-group/voter-group.component.html":
/*!********************************************************!*\
  !*** ./src/app/voter-group/voter-group.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{voterGroup.title}}</h3>\n<p>{{voterGroup.description}}</p>\n<!--<div class=\"card shadow mb-5 bg-white rounded\"-->\n     <!--style=\"width: 18rem;\">-->\n  <!--<ul class=\"list-group list-group-flush\">-->\n    <!--<li class=\"list-group-item\">-->\n      <!--<h6 class=\"mb-0\">Michael Jeppesen</h6>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item\">-->\n      <!--<h6 class=\"mb-0\">Michelle Bates</h6>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item\">-->\n      <!--<h6 class=\"mb-0\">Deanna Flescher</h6>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item\">-->\n      <!--<h6 class=\"mb-0\">Islando Sparks</h6>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item\">-->\n      <!--<h6 class=\"mb-0\">Vern Coffey</h6>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item\">-->\n      <!--<h6 class=\"mb-0\">All Star</h6>-->\n    <!--</li>-->\n  <!--</ul>-->\n<!--</div>-->\n\n<div class=\"input-group mb-3\">\n  <input type=\"email\"\n         name=\"email\"\n         class=\"form-control\"\n         id=\"loginEmail\"\n         [(ngModel)]=\"newVoter.email\"\n         aria-describedby=\"emailHelp\"\n         placeholder=\"Enter email\">\n  <div class=\"input-group-append\">\n    <button class=\"btn btn-primary\" type=\"button\" (click)=\"inviteUser(newVoter)\">Invite Voter</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/voter-group/voter-group.component.ts":
/*!******************************************************!*\
  !*** ./src/app/voter-group/voter-group.component.ts ***!
  \******************************************************/
/*! exports provided: VoterGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoterGroupComponent", function() { return VoterGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_voterGroup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/voterGroup.service */ "./src/app/services/voterGroup.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var VoterGroupComponent = /** @class */ (function () {
    function VoterGroupComponent(voterGroupService, authService) {
        this.voterGroupService = voterGroupService;
        this.authService = authService;
        this.voterGroup = {};
        this.newVoter = {};
    }
    VoterGroupComponent.prototype.ngOnInit = function () {
        this.voterGroup = this.voterGroupService.selectedVoterGroup;
    };
    VoterGroupComponent.prototype.inviteUser = function (newVoter) {
        var _this = this;
        this.authService.getUser({ email: newVoter.email })
            .subscribe(function (result) {
            var params = {
                email: newVoter.email,
                voterGroupId: _this.voterGroup.pk,
            };
            _this.addVoterToGroup(params);
        });
    };
    VoterGroupComponent.prototype.addVoterToGroup = function (params) {
        this.voterGroupService.addVoterToGroup(params)
            .subscribe(function (result) {
            console.log(result);
        });
    };
    VoterGroupComponent.prototype.updateVoterGroup = function (params) {
        this.voterGroupService.updateVoterGroup(params)
            .subscribe(function (result) {
            console.log(result);
        });
    };
    VoterGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-voter-group',
            template: __webpack_require__(/*! ./voter-group.component.html */ "./src/app/voter-group/voter-group.component.html"),
            styles: [__webpack_require__(/*! ./voter-group.component.css */ "./src/app/voter-group/voter-group.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_voterGroup_service__WEBPACK_IMPORTED_MODULE_2__["VoterGroupService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], VoterGroupComponent);
    return VoterGroupComponent;
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
    production: false,
    s3: {
        REGION: "us-east-1",
        BUCKET: "the-voting-app-client-dev"
    },
    apiGateway: {
        REGION: "YOUR_API_GATEWAY_REGION",
        URL: "YOUR_API_GATEWAY_URL"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_NsuzsFlGF",
        APP_CLIENT_ID: "4k704q3rv8o5elt4j2uba94uv5",
        IDENTITY_POOL_ID: "us-east-1:1b41ff72-41ef-4856-8506-3b6ff4e2759d"
    }
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




// import Amplify from 'aws-amplify';
//
// Amplify.configure({
//   Auth: {
//     mandatorySignIn: true,
//     region: environment.cognito.REGION,
//     userPoolId: environment.cognito.USER_POOL_ID,
//     identityPoolId: environment.cognito.IDENTITY_POOL_ID,
//     userPoolWebClientId: environment.cognito.APP_CLIENT_ID
//   },
//   Storage: {
//     region: environment.s3.REGION,
//     bucket: environment.s3.BUCKET,
//     identityPoolId: environment.cognito.IDENTITY_POOL_ID
//   },
//   API: {
//     endpoints: [
//       {
//         name: "notes",
//         endpoint: environment.apiGateway.URL,
//         region: environment.apiGateway.REGION
//       },
//     ]
//   }
// });
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

module.exports = __webpack_require__(/*! /Users/mj/projects/the-voting-app-dev/frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map