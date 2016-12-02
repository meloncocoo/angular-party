import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';

import { AlertComponent }       from './alert.component';

import { AwesomePipe }          from './awesome.pipe';

import { HighlightDirective }   from './highlight.directive';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [
    AlertComponent,
    AwesomePipe,
    HighlightDirective
  ],
  exports:      [
    AlertComponent,
    AwesomePipe,
    HighlightDirective,
    CommonModule, FormsModule ]
})
export class SharedModule { }
