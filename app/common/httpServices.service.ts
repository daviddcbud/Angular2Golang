import {Injectable} from "angular2/core";
import {Headers,RequestOptions,Http,Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class HttpServices{
constructor(private _http:Http){

}
 handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }


    post(data:any, url:string){
      let body=JSON.stringify(data);
      let headers=new Headers({'Content-Type':'application/json'});
      let options= new RequestOptions({headers:headers});

      return this._http.post(url,body,options).
      map(res=>res.json()).
      catch(this.handleError);
    }
    delete(id:string, url:string){

        return this._http.delete(url + '/' +  id).
        map(res=>res.json()).
        catch(this.handleError);
    }
    
    get(url:string){
      return this._http.get(url).
      map(res=>res.json()).
      do(data=> console.log(JSON.stringify(data))).
      catch(this.handleError);
    }
}
