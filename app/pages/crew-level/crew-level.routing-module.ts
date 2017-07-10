import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrewLevelComponent } from './crew-level.component';

const routes: Routes = [
  { path: '', component: CrewLevelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrewLevelRoutingModule { }

// export const routedComponents = [CrewLevelComponent];