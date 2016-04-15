import {Component,OnInit } from "angular2/core"
import {getUrl} from "../cacheBuster"
import {SpinnerComponent} from '../common/spinner.component';
import {HttpServices} from "../common/httpServices.service";
import {Song} from "./song";
@Component({
  templateUrl:getUrl('/views/songs/search.html'),
  directives: [SpinnerComponent] 
  }
)
export class SongsSearchComponent implements OnInit{
   searchText:string;
   isSearching:boolean;
   songs: Song[];
   constructor(private _http:HttpServices){
       
   }
   ngOnInit(){
      this.searchText="testing";
   }
   
   search() {
       this.isSearching=true;
       this._http.post({searchText: this.searchText},'/api/searchSong').subscribe(x=>
       {
           console.log(x);
           this.songs= x;
           this.isSearching=false;
       }
       );
   }
   
   
}
