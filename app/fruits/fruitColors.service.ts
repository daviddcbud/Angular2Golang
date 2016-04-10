import {Injectable} from 'angular2/core';
import {FruitColor} from './fruitColor';
import {Observable,Observer} from 'rxjs/Rx';
@Injectable()
export class FruitColorService
{
    colors=new Array<FruitColor>();
 colorStream:Observable<FruitColor[]>;
 colorObserver:Observer<FruitColor[]>;
getColors(): Observable<FruitColor[]>{
  var color: FruitColor;
  color.id="123";
  color.name="Orange";
  this.colors.push(color);
  var color: FruitColor;
  color.id="1243";
  color.name="Red";
  this.colors.push(color);
  return new Observable(observer => this.colorObserver = observer)
                        .startWith(this.colors)
                        .share();

}
}
