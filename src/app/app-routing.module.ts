import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { TheGridComponent } from './the-grid/the-grid.component';
//route project
const routes: Routes = [
    { path: '', component: TheGridComponent, data: { title: 'The Grid Component' } },
    { path: 'theGrid', component: TheGridComponent, data: { title: 'The Grid Component' } },
    { path: 'aboutMe', component: AboutMeComponent, data: { title: 'AboutMeComponent' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
