import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from 'angular2/router';
import {FruitService} from './fruits.service';
import {FruitComponent} from "./fruit.component"
import {FruitEditComponent} from "./editFruit.component";
import {FruitColorService} from './fruitColors.service';
import {getUrl} from '../cacheBuster';
@RouteConfig([
  {
    path:'/',
    name:'FruitsList',
    component:FruitComponent,
    useAsDefault:true
  },
  {
    path:'/:id',
    name:'EditFruit',
    component:FruitEditComponent
  }
]
)

@Component({
  templateUrl:getUrl('/views/fruits/fruit.main.component.html'),
providers:[FruitService,FruitColorService],
directives:[ROUTER_DIRECTIVES]
})
export class FruitMainComponent{

}
