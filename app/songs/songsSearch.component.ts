import {Component,OnInit } from "angular2/core"
import {getUrl} from "../cacheBuster"
import {SpinnerComponent} from '../common/spinner.component';
import {SongService} from "./songs.service";
import {Song} from "./song";
@Component({
  templateUrl:getUrl('/views/songs/search.html'),
  directives: [SpinnerComponent] ,
  providers:[SongService]
  }
)
export class SongsSearchComponent implements OnInit{
   searchText:string;
   isSearching:boolean;
   songs: Song[];
   constructor(private _service:SongService){
       
   }
   ngOnInit(){
      this.searchText="testing";
   }
   
   search() {
       this.isSearching=true;
       this._service.search(this.searchText).subscribe(x=>
       {
           
           this.songs= x;
           this.isSearching=false;
       }
       );
   }
   
   
}
