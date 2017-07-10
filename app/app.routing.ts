import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { CrewLevelComponent } from './pages/crew-level/crew-level.component';

const routes: Routes = [
    { path: "", redirectTo: "/crew-level", pathMatch: "full" },
    // { path: 'crew-level', loadChildren: 'app/pages/crew-level/crew-level.module#CrewLevelModule' },
    { path: "crew-level", component: CrewLevelComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }