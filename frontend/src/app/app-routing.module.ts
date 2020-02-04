import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cats', component: CatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
