System.register(["angular2/core", 'angular2/http', 'rxjs/Rx'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1;
    var HttpServices;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            HttpServices = (function () {
                function HttpServices(_http) {
                    this._http = _http;
                }
                HttpServices.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                HttpServices.prototype.post = function (data, url) {
                    var body = JSON.stringify(data);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post(url, body, options).
                        map(function (res) { return res.json(); }).
                        catch(this.handleError);
                };
                HttpServices.prototype.delete = function (id, url) {
                    return this._http.delete(url + '/' + id).
                        map(function (res) { return res.json(); }).
                        catch(this.handleError);
                };
                HttpServices.prototype.get = function (url) {
                    return this._http.get(url).
                        map(function (res) { return res.json(); }).
                        do(function (data) { return console.log(JSON.stringify(data)); }).
                        catch(this.handleError);
                };
                HttpServices = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HttpServices);
                return HttpServices;
            }());
            exports_1("HttpServices", HttpServices);
        }
    }
});
//# sourceMappingURL=httpServices.service.js.map