import {Component,OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {FruitService} from './fruits.service';
import {Fruit} from './fruit';
import {getUrl} from '../cacheBuster';


@Component({
  templateUrl:getUrl('/views/fruits/fruit.component.html')
})

export class FruitComponent implements OnInit{
  fruits: Fruit[];
constructor(private _router:Router, private _service:FruitService){

}
ngOnInit(){
  this.getFruits();
}

goToFruit(id:string){
  let link=['EditFruit',{id:id}]  ;
  this._router.navigate(link);
}
deleteFruit(f:Fruit){
  this._service.delete(f.id).subscribe(s=>
    {
      this.fruits.splice(this.fruits.indexOf(s),1);
    }
  );
}
editFruit(f:Fruit){
  this.goToFruit(f.id);
}
  newFruit(){
      this.goToFruit("");
  }

  getFruits(){
    this._service.getFruits().subscribe(

      f=> {

      this.fruits=f
    },
      error=>console.log('error ',error)
    );

  }
}
