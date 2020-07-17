import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { ListingComponent } from './listagem/listing/listing.component';
import { InsertComponent } from './cadastro/insert/insert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudAnimeService } from './shared/services/crud-anime.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    InsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CrudAnimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
