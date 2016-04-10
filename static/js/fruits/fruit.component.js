System.register(['angular2/core', 'angular2/router', './fruits.service', '../cacheBuster'], function(exports_1, context_1) {
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
    var core_1, router_1, fruits_service_1, cacheBuster_1;
    var FruitComponent;
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
            }],
        execute: function() {
            FruitComponent = (function () {
                function FruitComponent(_router, _service) {
                    this._router = _router;
                    this._service = _service;
                }
                FruitComponent.prototype.ngOnInit = function () {
                    this.getFruits();
                };
                FruitComponent.prototype.goToFruit = function (id) {
                    var link = ['EditFruit', { id: id }];
                    this._router.navigate(link);
                };
                FruitComponent.prototype.deleteFruit = function (f) {
                    var _this = this;
                    this._service.delete(f.id).subscribe(function (s) {
                        _this.fruits.splice(_this.fruits.indexOf(s), 1);
                    });
                };
                FruitComponent.prototype.editFruit = function (f) {
                    this.goToFruit(f.id);
                };
                FruitComponent.prototype.newFruit = function () {
                    this.goToFruit("");
                };
                FruitComponent.prototype.getFruits = function () {
                    var _this = this;
                    this._service.getFruits().subscribe(function (f) {
                        _this.fruits = f;
                    }, function (error) { return console.log('error ', error); });
                };
                FruitComponent = __decorate([
                    core_1.Component({
                        templateUrl: cacheBuster_1.getUrl('/views/fruits/fruit.component.html')
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, fruits_service_1.FruitService])
                ], FruitComponent);
                return FruitComponent;
            }());
            exports_1("FruitComponent", FruitComponent);
        }
    }
});
//# sourceMappingURL=fruit.component.js.map