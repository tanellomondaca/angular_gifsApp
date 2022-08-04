import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root',
})
export class GifsService {
   private apiKey: string = 'UdHvJjW0ArSnFKBdt8Xi4AFTJZwklzTN';

   private _historial: string[] = [];

   get historial() {
      return [...this._historial];
   }

   constructor( private http: HttpClient ) {}


   buscarGifs(query: string) {
      query = query.trim().toLowerCase();
      console.log('query >>>', query);

      if (!this._historial.includes(query)) {
         this._historial.unshift(query);
         // Mostrar 10 elementos
         this._historial = this._historial.splice(0, 10);
      }

      this.http.get('https://api.giphy.com/v1/gifs/search?api_key=UdHvJjW0ArSnFKBdt8Xi4AFTJZwklzTN&q=cheeeseburger&limit=10')
         .subscribe( (resp: any) => {
            console.log(resp.data);

         });

      // fetch('https://api.giphy.com/v1/gifs/search?api_key=UdHvJjW0ArSnFKBdt8Xi4AFTJZwklzTN&q=cheeeseburger&limit=10')
      // .then(resp => {
      //    resp.json().then( data => {
      //       console.log(data);
      //    })
      // }).catch(err => { console.log( err); })


   }

}
