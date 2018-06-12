import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    this.getNewReleases();
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQA2NRFHoJRHFg9OmGjlNwXqiKauAzKILCXybOJbDLfKm7zZGuSZ-Wnbn0A3sra6OL53teyx5cSTWzBDBqw'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
