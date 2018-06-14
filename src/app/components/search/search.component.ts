import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  loading: boolean;
  artistas: any[] = [];
  isError: boolean;
  errorMessage: string;

  constructor(private spotifyService: SpotifyService) { }

  buscar(termino: string) {
    this.loading = true;
    this.spotifyService
        .getArtistas(termino)
        .subscribe( dataResponse => {
            this.artistas = dataResponse;
            this.loading = false; 
        }, (errorResponse) => {
          this.errorMessage = errorResponse.error.error.message;
          this.isError = true;
          this.loading = false;
        });
  }

}
