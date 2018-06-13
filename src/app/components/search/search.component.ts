import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  loading: boolean;
  artistas: any[] = [];

  constructor(private spotifyService: SpotifyService) { }

  buscar(termino: string) {
    this.loading = true;
    this.spotifyService
        .getArtistas(termino)
        .subscribe( dataResponse => {
            this.artistas = dataResponse;
            this.loading = false; 
        });
  }

}
