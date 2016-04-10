System.register(['angular2/core', 'angular2/router', '../cacheBuster', "./songsSearch.component", "./editSong.component"], function(exports_1) {
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
    var core_1, router_1, cacheBuster_1, songsSearch_component_1, editSong_component_1;
    var SongsDashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (cacheBuster_1_1) {
                cacheBuster_1 = cacheBuster_1_1;
            },
            function (songsSearch_component_1_1) {
                songsSearch_component_1 = songsSearch_component_1_1;
            },
            function (editSong_component_1_1) {
                editSong_component_1 = editSong_component_1_1;
            }],
        execute: function() {
            SongsDashboardComponent = (function () {
                function SongsDashboardComponent(_router) {
                    this._router = _router;
                }
                SongsDashboardComponent.prototype.newSong = function () {
                    this._router.navigate(['EditSong', { id: null }]);
                };
                SongsDashboardComponent = __decorate([
                    router_1.RouteConfig([{
                            path: '/',
                            name: 'SongsSearch',
                            component: songsSearch_component_1.SongsSearchComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/:id',
                            name: 'EditSong',
                            component: editSong_component_1.EditSongComponent
                        }
                    ]),
                    core_1.Component({
                        templateUrl: cacheBuster_1.getUrl('/views/songs/dashboard.html'),
                        styleUrls: [cacheBuster_1.getUrl('/css/songs.css')],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], SongsDashboardComponent);
                return SongsDashboardComponent;
            }());
            exports_1("SongsDashboardComponent", SongsDashboardComponent);
        }
    }
});
//# sourceMappingURL=songDashboard.component.js.map