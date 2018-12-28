import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AppbootstarpmoduleModule } from './appbootstarpmodule/appbootstarpmodule.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppbootstarpmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
