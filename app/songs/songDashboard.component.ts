import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES,Router} from 'angular2/router'
import {getUrl} from '../cacheBuster';
import {SongsSearchComponent} from "./songsSearch.component";
import {EditSongComponent} from "./editSong.component";
@RouteConfig([{
   path:'/',
   name:'SongsSearch',
   component:SongsSearchComponent,
   useAsDefault:true
},
{
 path:'/:id',
 name:'EditSong',
 component:EditSongComponent
}
])

@Component({
templateUrl:getUrl('/views/songs/dashboard.html'),
styleUrls:[getUrl('/css/songs.css')],
directives:[ROUTER_DIRECTIVES]
})
export class SongsDashboardComponent
{
 constructor(private _router:Router){
    
 }
 newSong(){
    this._router.navigate(['EditSong', {id:null}]);
 }
}
