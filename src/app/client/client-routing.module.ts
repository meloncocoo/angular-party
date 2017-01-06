import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: 'client/:id', redirectTo: 'client/:id/welcome', pathMatch: 'full' },
  { path: 'client/:id', component: ClientComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule { }

export const routedComponents = [ClientComponent, WelcomeComponent];