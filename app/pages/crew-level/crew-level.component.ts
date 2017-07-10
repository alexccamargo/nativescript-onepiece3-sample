import { Page } from "ui/page";
import { Component, OnInit } from '@angular/core';
import { EventData } from "data/observable";
import { Observable } from "data/observable";


import { CrewLevelModel, CrewLevelChangeModel } from './models';
import { CrewLevelService } from './service/crew-level.service';


@Component({
    selector: 'crew-level',
    moduleId: module.id,
    templateUrl: './crew-level.component.html',
    styleUrls: ['./crew-level.component.css']
})

export class CrewLevelComponent implements OnInit {
    
    private crewMap: Map<string, Array<CrewLevelModel>>;
    private crewList: Array<CrewLevelModel>;

    private levelIndex: Array<string> = ['1', '2', '3', '4', 'MAX'];

    constructor(private crewLevelService: CrewLevelService) {

        this.crewList = crewLevelService.getCrewLevelList();
        this.crewMap = this.getCrewMap(this.crewList);
    }

    private getCrewMap(crewList: Array<CrewLevelModel>): Map<string, Array<CrewLevelModel>> {
        let map = new Map<string, Array<CrewLevelModel>>();
        for (let i = 1; i <= 5; i++) {
            map.set(this.getLevelIndex(i), crewList.filter(x => x.level === i));
        }

        return map;
    }

    public getCrewListForLevel(level: number): Array<CrewLevelModel> {
        let crewList: Array<CrewLevelModel> = this.crewMap.get(this.getLevelIndex(level));
        return (crewList && crewList.length > 0) ? crewList : null;
    }

    public levelHeader(level: number): string {
        if (level === 5)
            return 'Max Level';
        else return "Level " + this.getLevelIndex(level);
    }

    public crewLevelChange(levelChange: CrewLevelChangeModel) {
        let fromLevel = this.crewMap.get(this.getLevelIndex(levelChange.from));
        let toLevel = this.crewMap.get(this.getLevelIndex(levelChange.to));
        let removeId = fromLevel.findIndex(x => x.id === levelChange.crew.id);
        fromLevel.splice(removeId, 1)
        toLevel.push(levelChange.crew);
        this.crewMap.set(levelChange.from.toString(), fromLevel);
        this.crewMap.set(levelChange.to.toString(), toLevel.sort((a, b) => a.id - b.id));
        this.saveData();
    }

    private getLevelIndex(level: number): string {
        return this.levelIndex[level - 1];
    }

    private saveData() {
        this.crewLevelService.save(this.crewList);
    }

    ngOnInit() { }
}