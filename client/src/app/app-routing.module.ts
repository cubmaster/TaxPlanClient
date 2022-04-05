import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScenarioComponent} from "./scenario/scenario.component"
import {HomeComponent} from "./home/home.component";

import {ForecastEditorComponent} from "./forecast-editor/forecast-editor.component";

const routes: Routes = [
  { path: 'forecast', component: ForecastEditorComponent },
  { path: 'scenario/:id', component: ScenarioComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
