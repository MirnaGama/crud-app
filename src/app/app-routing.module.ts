import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listagem/listing/listing.component';
import { InsertComponent } from './cadastro/insert/insert.component';


const routes: Routes = [
  {path: '', component: ListingComponent},
  {path: 'cadastro', component: InsertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
