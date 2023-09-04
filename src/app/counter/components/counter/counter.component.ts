import { Component } from '@angular/core';


@Component({
    selector: 'app-counter',
    template: `
    <h1>{{title}}</h1>
    <hr>
    <h1>{{counter}}</h1>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>

    <hr>
    `
  })
export class CounterComponent{

constructor(){
}

public title: string = 'Hola mundo';
public counter: number = 10;

increaseBy( value: number):void {
  this.counter += value;
}

resetCounter():void {
  this.counter = 10;
}

}
