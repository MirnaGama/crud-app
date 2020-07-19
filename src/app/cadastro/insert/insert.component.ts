import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Anime } from 'src/app/shared/models';
import { CrudAnimeService } from 'src/app/shared/services/crud-anime.service';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  cadastroAnime: FormGroup;
  id: number;
  
  constructor(private fb: FormBuilder, private router: Router,  private activRoute: ActivatedRoute, private animeService: CrudAnimeService) { }


  get f() {
    return this.cadastroAnime.controls;
  }

  ngOnInit(): void {

    this.id = this.activRoute.snapshot.params['id'];


    if (this.id) {
      this.animeService.searchById(this.id).subscribe(
        (anime: Anime) => this.createForm(anime))
    } else {
      this.emptyForm();
    } 

  }


  submit(): void {
    this.cadastroAnime.markAllAsTouched();
    if (this.cadastroAnime.invalid) {
      return;
    } else {
      
      const anime = this.cadastroAnime.getRawValue() as Anime;

      if (this.id) {
        this.update(anime);
      } else {
      this.insert(anime);
      }
      
      this.restart();
    }
  }

  restart(): void {
     this.cadastroAnime.reset();
  }

  return() {
    this.router.navigateByUrl('anime');
  }


  private emptyForm() {
    this.cadastroAnime = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      episodes: ['', [Validators.required, Validators.min(1)]],
      director: ['', [Validators.required, Validators.minLength(1)]],
      studio: ['', [Validators.required, Validators.minLength(1)]]
   })
  }

   private createForm(anime: Anime) {
    this.cadastroAnime = this.fb.group({
      title: [anime.title, [Validators.required, Validators.minLength(1)]],
      episodes: [anime.episodes, [Validators.required, Validators.min(1)]],
      director: [anime.director, [Validators.required, Validators.minLength(1)]],
      studio: [anime.studio, [Validators.required, Validators.minLength(1)]]
   })
  }

  /// CRUD - INSERT ////
  private insert(anime: Anime): void {

    this.animeService.insert(anime).subscribe(()=> {

      Swal.fire({title: "Success!", icon: 'success'});

      this.router.navigateByUrl("anime")
    }, 
    err => {
      Swal.fire({title: "Error!", icon: 'error'});
    })
  }

  /// CRUD - UPDATE ////
  private update(anime: Anime): void {
    anime.id = this.id;

    this.animeService.update(anime).subscribe(()=> {

      Swal.fire({title: "Anime updated!", icon: 'success'});

      this.router.navigateByUrl("anime")
    }, 
    err => {
      Swal.fire({title: "Error!", icon: 'error'});
    })
  }

  }
  

