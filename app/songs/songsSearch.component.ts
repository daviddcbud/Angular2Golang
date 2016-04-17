import {Component,OnInit } from "angular2/core"
import {getUrl} from "../cacheBuster"
import {SpinnerComponent} from '../common/spinner.component';
import {SongService} from "./songs.service";
import {Song} from "./song";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {SongDetailsComponent} from "./songDetails.component";
@Component({
  templateUrl:getUrl('/views/songs/search.html'),
  directives: [SpinnerComponent,ROUTER_DIRECTIVES,SongDetailsComponent] ,
  providers:[SongService],
  styleUrls:[getUrl('css/songs.css')]
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
   closeDetails(song:Song){
       song.showDetails=false;
   }
   selectSong(song:Song){
       this.songs.forEach(s=>
       {s.isSelected=false;
       s.showDetails=false;
       });
       song.isSelected=true;
       song.showDetails=true;
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
