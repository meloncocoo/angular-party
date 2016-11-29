import { NgModule }             from '@angular/core';
import { RouterModule }         from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes',     component: HeroesComponent },
  ])],
  exports: [RouterModule]
})
export class HeroRoutingModule {}
