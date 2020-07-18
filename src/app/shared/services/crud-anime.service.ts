import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  selectAll(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.hostUrl);
  }

  search(title:string, director:string, studio: string): Observable<Anime[]> {
    let httpParams = new HttpParams();

    httpParams = httpParams.set('_sort', 'title');
    httpParams = httpParams.set('_order', 'asc');

    if (title) {
    httpParams = httpParams.set('title_like', title)
    } 

    if (director) {
    httpParams = httpParams.set('director_like', director)
    }

    if (studio) {
    httpParams = httpParams.set('studio_like', studio)
    }

    return this.http.get<Anime[]>(this.hostUrl, {params: httpParams});
  }
}
