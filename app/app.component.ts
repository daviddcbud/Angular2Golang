import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from 'angular2/router';
import {FruitMainComponent} from "./fruits/fruit.main.component";
import {getUrl} from './cacheBuster';
import {SongsDashboardComponent} from './songs/songDashboard.component';
@RouteConfig([
  {
    path:'/fruits/...',
    name:'Fruits',
    component:FruitMainComponent,
    useAsDefault:true
  },
  {
    path:'/songs/...',
    name:'Songs',
    component:SongsDashboardComponent
  }

])

@Component({
  selector:'my-app',
  templateUrl:getUrl('views/index.html'),
  directives:[ROUTER_DIRECTIVES],
  providers:[ROUTER_PROVIDERS]
})

export class AppComponent
{

}
