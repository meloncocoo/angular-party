import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MelonSegmentComponent } from './segment.component';
import { MelonSpinnerComponent } from './spinner.component';
import { MelonLoaderComponent } from './loader.component';

let MELON_COMPONENTS: Array<any> = [
  MelonSegmentComponent,
  MelonSpinnerComponent,
  MelonLoaderComponent
];

@NgModule({
  imports: [ CommonModule ],
  exports: [ MELON_COMPONENTS ],
  declarations: [ MELON_COMPONENTS ]
})
export class MelonUIModule { }
