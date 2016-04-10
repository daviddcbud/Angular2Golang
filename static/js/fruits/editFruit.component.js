System.register(["angular2/core", 'angular2/router', "./fruits.service", '../cacheBuster', './fruitColors.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, fruits_service_1, cacheBuster_1, fruitColors_service_1;
    var FruitEditComponent;
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
            function (cacheBuster_1_1) {
                cacheBuster_1 = cacheBuster_1_1;
            },
            function (fruitColors_service_1_1) {
                fruitColors_service_1 = fruitColors_service_1_1;
            }],
        execute: function() {
            FruitEditComponent = (function () {
                function FruitEditComponent(_routeParams, _service, _colors) {
                    this._routeParams = _routeParams;
                    this._service = _service;
                    this._colors = _colors;
                    this.colors = new Array();
                }
                FruitEditComponent.prototype.onSubmit = function () {
                    this._service.save(this.model).subscribe(function (f) { return console.log(f); }, function (error) { return console.log('error ', error); });
                };
                FruitEditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this.model.id = id;
                    console.log('id is ', id);
                    this._colors.getColors().subscribe(function (x) { return _this.colors = x; });
                };
                FruitEditComponent = __decorate([
                    core_1.Component({
                        templateUrl: cacheBuster_1.getUrl('/views/fruits/editFruit.component.html'),
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, fruits_service_1.FruitService, fruitColors_service_1.FruitColorService])
                ], FruitEditComponent);
                return FruitEditComponent;
            }());
            exports_1("FruitEditComponent", FruitEditComponent);
        }
    }
});
//# sourceMappingURL=editFruit.component.js.map