System.register(["angular2/core", "../cacheBuster", "angular2/router", "./song", "../common/spinner.component", "../common/httpServices.service"], function(exports_1) {
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
    var core_1, cacheBuster_1, router_1, song_1, spinner_component_1, httpServices_service_1;
    var EditSongComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cacheBuster_1_1) {
                cacheBuster_1 = cacheBuster_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (song_1_1) {
                song_1 = song_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (httpServices_service_1_1) {
                httpServices_service_1 = httpServices_service_1_1;
            }],
        execute: function() {
            EditSongComponent = (function () {
                function EditSongComponent(_routeParams, _http) {
                    this._routeParams = _routeParams;
                    this._http = _http;
                    this.route = '/api/songs';
                }
                EditSongComponent.prototype.save = function () {
                    var _this = this;
                    this.isSaving = true;
                    this._http.save(this.song, this.route).subscribe(function (x) {
                        _this.isSaving = false;
                    });
                };
                EditSongComponent.prototype.ngOnInit = function () {
                    var id = this._routeParams.get('id');
                    this.song = new song_1.Song();
                    this.song.id = id;
                };
                EditSongComponent = __decorate([
                    core_1.Component({
                        templateUrl: cacheBuster_1.getUrl('/views/songs/editSong.html'),
                        directives: [spinner_component_1.SpinnerComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, httpServices_service_1.HttpServices])
                ], EditSongComponent);
                return EditSongComponent;
            }());
            exports_1("EditSongComponent", EditSongComponent);
        }
    }
});
//# sourceMappingURL=editSong.component.js.map