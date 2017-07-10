import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CrewLevelModel, CrewLevelChangeModel } from '../models';

@Component({
    selector: 'crew-level-list',
    templateUrl: 'pages/crew-level/crew-level-list/crew-level-list.component.html',
    styleUrls: ['pages/crew-level/crew-level-list/crew-level-list.component.css']
})

export class CrewLevelListComponent implements OnInit {

    @Input()
    crewList: Array<CrewLevelModel>;

    @Input()
    header: string;

    @Output() 
    itemLevelChange = new EventEmitter<CrewLevelChangeModel>();

    levelChange(event:any){
        this.itemLevelChange.emit(event);
    }

    constructor() { }

    ngOnInit() { }
}