webpackJsonp([0,3],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentService = (function () {
    /**
     * Creates a new PollService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
    */
    function PaymentService(http) {
        this.http = http;
    }
    PaymentService.prototype.createPayment = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json' });
        return this.http.post('/api/bills/payment', JSON.stringify(data), {
            headers: headers
        }).map(function (res) { return res.json().data; });
    };
    PaymentService.prototype.getAllPayments = function () {
        return this.http.get('/api/payments')
            .map(function (res) { return res.json(); });
    };
    PaymentService.prototype.getPaymentsForCurrentMonth = function () {
        return this.http.get('/api/payments/current-month')
            .map(function (res) { return res.json(); });
    };
    PaymentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], PaymentService);
    return PaymentService;
    var _a;
}());
//# sourceMappingURL=/vagrant/src/payment.service.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    /**
     * Creates a new PollService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
    */
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getCurrentUser = function () {
        return this.http.get('/api/user/current-user')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AuthService.prototype.getUserAuthStatus = function () {
        return this.http.get('/api/authenticated')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /**
      * Handle HTTP error
    */
    AuthService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/vagrant/src/auth-service.service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bill; });
var Bill = (function () {
    function Bill() {
    }
    return Bill;
}());
//# sourceMappingURL=/vagrant/src/bill.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationService = (function () {
    /**
     * Creates a new PollService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
    */
    function NotificationService(http) {
        this.http = http;
    }
    NotificationService.prototype.getNotifications = function () {
        return this.http.get('/api/notifications')
            .map(function (res) { return res.json(); });
    };
    NotificationService.prototype.getUnreadNotifications = function () {
        return this.http.get('/api/notifications/unread')
            .map(function (res) { return res.json(); });
    };
    NotificationService.prototype.markAsRead = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json' });
        return this.http.put('/api/notifications/' + id, {
            headers: headers
        }).map(function (res) { return res.json().notification; });
    };
    NotificationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], NotificationService);
    return NotificationService;
    var _a;
}());
//# sourceMappingURL=/vagrant/src/notification.service.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillTools; });
var BillTools = (function () {
    function BillTools() {
    }
    BillTools.prototype.getUnpaidBillsForMonth = function (bills, paymentsMade) {
        var unpaid = [];
        // need all bills that do not have a payment
        for (var i = 0; i < bills.length; i++) {
            var thisBillIsPaid = this.isBillInPaymentsMadeForMonth(bills[i]._id, paymentsMade);
            // if a false was returned for this bill, it has not been paid yet. Only push on bill if it is false (has not been paid)
            if (!thisBillIsPaid) {
                var currentDate = new Date();
                // create a copy of this bill to push onto unpaid bills array
                var newBill = bills[i];
                // create a custom date field using the current month and year from a new date object. Give it the due date as day of month
                newBill.customDueDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), newBill.datedue);
                // push bill copy onto temporary array that will get returned
                unpaid.push(newBill);
            }
        }
        // sort this array by custom sort function that uses datedue
        unpaid.sort(this.sortUnpaidBills);
        return unpaid;
    };
    BillTools.prototype.sortUnpaidBills = function (a, b) {
        //this.billsUnpaid = somethingsorted();
        if (a.datedue < b.datedue)
            return -1;
        if (a.datedue > b.datedue)
            return 1;
        return 0;
    };
    BillTools.prototype.isBillInPaymentsMadeForMonth = function (id, paymentsMadeArray) {
        // return true if the bill id exists in the current bills paid array
        for (var i = 0; i < paymentsMadeArray.length; i++) {
            /// if this payment made bill id matches the id we are checking for, return true (it has been paid)
            if (paymentsMadeArray[i].bill_id == id)
                return true;
        }
        // Return false if this payment was not the match for the bill being searched for
        return false;
    };
    return BillTools;
}());
//# sourceMappingURL=/vagrant/src/bill-tools.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    /**
     * Creates a new PollService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
    */
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getSettings = function () {
        return this.http.get('/api/user/settings')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.updateSettings = function (setting) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json' });
        var settingsObject = {
            setting: setting
        };
        return this.http.put('/api/user/settings', JSON.stringify(settingsObject), {
            headers: headers
        }).map(function (res) { return res.json().setting; });
    };
    /**
      * Handle HTTP error
    */
    UserService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=/vagrant/src/user.service.js.map

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 396;


