import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from "../../app.component";
import { CargarscriptsService } from '../../Services/scripts/cargarscripts.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterLink, AppComponent]
})
export class HomeComponent {
  // constructor(private cargarscripts: CargarscriptsService) { }
  // ngOnInit(): void {
  //   this.cargarscripts.cargarScript('assets/js/custom.js').then(() => {
  //     console.log('Script cargado correctamente');
  //   }).catch(error => {
  //     console.error('Error al cargar el script:', error);
  //   });
  // }
}
