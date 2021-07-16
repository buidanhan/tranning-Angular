
import { Component, Input, VERSION } from "@angular/core";
@Component({
  selector: "app-hello",
  template: '<h4>Hello {{name}}!</h4>',
})
export class HelloComponent {
  @Input() name: string;
  constructor(){
    this.name = '';
  }
}