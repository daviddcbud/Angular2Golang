import {Component,Input,OnInit} from "angular2/core";
import {NgForm} from 'angular2/common';
import {Fruit} from './fruit';
import {RouteParams} from 'angular2/router';
import {FruitService} from "./fruits.service";
import {getUrl} from '../cacheBuster';
import {FruitColorService} from './fruitColors.service';
@Component({
  templateUrl:getUrl('/views/fruits/editFruit.component.html'),

})

export class FruitEditComponent implements OnInit {
  model : Fruit;
  colors= new Array<Fruit>();
  onSubmit(){

    this._service.save(this.model).subscribe(
      f=>console.log(f),
      error=>console.log('error ',error)
    );
  }
  constructor(private _routeParams:RouteParams, private _service:FruitService, private _colors:FruitColorService){

  }
  ngOnInit(){
    let id= this._routeParams.get('id');
    this.model.id=id;
    console.log('id is ',id);
    this._colors.getColors().subscribe(x=> this.colors=x);
  }
}
