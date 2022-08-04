import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
   selector: 'app-sidebar',
   templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
   // Obtener el historial de el servicio
   get historial() {
      return this.gifsService.historial;
   }

   // Inyectar el servicio
   constructor(private gifsService: GifsService) {}

   ngOnInit(): void {}

   buscar(termino: string) {
      this.gifsService.buscarGifs(termino);
   }
}
