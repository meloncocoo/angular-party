import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';

import { MelonUIModule }        from './melon/melon-ui.module';

import { AlertComponent }       from './alert.component';
import { SpinnerComponent }     from './spinner.component';

import { AwesomePipe }          from './awesome.pipe';

import { HighlightDirective }   from './highlight.directive';
import { RadiusDirective }      from './radius.directive';
import { BodyStyleDirective }   from './style.directive';

@NgModule({
  imports:      [ CommonModule, MelonUIModule ],
  declarations: [
    AlertComponent,
    SpinnerComponent,
    AwesomePipe,
    HighlightDirective,
    RadiusDirective,
    BodyStyleDirective
  ],
  exports:      [
    AlertComponent,
    SpinnerComponent,
    AwesomePipe,
    HighlightDirective,
    RadiusDirective,
    BodyStyleDirective,
    CommonModule, FormsModule, MelonUIModule ]
})
export class SharedModule { }
