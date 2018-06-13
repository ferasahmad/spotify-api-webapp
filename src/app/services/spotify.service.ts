import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  token = 'BQDJFo9x9CeOVKGP0i5TPQprU0E1ikRux61X9RuV57KBSbl2nbWMqt6D0poNdFrBTSVBhw2LGWHzR89LmdQ';

  constructor(private http: HttpClient) {
    this.getNewReleases();
  }

  getQuery(query: String){
    setTimeout(1000);
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.token}`
    });

    return this.http.get(url, {headers});
  }
  
  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
        .pipe(map(data => data['albums'].items));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
        .pipe(map(data => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

}
