import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  name = 'Angular TODO Application';
  constructor() {
    this.changeName('Jonh');
  }
  changeName(name: string): void {
    this.name = name;
  }
}
