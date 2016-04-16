System.register(['angular2/core', './fruitColor', 'rxjs/Rx'], function(exports_1) {
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
    var core_1, fruitColor_1, Rx_1;
    var FruitColorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (fruitColor_1_1) {
                fruitColor_1 = fruitColor_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            FruitColorService = (function () {
                function FruitColorService() {
                    this.colors = new Array();
                }
                FruitColorService.prototype.getColors = function () {
                    var _this = this;
                    var color = new fruitColor_1.FruitColor();
                    color.id = "123";
                    color.name = "Orange";
                    this.colors.push(color);
                    color = new fruitColor_1.FruitColor();
                    color.id = "1243";
                    color.name = "Red";
                    this.colors.push(color);
                    return new Rx_1.Observable(function (observer) { return _this.colorObserver = observer; })
                        .startWith(this.colors)
                        .share();
                };
                FruitColorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FruitColorService);
                return FruitColorService;
            }());
            exports_1("FruitColorService", FruitColorService);
        }
    }
});
//# sourceMappingURL=fruitColors.service.js.map