/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(516);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/vagrant/src/main.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        this.authService.getUserAuthStatus().subscribe(function (resp) {
            _this.loggedIn = resp['authenticated'];
        });
        if (this.loggedIn) {
            return true;
        }
        //Redirect the user before denying them access to this route
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/vagrant/src/AuthGuard.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__(700),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());
//# sourceMappingURL=/vagrant/src/about-us.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_service__ = __webpack_require__(225);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, authService, notificationService) {
        this.router = router;
        this.authService = authService;
        this.notificationService = notificationService;
        this.title = 'Bill Management System';
        this.userLoggedIn = false;
        this.hasNotifications = false;
        this.errorMessage = "";
        this.notifications = [];
        this.allRead = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.checkIfLoggedIn();
    };
    AppComponent.prototype.OnNotifyAllRead = function (allRead) {
        console.log("onAllRead FIRED! allRead: ", allRead);
        // if all notifications are not read, then this.hasNotifications = true;
        if (allRead) {
            this.hasNotifications = false;
        }
        else {
            this.hasNotifications = true;
        }
    };
    // ngAfterViewInit is fired after the page has completely loaded. It's a built
    // in Angular2 function similar to jQuery document.ready
    AppComponent.prototype.ngAfterViewInit = function () {
        /* Fix for closing hamburger menu on click */
        var navbarLinks = document.getElementsByClassName("close-hamburger-on-click");
        var closeHamburgerMenu = function () {
            document.querySelector('.navbar-toggle').setAttribute('aria-expanded', 'false');
            document.querySelector('.navbar-toggle').classList.add('collapsed');
            document.querySelector('.navbar-collapse').setAttribute('aria-expanded', 'false');
            document.querySelector('.navbar-collapse').classList.add('collapse');
            document.querySelector('.navbar-collapse').classList.remove('in');
        };
        for (var i = 0; i < navbarLinks.length; i++) {
            navbarLinks[i].addEventListener('click', closeHamburgerMenu, false);
        }
    };
    AppComponent.prototype.checkIfLoggedIn = function () {
        var _this = this;
        this.authService.getUserAuthStatus()
            .subscribe(function (resp) {
            //console.log('Navbar Authentication response: ', resp);
            if (resp.authenticated) {
                _this.userLoggedIn = true;
                _this.router.navigate(['/']);
                _this.checkForNotifications();
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.checkForNotifications = function () {
        var _this = this;
        console.log("Checking for notifications...");
        this.notificationService.getUnreadNotifications().subscribe(function (notifications) {
            console.log("notifications returned: ", notifications);
            _this.notifications = notifications;
            if (notifications.length > 0) {
                _this.hasNotifications = true;
            }
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(701),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__notification_service__["a" /* NotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__notification_service__["a" /* NotificationService */]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/vagrant/src/app.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__posts_posts_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bills_bills_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bills_add_add_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bills_edit_edit_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_us_about_us_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bills_pay_pay_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bills_manage_manage_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bills_pay_make_payment_make_payment_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__bills_payment_history_payment_history_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__settings_settings_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__bill_sidebar_bill_sidebar_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__notifications_notifications_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__notification_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__bill_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__bills_payment_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__user_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__auth_service_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__AuthGuard__ = __webpack_require__(513);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


























// Define the routes
var ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] },
    { path: 'bills/pay/make-payment/:id', component: __WEBPACK_IMPORTED_MODULE_15__bills_pay_make_payment_make_payment_component__["a" /* MakePaymentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__AuthGuard__["a" /* AuthGuard */]] },
    { path: 'bills/pay', component: __WEBPACK_IMPORTED_MODULE_13__bills_pay_pay_component__["a" /* PayComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__AuthGuard__["a" /* AuthGuard */]] },
    { path: 'bills/payment-history', component: __WEBPACK_IMPORTED_MODULE_16__bills_payment_history_payment_history_component__["a" /* PaymentHistoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__AuthGuard__["a" /* AuthGuard */]] },
    { path: 'bills/manage', component: __WEBPACK_IMPORTED_MODULE_14__bills_manage_manage_component__["a" /* ManageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__AuthGuard__["a" /* AuthGuard */]] },
    { path: 'bills/add', component: __WEBPACK_IMPORTED_MODULE_8__bills_add_add_component__["a" /* AddComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__AuthGuard__["a" /* AuthGuard */]] },
    { path: 'bills/edit/:id', component: __WEBPACK_IMPORTED_MODULE_9__bills_edit_edit_component__["a" /* EditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__AuthGuard__["a" /* AuthGuard */]] },
    { path: 'bills', component: __WEBPACK_IMPORTED_MODULE_7__bills_bills_component__["a" /* BillsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__AuthGuard__["a" /* AuthGuard */]] },
    { path: 'about-us', component: __WEBPACK_IMPORTED_MODULE_12__about_us_about_us_component__["a" /* AboutUsComponent */] },
    { path: 'posts', component: __WEBPACK_IMPORTED_MODULE_6__posts_posts_component__["a" /* PostsComponent */] },
    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_19__notifications_notifications_component__["a" /* NotificationsComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_17__settings_settings_component__["a" /* SettingsComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__posts_posts_component__["a" /* PostsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__bills_bills_component__["a" /* BillsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__bills_add_add_component__["a" /* AddComponent */],
                __WEBPACK_IMPORTED_MODULE_9__bills_edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_13__bills_pay_pay_component__["a" /* PayComponent */],
                __WEBPACK_IMPORTED_MODULE_14__bills_manage_manage_component__["a" /* ManageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__bills_pay_make_payment_make_payment_component__["a" /* MakePaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_16__bills_payment_history_payment_history_component__["a" /* PaymentHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_17__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__bill_sidebar_bill_sidebar_component__["a" /* BillSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_19__notifications_notifications_component__["a" /* NotificationsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(ROUTES) // Add routes to the app
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_20__notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_24__auth_service_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_21__bill_service__["a" /* BillService */], __WEBPACK_IMPORTED_MODULE_22__bills_payment_service__["a" /* PaymentService */], __WEBPACK_IMPORTED_MODULE_23__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_25__AuthGuard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/vagrant/src/app.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillSidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BillSidebarComponent = (function () {
    function BillSidebarComponent() {
    }
    BillSidebarComponent.prototype.ngOnInit = function () {
    };
    BillSidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'bill-sidebar',
            template: __webpack_require__(702),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [])
    ], BillSidebarComponent);
    return BillSidebarComponent;
}());
//# sourceMappingURL=/vagrant/src/bill-sidebar.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bill_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddComponent = (function () {
    function AddComponent(router, billService) {
        this.router = router;
        this.billService = billService;
    }
    AddComponent.prototype.ngOnInit = function () {
        this.bill = new __WEBPACK_IMPORTED_MODULE_2__bill__["a" /* Bill */];
    };
    AddComponent.prototype.paymentDueDateChanged = function () {
        console.log("Due date changed. Do validation.");
        this.errorMessage = "";
        if (this.bill.datedue < 1 || this.bill.datedue > 31) {
            this.errorMessage = "Date due is not a valid day of month.";
        }
    };
    AddComponent.prototype.saveBill = function () {
        var _this = this;
        console.log("Saving this bill");
        this.billService.saveBill(this.bill)
            .subscribe(function (resp) {
            _this.router.navigate(['/bills/manage']);
        }, function (error) { return _this.errorMessage = error; });
    };
    AddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-add',
            template: __webpack_require__(703),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__bill_service__["a" /* BillService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__bill_service__["a" /* BillService */]) === 'function' && _b) || Object])
    ], AddComponent);
    return AddComponent;
    var _a, _b;
}());
//# sourceMappingURL=/vagrant/src/add.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bill_tools__ = __webpack_require__(340);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BillsComponent = (function () {
    function BillsComponent(router, billService, paymentService) {
        this.router = router;
        this.billService = billService;
        this.paymentService = paymentService;
        this.bills = [];
        this.billsUnpaid = [];
        this.isLoading = false;
        this.billTools = new __WEBPACK_IMPORTED_MODULE_4__bill_tools__["a" /* BillTools */]();
        this.hasUpcomingBills = false;
    }
    BillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        // Retrieve posts from the API
        this.billService.getAllBills().subscribe(function (bills) {
            _this.bills = bills;
            _this.paymentService.getPaymentsForCurrentMonth().subscribe(function (payments) {
                _this.billsUnpaid = _this.billTools.getUnpaidBillsForMonth(_this.bills, payments);
                if (_this.billsUnpaid.length) {
                    _this.hasUpcomingBills = true;
                }
                _this.isLoading = false;
            });
        });
    };
    BillsComponent.prototype.editBill = function (id) {
        //console.log("Navigating to edit bill route and passing id of: ", id);
        this.router.navigate(['/bills/edit/' + id]);
    };
    BillsComponent.prototype.payBill = function (id) {
        this.router.navigate(['/bills/pay/make-payment/' + id]);
    };
    BillsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-bills',
            template: __webpack_require__(704),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__bill_service__["a" /* BillService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__bill_service__["a" /* BillService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__payment_service__["a" /* PaymentService */]) === 'function' && _c) || Object])
    ], BillsComponent);
    return BillsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/vagrant/src/bills.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bill__ = __webpack_require__(224);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = (function () {
    function EditComponent(billService, router, route) {
        this.billService = billService;
        this.router = router;
        this.route = route;
        this.bill = new __WEBPACK_IMPORTED_MODULE_3__bill__["a" /* Bill */]();
    }
    EditComponent.prototype.ngOnInit = function () {
        this.getBillDetails();
    };
    EditComponent.prototype.getBillDetails = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            console.log("Checking params: ", params);
            if (params['id'] !== undefined) {
                var billId = params['id'];
                _this.currentBillId = billId;
                _this.billService.getBill(billId)
                    .subscribe(function (bill) {
                    console.log("I was returned this bill from the backend: ", bill);
                    _this.bill = bill;
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    EditComponent.prototype.updateBill = function () {
        var _this = this;
        this.billService.updateBill(this.bill)
            .subscribe(function (resp) {
            _this.router.navigate(['/bills/manage']);
        }, function (error) { return _this.errorMessage = error; });
    };
    EditComponent.prototype.deleteBill = function () {
        var _this = this;
        this.billService.deleteBill(this.bill._id)
            .subscribe(function (resp) {
            _this.router.navigate(['/bills/manage']);
        }, function (error) { return _this.errorMessage = error; });
    };
    EditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__(705),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__bill_service__["a" /* BillService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__bill_service__["a" /* BillService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], EditComponent);
    return EditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/vagrant/src/edit.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageComponent = (function () {
    function ManageComponent(router, billService) {
        this.router = router;
        this.billService = billService;
        this.bills = [];
        this.isLoading = false;
    }
    ManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        // Retrieve posts from the API
        this.billService.getAllBills().subscribe(function (bills) {
            _this.bills = bills;
            _this.bills.sort(_this.sortBills);
            _this.addCustomDueDateField();
            _this.isLoading = false;
        });
    };
    ManageComponent.prototype.sortBills = function (a, b) {
        if (a.datedue < b.datedue)
            return -1;
        if (a.datedue > b.datedue)
            return 1;
        return 0;
    };
    ManageComponent.prototype.addCustomDueDateField = function () {
        // do a map on this.billsUnpaid that adds a custom date to display for datedue
        for (var i = 0; i < this.bills.length; i++) {
            var currentDate = new Date();
            // create a custom date field using the current month and year from a new date object. Give it the due date as day of month
            this.bills[i].customDueDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), this.bills[i].datedue);
        }
    };
    ManageComponent.prototype.editBill = function (id) {
        //console.log("Navigating to edit bill route and passing id of: ", id);
        this.router.navigate(['/bills/edit/' + id]);
    };
    ManageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-manage',
            template: __webpack_require__(706),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__bill_service__["a" /* BillService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__bill_service__["a" /* BillService */]) === 'function' && _b) || Object])
    ], ManageComponent);
    return ManageComponent;
    var _a, _b;
}());
//# sourceMappingURL=/vagrant/src/manage.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bill_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payment_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakePaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MakePaymentComponent = (function () {
    function MakePaymentComponent(billService, paymentService, router, route) {
        this.billService = billService;
        this.paymentService = paymentService;
        this.router = router;
        this.route = route;
        this.bills = [];
        // set bill to empty bill object
        this.bill = new __WEBPACK_IMPORTED_MODULE_2__bill__["a" /* Bill */]();
        // set isPaid to false to start
        this.isPaid = false;
    }
    MakePaymentComponent.prototype.ngOnInit = function () {
        // Once page has loaded, call the getBillDetails function to retrieve this bills info from the backend
        this.getBillDetails();
    };
    // toggleStatus changes the status variable on bill model
    MakePaymentComponent.prototype.toggleStatus = function (status) {
        this.bill.status = status;
        if (status === "Paid")
            this.isPaid = true;
        else
            this.isPaid = false;
    };
    // getBillDetails gets the current parameter id from route and then gets that bill from backend through BillService
    MakePaymentComponent.prototype.getBillDetails = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
                var billId = params['id'];
                _this.currentBillId = billId;
                _this.billService.getBill(billId)
                    .subscribe(function (bill) {
                    console.log("I was returned this bill from the backend: ", bill);
                    _this.bill = bill;
                    if (bill.status == "Paid")
                        _this.isPaid = true;
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    // save bill in backend
    MakePaymentComponent.prototype.saveBill = function () {
        var _this = this;
        console.log("Saving bill...");
        var payment = {
            'bill_id': this.bill._id,
            'bill_name': this.bill.name,
            'payment_date': ''
        };
        this.paymentService.createPayment(payment)
            .subscribe(function (resp) {
            _this.router.navigate(['/bills/pay']);
        }, function (error) { return _this.errorMessage = error; });
    };
    MakePaymentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-make-payment',
            template: __webpack_require__(707),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__bill_service__["a" /* BillService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__bill_service__["a" /* BillService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__payment_service__["a" /* PaymentService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], MakePaymentComponent);
    return MakePaymentComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/vagrant/src/make-payment.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bill_tools__ = __webpack_require__(340);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PayComponent = (function () {
    function PayComponent(router, billService, paymentService) {
        this.router = router;
        this.billService = billService;
        this.paymentService = paymentService;
        this.bills = [];
        this.billsUnpaid = [];
        this.billTools = new __WEBPACK_IMPORTED_MODULE_4__bill_tools__["a" /* BillTools */]();
        this.isLoading = false;
        this.hasBills = false;
    }
    PayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        // Retrieve posts from the API
        this.billService.getAllBills().subscribe(function (bills) {
            _this.bills = bills;
            _this.paymentService.getPaymentsForCurrentMonth().subscribe(function (payments) {
                _this.billsUnpaid = _this.billTools.getUnpaidBillsForMonth(_this.bills, payments);
                if (_this.billsUnpaid.length) {
                    _this.hasBills = true;
                }
                _this.isLoading = false;
            });
        });
    };
    PayComponent.prototype.payBill = function (id) {
        //console.log("Navigating to edit bill route and passing id of: ", id);
        this.router.navigate(['/bills/pay/make-payment/' + id]);
    };
    PayComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-pay',
            template: __webpack_require__(708),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__bill_service__["a" /* BillService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__bill_service__["a" /* BillService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__payment_service__["a" /* PaymentService */]) === 'function' && _c) || Object])
    ], PayComponent);
    return PayComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/vagrant/src/pay.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentHistoryComponent = (function () {
    function PaymentHistoryComponent(router, paymentService) {
        this.router = router;
        this.paymentService = paymentService;
        this.payments = [];
    }
    PaymentHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paymentService.getAllPayments().subscribe(function (payments) {
            _this.payments = payments;
        });
    };
    PaymentHistoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-payment-history',
            template: __webpack_require__(709),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__payment_service__["a" /* PaymentService */]) === 'function' && _b) || Object])
    ], PaymentHistoryComponent);
    return PaymentHistoryComponent;
    var _a, _b;
}());
//# sourceMappingURL=/vagrant/src/payment-history.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(710),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/vagrant/src/home.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(711),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=/vagrant/src/login.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_service__ = __webpack_require__(225);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsComponent = (function () {
    function NotificationsComponent(notificationService) {
        this.notificationService = notificationService;
        this.notifyAllRead = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.notifications = [];
        this.errorMessage = "";
        this.hasUnreadNotifications = false;
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        this.getNotifications();
    };
    NotificationsComponent.prototype.getNotifications = function () {
        var _this = this;
        this.notificationService.getNotifications().subscribe(function (notifications) {
            _this.notifications = notifications;
            var currentDate = new Date();
            // create a copy of this bill to push onto unpaid bills array
            var newNotification = notifications;
            // create a custom date field using the current month and year from a new date object. Give it the due date as day of month
            newNotification.customDueDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), newNotification.datedue);
        });
    };
    NotificationsComponent.prototype.getCountOfUnread = function () {
        return 0;
    };
    NotificationsComponent.prototype.checkForUnreadNotification = function () {
        // return true if any notification has not been read
        // loop through this.notifications and check if any are unread
        for (var _i = 0, _a = this.notifications; _i < _a.length; _i++) {
            var n = _a[_i];
            console.log("Checking if this notification is read: ", n);
            if (!n.read)
                return true;
        }
        // Does not have unread notifications
        return false;
    };
    NotificationsComponent.prototype.markAsRead = function (index_of_notification) {
        var _this = this;
        // send update to backend that sets as read to be true
        var notificationClicked = this.notifications[index_of_notification];
        // need index passed in too
        this.notificationService.markAsRead(notificationClicked._id)
            .subscribe(function (notification) {
            notificationClicked.read = true;
            // update hasNotifications on app component to be false;
            var hasUnread = _this.checkForUnreadNotification();
            if (!hasUnread) {
                console.log("Set hasNotifications = false on AppComponent. FIRING EMMITER");
                _this.notifyAllRead.emit(true);
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(), 
        __metadata('design:type', Object)
    ], NotificationsComponent.prototype, "notifyAllRead", void 0);
    NotificationsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-notifications',
            template: __webpack_require__(712),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__notification_service__["a" /* NotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__notification_service__["a" /* NotificationService */]) === 'function' && _a) || Object])
    ], NotificationsComponent);
    return NotificationsComponent;
    var _a;
}());
//# sourceMappingURL=/vagrant/src/notifications.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
    }
    // Get all posts from the API
    PostsService.prototype.getAllPosts = function () {
        return this.http.get('/api/posts')
            .map(function (res) { return res.json(); });
    };
    PostsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], PostsService);
    return PostsService;
    var _a;
}());
//# sourceMappingURL=/vagrant/src/posts.service.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__posts_service__ = __webpack_require__(528);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsComponent = (function () {
    function PostsComponent(postsService) {
        this.postsService = postsService;
        // instantiate posts to an empty array
        this.posts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve posts from the API
        this.postsService.getAllPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-posts',
            template: __webpack_require__(713),
            styles: [__webpack_require__(697)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */]) === 'function' && _a) || Object])
    ], PostsComponent);
    return PostsComponent;
    var _a;
}());
//# sourceMappingURL=/vagrant/src/posts.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(341);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = (function () {
    function SettingsComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.daysBeforeNotice = 0;
        this.errorMessage = "";
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.getSetttings();
    };
    SettingsComponent.prototype.getSetttings = function () {
        var _this = this;
        this.userService.getSettings().subscribe(function (daysBefore) {
            _this.daysBeforeNotice = daysBefore;
        });
    };
    SettingsComponent.prototype.saveSetting = function () {
        var _this = this;
        this.userService.updateSettings(this.daysBeforeNotice)
            .subscribe(function (resp) {
            _this.router.navigate(['/bills/']);
        }, function (error) { return _this.errorMessage = error; });
    };
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__(714),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/vagrant/src/settings.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/vagrant/src/environment.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/vagrant/src/polyfills.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BillService = (function () {
    /**
     * Creates a new PollService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
    */
    function BillService(http) {
        this.http = http;
    }
    BillService.prototype.getAllBills = function () {
        return this.http.get('/api/bills')
            .map(function (res) { return res.json(); });
    };
    BillService.prototype.getBill = function (id) {
        return this.http.get('/api/bills/' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BillService.prototype.saveBill = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json' });
        return this.http.post('/api/bills/', JSON.stringify(data), {
            headers: headers
        }).map(function (res) { return res.json().data; });
    };
    BillService.prototype.updateBill = function (bill) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json' });
        return this.http.put('/api/bills/' + bill._id, JSON.stringify(bill), {
            headers: headers
        }).map(function (res) { return res.json().bill; });
    };
    BillService.prototype.deleteBill = function (id) {
        return this.http.delete('/api/bills/' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /**
      * Handle HTTP error
    */
    BillService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    BillService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], BillService);
    return BillService;
    var _a;
}());
//# sourceMappingURL=/vagrant/src/bill.service.js.map

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".header {\n  text-align: center;\n  margin-top: 30px;\n}\n\n.details {\n  text-align: center;\n  margin-top: 40px;\n}\n\np {\n  color: #337ab7;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "#main_content_wrapper {\n  padding-top: 40px;\n}\n\n.glyphicon-exclamation-sign {\n  color: red;\n  font-size: 18px;\n}\n\n.has-notifications {\n  color: red;\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "#createBill {\n  border: 2px solid black;\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nh1 {\n  text-align: center;\n  color: #337ab7;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".pad-top {\n  margin-top: 35px;\n}\n\n.list-group-item:hover {\n  background: #9d9d9d;\n  cursor: pointer;\n}\n\n.btn-block {\n  margin-left: -15px;\n  width: 103.5%;\n}\n\n.container-fluid, .sidebar-row {\n  height: 100%;\n  width: 100%;\n}\n\n.placeholders {\n  margin-bottom: 30px;\n  text-align: center;\n}\n\n.img-responsive {\n  display: inline;\n}\n\n.placeholder a {\n  display: block;\n  margin-bottom: 15px;\n}\n\n.placeholder a:hover {\n  background: #e3e3e3;\n  border-radius: 10px;\n  text-decoration: none;\n}\n\nh1 {\n  color: #337ab7;\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".container {\n  margin-top: 30px;\n}\n\n#manageBill {\n  border: 2px solid black;\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nh1 {\n  text-align: center;\n  color: #337ab7;\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".pad-top {\n  margin-top: 35px;\n}\n\n.list-group-item:hover {\n  background: #9d9d9d;\n  cursor: pointer;\n}\n\n.btn-block {\n  margin-left: -15px;\n  width: 103.5%;\n}\n\n.container-fluid, .sidebar-row {\n  height: 100%;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".is-active {\n  border: 2px solid black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".pad-top {\n  margin-top: 35px;\n}\n\n.list-group-item:hover {\n  background: #9d9d9d;\n  cursor: pointer;\n}\n\n.btn-block {\n  margin-left: -15px;\n  width: 103.5%;\n}\n\n.container-fluid, .sidebar-row {\n  height: 100%;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".pad-top {\n  margin-top: 35px;\n}\n\n.list-group-item:hover {\n  background: #9d9d9d;\n  cursor: pointer;\n}\n\n.btn-block {\n  margin-left: -15px;\n  width: 103.5%;\n}\n\n.container-fluid, .sidebar-row {\n  height: 100%;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".jumbotron {\n  text-align: center;\n  border: 1px solid black;\n  margin-top: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".login-icons .col-xs-4 {\n  text-align: center;\n}\n\n.login-icons img {\n  max-height: 130px;\n  max-width: 130px;\n}\n\n.login-wrapper {\n  background: #e3e3d3;\n  padding: 25px;\n  border-radius: 10px;\n  border: 2px solid #101010;\n  cursor: pointer;\n  display: block;\n  max-width: 225px;\n  max-height: 200px;\n  margin: 0 auto;\n}\n\n.login-wrapper:hover {\n  background: #ccccbf;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".container {\n\tmargin-top: 60px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".form-group {\n  margin-top: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h1>About BillManagementSystem</h1>\n  <p>With BMS you have one place to track and manage all of your finances!</p>\n</div>\n\n<div class=\"details\">\n  <h2>Application Details</h2>\n  <p>BillManagementSystem was created for my fullsail WD3 class project.</p>\n  <p>BMS is a single page application(SPA), also known as a CRUD application which stands for create, read, update, delete.</p>\n  <p>It was created using the MEAN stack, which consist of Mongo DB, Express.js, Angular 2, and Node.js.</p>\n</div>\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div id=\"Header\" class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Bill Management System</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li><a class=\"close-hamburger-on-click\" [routerLink]=\"['/home']\">HOME</a></li>\n        <li><a class=\"close-hamburger-on-click\" [routerLink]=\"['/bills']\">BILLS</a></li>\n        <li><a class=\"close-hamburger-on-click\" [routerLink]=\"['/about-us']\">ABOUT</a></li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!userLoggedIn\">\n          <a class=\"close-hamburger-on-click\" [routerLink]=\"['login']\">Login</a>\n        </li>\n        <li *ngIf=\"userLoggedIn\" class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <span *ngIf=\"hasNotifications\" class=\"alerts\">\n              <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n            </span>\n            Your Account <span class=\"caret\"></span></a>\n\n          <ul class=\"dropdown-menu\">\n            <li><a class=\"close-hamburger-on-click\" [routerLink]=\"['/settings']\">Settings</a></li>\n            <li><a class=\"close-hamburger-on-click\" [ngClass]=\"{'has-notifications': hasNotifications }\" [routerLink]=\"['/notifications']\">Notifications</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a class=\"close-hamburger-on-click\" href=\"/api/logout\">Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div id=\"main_content_wrapper\" class=\"container-fluid\">\n  <router-outlet (notifyAllRead)=\"OnNotifyAllRead($event)\"></router-outlet>\n</div>\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-sidebar\">\n  <li><a [routerLink]=\"['/bills']\">Dashboard</a></li>\n  <li><a [routerLink]=\"['/bills/manage']\">Manage</a></li>\n  <li><a [routerLink]=\"['/bills/pay']\">Pay</a></li>\n  <li><a [routerLink]=\"['/bills/payment-history']\">Payment History</a></li>\n</ul>\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<div class=\"add-bills-container\">\n  <h1>Creating Bill</h1>\n\n  <!--<pre>{{bill | json}}</pre>-->\n\n  <div *ngIf=\"errorMessage\" class=\"btn-danger\">\n    {{ errorMessage }}\n  </div>\n\n  <form id=\"createBill\" class=\"well well-lg smaller-text-mobile\">\n    <div class=\"form-group row\">\n          <div class=\"col-md-12\">\n        <label for=\"billName\">Name:</label>\n        <input type=\"text\" [(ngModel)]=\"bill.name\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"billName\" placeholder=\"Bill Name\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <div class=\"col-md-12\">\n        <label for=\"billDateDue\">Day Of Month This Payment is Due:</label>\n        <input type=\"number\" [(ngModel)]=\"bill.datedue\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"billDateDue\" (change)=\"paymentDueDateChanged()\" placeholder=\"Day of Month Due\">\n      </div>\n    </div>\n\n    <div id=\"totalAmount\" class=\"form-group row\">\n      <div class=\"col-xs-11 col-sm-6\">\n        <label for=\"billAmount\">What Is The Payment Amount:</label>\n        <div class=\"input-group\">\n          <div class=\"input-group-addon\">$</div>\n          <input type=\"number\" [(ngModel)]=\"bill.amount\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"billAmount\" placeholder=\"Amount\">\n          <div class=\"input-group-addon\">.00</div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <button type=\"button\" [disabled]=\"errorMessage || !bill.name || !bill.amount || !bill.amount\" (click)=\"saveBill()\" class=\"btn btn-primary\">Save</button>\n        <a [routerLink]=\"['/bills/manage']\" class=\"btn btn-default\">Cancel</a>\n      </div>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row pad-top sidebar-row\">\n\n    <div class=\"col-xs-3 col-md-2 sidebar\">\n      <bill-sidebar></bill-sidebar>\n    </div>\n\n    <div class=\"col-xs-8 col-xs-offset-4 col-md-9 col-md-offset-3 main\">\n\n      <div class=\"text-center text-important\">\n        <h1>Bill Dashboard</h1>\n      </div>\n\n      <div class=\"row placeholders\">\n        <div class=\"col-md-4 text-center placeholder\">\n          <a [routerLink]=\"['/bills/manage']\">\n              <img src=\"/assets/images/manage.png\" width=\"200\" height=\"200\" class=\"img-responsive\" alt=\"Manage\">\n              <h4>Manage</h4>\n              <span class=\"text-muted\">Manage Bill Accounts</span>\n          </a>\n        </div>\n\n        <div class=\"col-md-4 text-center placeholder\">\n          <a [routerLink]=\"['/bills/pay']\">\n              <img src=\"/assets/images/Purse-512.png\" width=\"200\" height=\"200\" class=\"img-responsive\" alt=\"Pay Bill\">\n              <h4>Pay</h4>\n              <span class=\"text-muted\">Pay a Bill</span>\n          </a>\n        </div>\n\n        <div class=\"col-md-4 text-center placeholder\">\n          <a [routerLink]=\"['/bills/payment-history']\">\n              <img src=\"/assets/images/apple_time_machine_shaped.png\" width=\"200\" height=\"200\" class=\"img-responsive\" alt=\"Manage\">\n              <h4>Payment History</h4>\n              <span class=\"text-muted\">View Payment History</span>\n          </a>\n        </div>\n      </div>\n\n\n      <div *ngIf=\"hasUpcomingBills\" class=\"row text-important\">\n        <h1>Upcoming Bills</h1>\n\n        <div *ngIf=\"isLoading\" class=\"loading-container\">\n          <img src=\"/assets/images/gears.gif\" alt=\"Loading bills\">\n        </div>\n\n        <div *ngIf=\"!isLoading\" class=\"list-group bill-list\">\n      \t\t<div *ngFor=\"let unpaidBill of billsUnpaid\" class=\"list-group-item row\" (click)=\"payBill(unpaidBill._id)\">\n\n            <h3 class=\"list-group-item-heading\">{{ unpaidBill.name }}</h3>\n\n            <p class=\"list-group-item-text\">\n              Amount Due: {{ unpaidBill.amount | currency:'USD':true }}\n              <br>\n              Due on: {{ unpaidBill.customDueDate | date: 'MMM dd, yyyy' }}\n            </p>\n\n      \t\t</div>\n      \t</div>\n\n      </div>\n\n      <div *ngIf=\"!hasUpcomingBills\" class=\"text-center\">\n        <h3 class=\"text-important\">All bills for the month have been paid.</h3>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-bills-container\">\n  <h1>Manage Bill Account</h1>\n\n  <form id=\"manageBill\" *ngIf=\"bill\" class=\"well well-lg smaller-text-mobile\">\n    <div class=\"form-group row\">\n      <div class=\"col-md-12\">\n        <label for=\"billName\">Name:</label>\n        <input type=\"text\" [(ngModel)]=\"bill.name\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"billName\" placeholder=\"Bill Name\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-md-12\">\n        <label for=\"billDateDue\">Day Of Month This Payment is Due:</label>\n        <input type=\"text\" [(ngModel)]=\"bill.datedue\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"billDateDue\" placeholder=\"Day of Month Due\">\n      </div>\n    </div>\n\n    <div id=\"totalAmount\" class=\"form-group row\">\n      <div class=\"col-xs-11 col-sm-6 col-md-3\">\n        <label for=\"billAmount\">What Is The Payment Amount:</label>\n        <div class=\"input-group\">\n          <div class=\"input-group-addon\">$</div>\n          <input type=\"text\" [(ngModel)]=\"bill.amount\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"billAmount\" placeholder=\"Amount\">\n          <div class=\"input-group-addon\">.00</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-xs-8\">\n        <button type=\"button\" (click)=\"updateBill()\" class=\"btn btn-primary\">Update</button>\n        <a [routerLink]=\"['/bills/manage']\" class=\"btn btn-default\">Cancel</a>\n      </div>\n      <div class=\"col-xs-4\">\n        <button type=\"button\" (click)=\"deleteBill()\" class=\"btn btn-danger pull-right\">Delete</button>\n      </div>\n    </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row pad-top sidebar-row\">\n\n    <div class=\"col-xs-3 col-md-2 sidebar\">\n      <bill-sidebar></bill-sidebar>\n    </div>\n\n    <div class=\"col-xs-8 col-xs-offset-4 col-md-9 col-md-offset-3 main\">\n\n      <h1>Bills</h1>\n\n      <a type=\"button\" [routerLink]=\"['/bills/add']\" class=\"btn btn-primary btn-lg btn-block\">Add a Bill</a>\n\n      <div *ngIf=\"isLoading\" class=\"loading-container\">\n        <img src=\"/assets/images/gears.gif\" alt=\"Loading bills\">\n      </div>\n\n    \t<div *ngIf=\"!isLoading\" class=\"list-group bill-list\">\n    \t\t<div *ngFor=\"let bill of bills\" (click)=\"editBill(bill._id)\" class=\"list-group-item row\">\n          <h4 class=\"list-group-item-heading\">{{ bill.name }}</h4>\n          <p class=\"list-group-item-text\">\n            Amount Due: {{ bill.amount | currency:'USD':true }}\n            <br>\n            Due this month on: {{ bill.customDueDate | date: 'MMM dd, yyyy' }}\n          </p>\n    \t\t</div>\n    \t</div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<div class=\"make-payment-container\">\n  <h1>Payment Details</h1>\n  <p>Record details of a payment you've made for this bill.</p>\n\n  <form class=\"well well-lg\">\n\n    <div class=\"form-group row\">\n        <h2 class=\"form-group-item-heading\">{{ bill.name }}</h2>\n\n      <p class=\"form-group-item-text\">\n        Due On: {{ bill.datedue }}\n        <br>\n        Amount due: {{ bill.amount | currency:'USD':true }}\n      </p>\n\n    <div class=\"form-group\">\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Payment Status\">\n          <button [ngClass]=\"{'is-active btn-danger': !isPaid }\" (click)=\"toggleStatus('Unpaid')\" type=\"button\" class=\"btn btn-lg btn-block\">Unpaid</button>\n          <button [ngClass]=\"{'is-active btn-success': isPaid }\" (click)=\"toggleStatus('Paid')\" type=\"button\" class=\"btn btn-lg btn-block\">Paid</button>\n      </div>\n    </div>\n  </div>\n\n</form>\n\n    <div class=\"form-group\">\n        <button type=\"button\" (click)=\"saveBill()\" class=\"btn btn-primary\">Submit</button>\n        <a [routerLink]=\"['/bills/pay']\" class=\"btn btn-default\">Cancel</a>\n    </div>\n\n</div>\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row pad-top sidebar-row\">\n\n    <div class=\"col-xs-3 col-md-2 sidebar\">\n      <bill-sidebar></bill-sidebar>\n    </div>\n\n    <div class=\"col-xs-8 col-xs-offset-4 col-md-9 col-md-offset-3 main\">\n\n      <div *ngIf=\"isLoading\" class=\"loading-container\">\n        <img src=\"/assets/images/gears.gif\" alt=\"Loading bills\">\n      </div>\n\n    \t<div *ngIf=\"!isLoading\">\n\n        <div *ngIf=\"!hasBills\" class=\"no-bills-image-div text-center\">\n          <img src=\"/assets/images/clipart-huppy1.png\" alt=\"No Bills\" />\n          <br>\n          <h2 class=\"text-important\">Good job, all bills paid!</h2>\n        </div>\n\n        <div *ngIf=\"hasBills\" class=\"list-group bill-list\">\n          <h1>Pay a Bill</h1>\n          \n          <p>Select a bill to pay it</p>\n\n          <hr>\n\n      \t\t<div *ngFor=\"let bill of billsUnpaid\" (click)=\"payBill(bill._id)\" class=\"list-group-item row\">\n            <h4 class=\"list-group-item-heading\">{{ bill.name }}</h4>\n            <p class=\"list-group-item-text\">\n              Amount Due: {{ bill.amount | currency:'USD':true }}\n              <br>\n              Due this month on: {{ bill.customDueDate | date: 'MMM dd, yyyy' }}\n            </p>\n            <button type=\"button\" class=\"btn btn-success pull-right\">Pay</button>\n      \t\t</div>\n        </div>\n\n    \t</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row pad-top sidebar-row\">\n\n    <div class=\"col-xs-3 col-md-2 sidebar\">\n      <bill-sidebar></bill-sidebar>\n    </div>\n\n    <div class=\"col-xs-8 col-xs-offset-4 col-md-9 col-md-offset-3 main\">\n\n      <h1>Payment History</h1>\n\n      <p>Here is a list of all the payments you have made.</p>\n\n    \t<div class=\"list-group bill-list\">\n    \t\t<div *ngFor=\"let payment of payments\" class=\"list-group-item row\">\n          <h3 class=\"list-group-item-heading\">{{ payment.bill_name }}</h3>\n          <p class=\"list-group-item-text\">\n            Paid on: {{ payment.payment_date | date: 'MMM dd, yyyy' }}\n          </p>\n\n    \t\t</div>\n    \t</div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>BMS</h1>\n  <p>Track all of your bills and payment activity</p>\n  <p><a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/about-us']\" role=\"button\">Learn more</a></p>\n</div>\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\n  <h1>Login</h1>\n\n  <p>\n    Login with your bitbucket account.\n  </p>\n</div>\n\n<div class=\"container\">\n  <div class=\"row login-icons\">\n    <div class=\"text-center\"><a href=\"/auth/bitbucket\" class=\"login-wrapper\"><img src=\"assets/images/bitbucket.png\" alt=\"BitBucket Icon\"></a></div>\n    <div class=\"text-center\"><a href=\"/auth/twitter\" class=\"login-wrapper\">Twitter</a></div>\n  </div>\n</div>\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Notifications</h1>\n\n  <ul class=\"list-group\">\n    <li [ngClass]=\"{'list-group-item-danger': !n.read }\" *ngFor=\"let n of notifications; let i = index;\" (click)=\"markAsRead(i)\" class=\"list-group-item\">\n      <span *ngIf=\"!n.read\" class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span> {{ n.bill_name }}\n      <span class=\"pull-right\">{{ n.datedue | date: 'MMM dd, yyyy'}}</span>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngFor=\"let post of posts\">\n    <div class=\"card card-block\">\n      <h4 class=\"card-title\">{{ post.title }}</h4>\n      <p class=\"card-text\">{{post.body}}</p>\n      <a href=\"#\" class=\"card-link\">Card link</a>\n      <a href=\"#\" class=\"card-link\">Another link</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Bill Alert Settings</h1>\n    <p>Set up when you would like to recieve alerts reminding you of due dates.</p>\n\n    <form>\n      <div class=\"form-group\">\n        <label for=\"displayname\">Number of days before:</label>\n        <input type=\"text\" [(ngModel)]=\"daysBeforeNotice\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n      </div>\n\n      <button type=\"button\" (click)=\"saveSetting()\" class=\"btn btn-primary\">Save</button>\n      <a [routerLink]=\"['/home']\" class=\"btn btn-default\">Cancel</a>\n    </form>\n</div>\n"

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(397);


/***/ })

},[731]);
//# sourceMappingURL=main.bundle.js.map