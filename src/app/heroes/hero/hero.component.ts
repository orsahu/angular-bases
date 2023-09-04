import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string   = 'ironman';
  public age:  number   = 45;

  get capitalizedname():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${ this.name } - ${ this.age }`;
  }

  changeName():void{
    this.name = 'Spiderman'
  }

  changeAge(){
    this.age = 25;
  }

  resertForm():void{
    this.name = 'ironman';
    this.age = 45;
  }

}
