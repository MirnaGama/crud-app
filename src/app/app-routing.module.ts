import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listagem/listing/listing.component';
import { InsertComponent } from './cadastro/insert/insert.component';
import { DetailComponent } from './visualizacao/detail/detail.component';


const routes: Routes = [
  {path: '', component: ListingComponent},
  {path: 'cadastro', component: InsertComponent},
  {path: ':id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
