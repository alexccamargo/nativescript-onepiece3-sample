import { NgModule } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { CrewLevelComponent } from './crew-level.component';
import { CrewLevelItemComponent } from './crew-level-item/crew-level-item.component';
import { CrewLevelListComponent } from './crew-level-list/crew-level-list.component';
import { CrewLevelService } from './service/crew-level.service';
import { CrewLevelRoutingModule } from './crew-level.routing-module';

import { GlyphService } from '../shared/glyph.service';


@NgModule({
    imports: [
        NativeScriptModule,
        // CrewLevelRoutingModule
    ],
    exports: [],
    declarations: [CrewLevelComponent, CrewLevelItemComponent, CrewLevelListComponent],
    providers: [CrewLevelService, GlyphService],
})
export class CrewLevelModule { }
