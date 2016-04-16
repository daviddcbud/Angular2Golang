import {Injectable} from "angular2/core";
import {Http,RequestOptions,Headers} from  "angular2/http";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable"
import {Song} from "./song";
import {HttpServices} from "../common/httpServices.service";
@Injectable()
export class SongService{
    
    constructor(private _http:Http, private _httpServices:HttpServices){
        
    }
    search(searchFor:string) :Observable<Song[]> {
        var body={searchText: searchFor};
        let headers=new Headers({'Content-Type':'application/json'});
      let options= new RequestOptions({headers:headers});

        return this._http.post('/api/searchSong',JSON.stringify(body),options).
        map(res=> res.json()).
        do(data=> console.log('searched ',JSON.stringify(data))).
        catch(this._httpServices.handleError);
        
    }
}