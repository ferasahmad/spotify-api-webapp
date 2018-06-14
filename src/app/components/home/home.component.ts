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
  isError: boolean;
  errorMessage: string;

  constructor(private sprotifyService: SpotifyService ) {
    // set loading
    this.loading = true;
    this.isError = false;



    this.sprotifyService
        .getNewReleases()
        .subscribe((dataResponse: any) => {
          this.nuevasCanciones = dataResponse;
          this.loading = false;
        }, (callbackError) => {
          this.errorMessage = callbackError.error.error.message;
          console.log(this.errorMessage);
          this.isError = true; 
        });
  }

  ngOnInit() {
  }

}
