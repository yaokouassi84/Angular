import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  // Exemple de méthode dans le service
  getMessage(): string {
    return 'Ceci est un message depuis le service.';
  }
}
