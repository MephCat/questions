import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-bind-apply',
  templateUrl: './call-bind-apply.component.html',
  styleUrls: ['./call-bind-apply.component.scss']
})
export class CallBindApplyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initJs();
  }
  initJs() {
    function hello() {
      console.log('Hello', this);
    }
    const person = {
      name: 'Vld',
      age: 25,
      sayHello: hello,
      sayHelloWindow: hello.bind(window),
      logInfo: () => {
        // @ts-ignore
        console.log(`Name is ${this.name}`);
      }
    };
    console.log(person.sayHello());
    console.log(person.sayHelloWindow());
  }

}
