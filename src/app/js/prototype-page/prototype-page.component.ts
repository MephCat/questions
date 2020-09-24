import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prototype-page',
  templateUrl: './prototype-page.component.html',
  styleUrls: ['./prototype-page.component.scss']
})
export class PrototypePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.protoFun();
  }

  protoFun(): void {
    const person = {
      name: 'Max',
      age: 25,
      greet: () => {
        console.log('Greet!');
      }
    };
    // __proto__
    console.log(person.toString());

    const person2 = new Object({
      name: 'Miha',
      age: 28,
      greet: () => {
        console.log('Greet Miha!');
      }
    });
    // @ts-ignore
    Object.prototype.sayHello = () => {
      console.log('Say hello');
    };
    // @ts-ignore
    person2.sayHello();

    const lena = Object.create(person2);
    console.log(lena);
    // {}
    // __proto__ == persona2
    lena.name = 'Lena';
    console.log(lena);
    // {name: 'Lena'}
  }
}
