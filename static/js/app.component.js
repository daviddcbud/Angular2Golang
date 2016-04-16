System.register(['angular2/core', 'angular2/router', "./fruits/fruit.main.component", './cacheBuster', './songs/songDashboard.component', "./common/httpServices.service"], function(exports_1) {
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
    var core_1, router_1, fruit_main_component_1, cacheBuster_1, songDashboard_component_1, httpServices_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (fruit_main_component_1_1) {
                fruit_main_component_1 = fruit_main_component_1_1;
            },
            function (cacheBuster_1_1) {
                cacheBuster_1 = cacheBuster_1_1;
            },
            function (songDashboard_component_1_1) {
                songDashboard_component_1 = songDashboard_component_1_1;
            },
            function (httpServices_service_1_1) {
                httpServices_service_1 = httpServices_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/fruits/...',
                            name: 'Fruits',
                            component: fruit_main_component_1.FruitMainComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/songs/...',
                            name: 'Songs',
                            component: songDashboard_component_1.SongsDashboardComponent
                        }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: cacheBuster_1.getUrl('views/index.html'),
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, httpServices_service_1.HttpServices]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map