import {Injectable} from 'angular2/core';
import {Fruit} from './fruit';
import {Headers,RequestOptions,Http,Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {HttpServices} from "../common/httpServices.service";
@Injectable()
export class FruitService{
  route='api/fruits';
constructor(private _http:HttpServices){

}
 
    save(fruit:Fruit){
      return this._http.save(fruit, this.route);
      
    }
    delete(id:string){
    return this._http.delete(id,this.route);
        
    }
    getFruits(){
      return this._http.get(this.route);
      
    }
}
