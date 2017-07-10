export class CrewLevelModel {
    id: number;
    name: string;
    level: number;

    constructor(id:number, name: string, level: number = 1) {
        this.id = id;
        this.name = name;
        this.level = level;        
    }
}