import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  
  //  ROUTE SYNTAX
  // {
  //   path: 'title',
  //   component : ,
  //   children : []
  // }

  { path: 'home', component: HomePageComponent  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
