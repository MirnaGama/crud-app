import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/shared/models';
import { CrudAnimeService } from 'src/app/shared/services/crud-anime.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

 
  animeList: Anime[];
  filtroListagem: FormGroup;
  title: string = '';
  director: string = '';
  studio: string = '';

  constructor(private animeService: CrudAnimeService, private fb: FormBuilder) {
   }

  ngOnInit() {
   this.filtroListagem = this.fb.group({
     title: [''],
     studio: [''],
     director: ['']
   })

   this.filtroListagem.get('title').valueChanges.subscribe((val: string) => {
    this.title = val;

    this.searchAnime();
   });

   this.filtroListagem.get('director').valueChanges.subscribe((val: string) => {
     this.director = val;

     this.searchAnime();
   })

   this.filtroListagem.get('studio').valueChanges.subscribe((val: string) => {
     this.studio = val;

     this.searchAnime();
   })

   this.selectAll();

  }

  private selectAll() {
    return this.animeService.selectAll().subscribe((animeList: Anime[]) => this.animeList = animeList);
  }

  private searchAnime() {
    return this.animeService.search(this.title, this.director, this.studio).subscribe((animeList: Anime[]) => this.animeList = animeList);
  }

}
