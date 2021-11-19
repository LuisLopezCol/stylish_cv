import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { TablecvComponent } from './components/tablecv/tablecv.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{path: "", component: ContactComponent}, {path:"tablecv", component: TablecvComponent}, {path: "404", component:NotFoundComponent},{path:"**", redirectTo: "404", pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
