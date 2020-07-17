import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudAnimeService {

  private hostUrl = "https://localhost:3000/anime"
  constructor() { }
}
