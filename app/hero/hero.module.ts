import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { HeroRoutingModule }    from './hero-routing.module';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroSearchComponent }  from './hero-search.component';
import { HeroService }          from './hero.service';

@NgModule({
  imports:      [ CommonModule, FormsModule, HeroRoutingModule ],
  declarations: [ DashboardComponent, HeroesComponent, HeroDetailComponent, HeroSearchComponent ],
  providers:    [ HeroService ]
})
export class HeroModule { }
