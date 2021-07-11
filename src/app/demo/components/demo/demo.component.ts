import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Inicio de el componente
  }

  title = 'platzi-store';

  items = ['patrick', 'elizabeth', 'bruno'];

  power = 10;

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  // Ejercicio agregar lo que contenga el input
  fruit = 'aniade una fruta';
  input = '';
  fruits = ['🍉', '🍑', '🌶', '🍎'];
  addFruit() {
    this.fruits.push(this.fruit);
  }
  deleteFruit(index: number) {
    this.fruits.splice(index, 1);
  }

}
