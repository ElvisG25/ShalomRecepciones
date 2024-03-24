import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { collectionData, Firestore, collection } from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';
// import { Firestore, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

interface Item {
  nombres: string,
  valorizacion: string,
  comentario: string,
};
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shalom';
  item$: Observable<Item[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'Comentarios');
    this.item$ = collectionData(itemCollection) as Observable<Item[]>;
  }
}
