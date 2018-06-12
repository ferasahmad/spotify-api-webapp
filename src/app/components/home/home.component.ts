import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

paises: any[] = [];

  nuevasCanciones: any[] = [];

  constructor(private sprotifyService: SpotifyService ) {
    // set loading
    this.sprotifyService
        .getNewReleases()
        .subscribe( (dataResponse: any) => {
          this.nuevasCanciones = dataResponse.albums.items;
        });
  }

  ngOnInit() {
  }

}
