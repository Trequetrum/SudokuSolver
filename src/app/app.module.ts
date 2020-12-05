import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridDisplayComponent } from './grid-display/grid-display.component';
import { SudokuFormComponent } from './sudoku-form/sudoku-form.component';
import { GridEntryComponent } from './grid-display/grid-entry/grid-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    GridDisplayComponent,
    SudokuFormComponent,
    GridEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
