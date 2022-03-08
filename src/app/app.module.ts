import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputNomeComponent } from './input-nome/input-nome.component';
import { InputemailComponent } from './inputemail/inputemail.component';
import { InputpassComponent } from './inputpass/inputpass.component';
import { InputdateComponent } from './inputdate/inputdate.component';

@NgModule({
  declarations: [
    AppComponent,
    InputNomeComponent,
    InputemailComponent,
    InputpassComponent,
    InputdateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
