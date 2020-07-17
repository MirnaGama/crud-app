import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Anime } from 'src/app/shared/models';
import { CrudAnimeService } from 'src/app/shared/services/crud-anime.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  cadastroAnime: FormGroup;
  
  constructor(private fb: FormBuilder, private animeService: CrudAnimeService) { }


  get f() {
    return this.cadastroAnime.controls;
  }

  ngOnInit(): void {
    this.cadastroAnime = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      episodes: ['', [Validators.required, Validators.min(1)]],
      director: ['', [Validators.required, Validators.minLength(1)]],
      studio: ['', [Validators.required, Validators.minLength(1)]]
   })
  }


  submit(): void {
    this.cadastroAnime.markAllAsTouched();
    if (this.cadastroAnime.invalid) {
      console.log("FORMULÁRIO INVÁLIDO!");
      return;
    } else {
      console.log("Enviando...\n \n" + JSON.stringify(this.cadastroAnime.value, null, 4));

      const anime = this.cadastroAnime.getRawValue() as Anime;
      this.insert(anime);
      
      this.restart();
    }
  }

  restart(): void {
     this.cadastroAnime.reset();
  }

  /// CRUD ////
  private insert(anime: Anime): void {
    this.animeService.insert(anime).subscribe(data=> {
      console.log(data);
    }, 
    err => {
      console.log("ERRO: "+err);
    })
  }
  

}
