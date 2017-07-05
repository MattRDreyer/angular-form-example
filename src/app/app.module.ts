import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';  //forms module allows for 2 way data binding
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  //forms module allows for 2 way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
