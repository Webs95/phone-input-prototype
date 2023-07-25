import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([]),
    IonicModule.forRoot({ mode: 'ios' }),
  ],
  declarations: [AppComponent, ExampleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
