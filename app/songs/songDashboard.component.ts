import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router'
import {getUrl} from '../cacheBuster';
import {SongsSearchComponent} from "./songsSearch.component";
@RouteConfig([{
   path:'/',
   name:'SongsSearch',
   component:SongsSearchComponent,
   useAsDefault:true
}])

@Component({
templateUrl:getUrl('/views/songs/dashboard.html'),
directives:[ROUTER_DIRECTIVES]
})
export class SongsDashboardComponent
{

}
