import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  cadastroAnime: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cadastroAnime = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      episodes: ['', [Validators.required, Validators.min(1)]],
      director: ['', [Validators.required, Validators.minLength(1)]],
      studio: ['', [Validators.required, Validators.minLength(1)]]
   })
  }


  insert(): void {
    if (this.cadastroAnime.invalid) {
      console.log("FORMULÁRIO INVÁLIDO!");
    } else {
      console.log("Enviando...\n \n" + JSON.stringify(this.cadastroAnime.value, null, 4));
      this.restart();
    }
  }

  restart(): void {
     this.cadastroAnime.reset();
  }
  

}
