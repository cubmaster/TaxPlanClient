import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";


import {FormsModule} from "@angular/forms";


import {CommonModule} from "@angular/common";

import {DragDropModule} from "@angular/cdk/drag-drop";
import { ScenarioComponent } from './scenario/scenario.component';
import { ForecastEditorComponent } from './forecast-editor/forecast-editor.component';






@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
     ScenarioComponent,
     ForecastEditorComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
