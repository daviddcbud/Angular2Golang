System.register(["angular2/core", "angular2/http", "rxjs/Rx", "../common/httpServices.service"], function(exports_1) {
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
    var core_1, http_1, httpServices_service_1;
    var SongService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (httpServices_service_1_1) {
                httpServices_service_1 = httpServices_service_1_1;
            }],
        execute: function() {
            SongService = (function () {
                function SongService(_http, _httpServices) {
                    this._http = _http;
                    this._httpServices = _httpServices;
                }
                SongService.prototype.search = function (searchFor) {
                    var body = { searchText: searchFor };
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post('/api/searchSong', JSON.stringify(body), options).
                        map(function (res) { return res.json(); }).
                        do(function (data) { return console.log('searched ', JSON.stringify(data)); }).
                        catch(this._httpServices.handleError);
                };
                SongService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, httpServices_service_1.HttpServices])
                ], SongService);
                return SongService;
            }());
            exports_1("SongService", SongService);
        }
    }
});
//# sourceMappingURL=songs.service.js.map