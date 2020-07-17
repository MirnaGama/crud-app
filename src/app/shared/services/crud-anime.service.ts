import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Anime } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CrudAnimeService {

  private hostUrl = "http://localhost:3000/animes/"
  constructor(private http: HttpClient) { }

  insert(anime: Anime): Observable<Anime> {
    return this.http.post<Anime>(this.hostUrl, anime);
  }

}
