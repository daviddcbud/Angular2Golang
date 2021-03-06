import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from 'angular2/router';
import {FruitMainComponent} from "./fruits/fruit.main.component";
import {getUrl} from './cacheBuster';
import {SongsDashboardComponent} from './songs/songDashboard.component';
import {HttpServices} from "./common/httpServices.service";
@RouteConfig([
  {
    path:'/fruits/...',
    name:'Fruits',
    component:FruitMainComponent,
    useAsDefault:false
  },
  {
    path:'/songs/...',
    name:'Songs',
    component:SongsDashboardComponent,
    useAsDefault:true
  }

])

@Component({
  selector:'my-app',
  templateUrl:getUrl('views/index.html'),
  directives:[ROUTER_DIRECTIVES],
  providers:[ROUTER_PROVIDERS, HttpServices]
})

export class AppComponent
{

}
