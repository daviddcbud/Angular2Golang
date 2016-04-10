import {Component,OnInit} from "angular2/core";
import {NgForm} from "angular2/common";
import {getUrl} from "../cacheBuster";
import {RouteParams} from "angular2/router";
import {Song} from "./song";
import {SpinnerComponent} from "../common/spinner.component";
import {HttpServices} from "../common/httpServices.service";
@Component({
    templateUrl:getUrl('/views/songs/editSong.html'),
    directives:[SpinnerComponent]
})
export  class EditSongComponent implements OnInit{
   song:Song;
   route='/api/songs';
   isSaving:boolean;
   constructor(private _routeParams:RouteParams, private _http:HttpServices){
       
   }
   save(){
       this.isSaving=true;
       this._http.save(this.song,this.route).subscribe(x=>{
           this.isSaving=false;
           
       });
   }
   ngOnInit(){
       let id= this._routeParams.get('id');
      this.song=new Song();   
      this.song.id=id;
   }
}