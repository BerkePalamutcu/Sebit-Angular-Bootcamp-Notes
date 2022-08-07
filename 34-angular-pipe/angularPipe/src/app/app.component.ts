import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPipe';
  name: string = ''
  OnNameChange(value: string){
    this.name = value
  }
}
