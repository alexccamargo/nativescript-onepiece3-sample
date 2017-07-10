import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { CrewLevelModel, CrewLevelChangeModel } from '../models';

import { GlyphService } from '../../shared/glyph.service';

@Component({
    selector: 'crew-level-item',
    templateUrl: 'pages/crew-level/crew-level-item/crew-level-item.component.html',
    styleUrls: ['pages/crew-level/crew-level-item/crew-level-item.component.css']
})

export class CrewLevelItemComponent implements OnInit {

    @Input() data: CrewLevelModel;
    @Output() levelChange = new EventEmitter<CrewLevelChangeModel>();
    
    constructor(public glyphs: GlyphService) { }

    ngOnInit() { }

    public get classUpActive(){
        return this.data.level<5? 'active' : 'inactive';
    }

    public get classDownActive(){
        return this.data.level>1? 'active' : 'inactive';
    }

    public levelUpTap(){
        let change = new CrewLevelChangeModel(this.data, this.data.level, ++this.data.level);
        this.levelChange.emit(change);
    }

    public levelDownTap(){
        let change = new CrewLevelChangeModel(this.data, this.data.level, --this.data.level);
        this.levelChange.emit(change);
    }
}