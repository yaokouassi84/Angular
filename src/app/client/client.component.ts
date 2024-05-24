import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  currentTime: Date = new Date(); // Initialisation de currentTime

  constructor() {
    setInterval(() => this.updateTime(), 1000); // Met à jour l'heure toutes les secondes
  }

  updateTime() {
    this.currentTime = new Date();
  }
}
