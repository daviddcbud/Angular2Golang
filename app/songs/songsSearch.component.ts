import {Component,OnInit } from "angular2/core"
import {getUrl} from "../cacheBuster"
import {SpinnerComponent} from '../common/spinner.component';
@Component({
  templateUrl:getUrl('/views/songs/search.html'),
  directives: [SpinnerComponent] 
  }
)
export class SongsSearchComponent implements OnInit{
   searchText:string;
   isSearching:boolean;
   ngOnInit(){
      this.searchText="testing";
   }
   
   search() {
       this.isSearching=true;
   }
   
   
}
