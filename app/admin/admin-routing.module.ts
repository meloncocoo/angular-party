import { NgModule }             from '@angular/core';
import { RouterModule }         from '@angular/router';

import { AdminComponent }       from './admin.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: AdminComponent, 
      children: [
        { path: '', redirectTo: 'activities', pathMatch: 'full' },
        { path: 'activities', loadChildren: 'app/admin/activities/activities.module#ActivitiesModule' }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
