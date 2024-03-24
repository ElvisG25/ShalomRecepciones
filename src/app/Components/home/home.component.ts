import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppComponent } from "../../app.component";
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

interface Item {
  nombres: string,
  valorizacion: string,
  comentario: string,
};
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterLink, AppComponent, RouterOutlet,CommonModule]
})
export class HomeComponent {
  item$: Observable<Item[]>;
  firestore: Firestore = inject(Firestore);
  constructor() {
    const itemCollection = collection(this.firestore, 'Comentarios');
    this.item$ = collectionData(itemCollection) as Observable<Item[]>;
  }
}
