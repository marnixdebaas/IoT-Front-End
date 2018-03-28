import { Router, Routes, RouterModule } from '@angular/router';
import { GraphComponent } from './graphs/components/graph.component';
import { TableComponent } from './table/components/table.component';
import { InfoComponent } from './info/components/info.component';
import { LoginComponent } from './login/components/login.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'graphs', pathMatch: 'full' },
  { path: 'graphs', component: GraphComponent },
  { path: 'table', component: TableComponent },
  { path: 'info', component: InfoComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'tables', component: HeroDetailComponent },
  // { path: 'info', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
