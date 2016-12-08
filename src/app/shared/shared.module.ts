import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';

import { AlertComponent }       from './alert.component';
import { SpinnerComponent }     from './spinner.component';

import { AwesomePipe }          from './awesome.pipe';

import { HighlightDirective }   from './highlight.directive';
import { RadiusDirective }      from './radius.directive';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [
    AlertComponent,
    SpinnerComponent,
    AwesomePipe,
    HighlightDirective,
    RadiusDirective
  ],
  exports:      [
    AlertComponent,
    SpinnerComponent,
    AwesomePipe,
    HighlightDirective,
    RadiusDirective,
    CommonModule, FormsModule ]
})
export class SharedModule { }
