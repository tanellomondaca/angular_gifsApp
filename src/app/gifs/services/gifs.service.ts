import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
   providedIn: 'root',
})
export class GifsService {
   private apiKey: string = 'UdHvJjW0ArSnFKBdt8Xi4AFTJZwklzTN';
   private _historial: string[] = [];

   public resultados: Gif[] = [];

   get historial() {
      return [...this._historial];
   }

   constructor(private http: HttpClient) {
      // this._historial = localStorage.getItem('historial');

      if (localStorage.getItem('historial')) {
         this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
      }
      if (localStorage.getItem('resultados')) {
         this.resultados =
            JSON.parse(localStorage.getItem('resultados')!) || [];
      }
   }

   buscarGifs(query: string) {
      query = query.trim().toLowerCase();
      console.log('query >>>', query);

      if (!this._historial.includes(query)) {
         this._historial.unshift(query);
         // Mostrar 10 elementos
         this._historial = this._historial.splice(0, 10);

         localStorage.setItem('historial', JSON.stringify(this._historial));
      }

      this.http
         .get<SearchGifsResponse>(
            `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`
         )
         .subscribe((resp) => {
            console.log(resp.data);
            this.resultados = resp.data;

            localStorage.setItem('resultados', JSON.stringify(this.resultados));
         });
   }
}
