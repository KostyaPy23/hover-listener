import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridComponent } from './features/grid/grid.component';
import { GridCellsComponent } from './features/grid/components/grid-cells/grid-cells.component';
import { GridInfoBoxComponent } from './features/grid/components/grid-info-box/grid-info-box.component';
import { GridModeSelectorComponent } from './features/grid/components/grid-mode-selector/grid-mode-selector.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridCellsComponent,
    GridInfoBoxComponent,
    GridModeSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
