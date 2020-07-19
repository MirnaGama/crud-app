import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudAnimeService } from 'src/app/shared/services/crud-anime.service';
import { Anime } from 'src/app/shared/models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  anime: Anime;
  id: number;
  
  constructor(private activRoute: ActivatedRoute, private animeService: CrudAnimeService, private router: Router) { }

  ngOnInit(): void {

    this.id = this.activRoute.snapshot.params['id'];
    this.searchById();

  }

  delete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.animeService.delete(id).subscribe(() => 
          this.router.navigateByUrl('anime'))

      }
    })
    
  }

  edit(id: number) {
    this.router.navigateByUrl('anime/cadastro/'+id);
  }

  return() {
    this.router.navigateByUrl('anime');
  }


  private searchById(): void {
    this.animeService.searchById(this.id).subscribe((anime: Anime) => this.anime = anime);

  }

}
