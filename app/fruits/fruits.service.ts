import {Injectable} from 'angular2/core';
import {Fruit} from './fruit';
import {Headers,RequestOptions,Http,Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class FruitService{
constructor(private _http:Http){

}
private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
    save(fruit:Fruit){
      let body=JSON.stringify(fruit);
      let headers=new Headers({'Content-Type':'application/json'});
      let options= new RequestOptions({headers:headers});

      return this._http.post('/api/fruits',body,options).
      map(res=><Fruit>res.json().data).
      catch(this.handleError);
    }
    delete(id:string){

        return this._http.delete('/api/fruits/' + id).
        map(res=>res.json().data).
        catch(this.handleError);
    }
    getFruits(){
      return this._http.get('/api/fruits').
      map(res=><Fruit[]>res.json()).
      catch(this.handleError);
    }
}
