System.register(['angular2/core', 'angular2/router', './fruits.service', "./fruit.component", "./editFruit.component", './fruitColors.service', '../cacheBuster'], function(exports_1) {
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
    var core_1, router_1, fruits_service_1, fruit_component_1, editFruit_component_1, fruitColors_service_1, cacheBuster_1;
    var FruitMainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (fruits_service_1_1) {
                fruits_service_1 = fruits_service_1_1;
            },
            function (fruit_component_1_1) {
                fruit_component_1 = fruit_component_1_1;
            },
            function (editFruit_component_1_1) {
                editFruit_component_1 = editFruit_component_1_1;
            },
            function (fruitColors_service_1_1) {
                fruitColors_service_1 = fruitColors_service_1_1;
            },
            function (cacheBuster_1_1) {
                cacheBuster_1 = cacheBuster_1_1;
            }],
        execute: function() {
            FruitMainComponent = (function () {
                function FruitMainComponent() {
                }
                FruitMainComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'FruitsList',
                            component: fruit_component_1.FruitComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/:id',
                            name: 'EditFruit',
                            component: editFruit_component_1.FruitEditComponent
                        }
                    ]),
                    core_1.Component({
                        templateUrl: cacheBuster_1.getUrl('/views/fruits/fruit.main.component.html'),
                        providers: [fruits_service_1.FruitService, fruitColors_service_1.FruitColorService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FruitMainComponent);
                return FruitMainComponent;
            }());
            exports_1("FruitMainComponent", FruitMainComponent);
        }
    }
});
//# sourceMappingURL=fruit.main.component.js.map