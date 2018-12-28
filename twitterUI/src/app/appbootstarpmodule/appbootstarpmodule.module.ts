import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { InputTextModule } from 'primeng/inputtext';

import { FormsModule } from '@angular/forms';  //this is required for primeNg ( appbootstrapmodule) to work.
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; //this is required for primeNg ( appbootstrapmodule) to work.


@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    InputTextModule,
    FormsModule
  ],
  exports:[AngularFontAwesomeModule,
    InputTextModule,
    FormsModule

  ],
  declarations: []
})
export class AppbootstarpmoduleModule { }
