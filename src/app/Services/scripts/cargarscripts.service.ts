import { HttpClient } from '@angular/common/http';
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarscriptsService {
  private renderer: Renderer2;
  constructor(private httpClient: HttpClient, private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }
  cargarScript(url: string) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(url, { responseType: 'text' }).subscribe(
        script => {
          const scriptElement = this.renderer.createElement('script');
          scriptElement.text = script;
          this.renderer.appendChild(document.body, scriptElement);
          resolve(true);
        },
        error => {
          reject(error);
        }
      );
    });
  }
}
