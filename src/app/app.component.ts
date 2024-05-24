import { Component } from '@angular/core';

@Component({
  selector: 'my-first-app',
  template: `
    <h1>Bonjour, comment vas-tu ?</h1>
    <app-personne></app-personne>
    <app-client></app-client>
    <app-todolist></app-todolist>
  `
})
export class AppComponent {
  title = 'Web';
}
