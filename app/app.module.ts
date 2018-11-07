import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrettirComponent } from './frettir/frettir.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { FrettirListiComponent } from './frettir/frettir-listi/frettir-listi.component';

@NgModule({
  declarations: [
    AppComponent,
    FrettirComponent,
    FrontPageComponent,
    FrettirListiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
