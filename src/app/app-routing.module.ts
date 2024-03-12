import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './cars/list/list.component';
import { AddComponent } from './cars/add/add.component';
import { ViewComponent } from './cars/view/view.component';
import { EditComponent } from './cars/edit/edit.component';

const routes: Routes = [
  { path: 'cars', component: ListComponent },
  { path: 'cars/add', component: AddComponent },
  { path: 'cars/:id', component: ViewComponent },
  { path: 'cars/:id/edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
