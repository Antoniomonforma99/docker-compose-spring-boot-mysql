import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurorialListComponent } from './components/turorial-list/turorial-list.component';

const routes: Routes = [
  {path: 'tutorials', component: TurorialListComponent},
  {path: '', redirectTo: 'tutorials', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
