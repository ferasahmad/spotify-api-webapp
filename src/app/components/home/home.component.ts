import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

paises: any[] = [];

  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor(private sprotifyService: SpotifyService ) {
    // set loading
    this.loading = true;

    this.sprotifyService
        .getNewReleases()
        .subscribe( (dataResponse: any) => {
          this.nuevasCanciones = dataResponse;
          this.loading = false;
        });
  }

  ngOnInit() {
  }

}
