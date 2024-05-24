import { Component } from '@angular/core';
import { ClientService } from '../client.service'; // Importez le service ClientService

@Component({
  selector: 'app-todolist',
  template: `
    <div>{{ listName }}</div>
<p>{{ message }}</p>
<ul>
  <li *ngFor="let todo of todos">
    {{ todo }}
  </li>
</ul>
  `,
  /*styleUrls: ['./todolist.component.css']*/
})
export class TodolistComponent {
  listName = "Ma Todo Liste";
  todos: string[] = [];
  message: string;

  constructor(private clientService: ClientService) {
    this.message = this.clientService.getMessage(); // Utilisez clientService au lieu de myService
    this.fillTodos(); // Appelez la méthode pour remplir la liste todos
  }

  fillTodos() {
    // Remplissage de la liste todos
    this.todos.push("Acheter du lait");
    this.todos.push("Faire du sport");
    this.todos.push("Lire un livre");
  }
}
