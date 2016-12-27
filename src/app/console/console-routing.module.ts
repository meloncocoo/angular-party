import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsoleComponent }   from './console.component';
import { ScheduleComponent }  from './schedule.component';
import { ScreenComponent }    from './screen.component';

const routes: Routes = [
  { path: 'path', component: ConsoleComponent },
];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', redirectTo: 'console', pathMatch: 'full' },
    { path: 'console/:id', component: ConsoleComponent,
      children: [
        { path: 'schedule', component: ScheduleComponent },
        { path: 'screen', component: ScreenComponent }
      ]
    }
  ])],
  exports: [RouterModule],
})
export class ConsoleRoutingModule { }

export const routedComponents = [ConsoleComponent];