import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchKeywordComponent } from './search-keyword/search-keyword.component';


const routes: Routes = [
  // { path: 'searchKeyword', component: SearchKeywordComponent }
  { path: 'searchKeyword', component: SearchKeywordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
