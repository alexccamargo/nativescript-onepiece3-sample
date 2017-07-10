import { CrewLevelModel } from './crew-level.model';

export class CrewLevelChangeModel {

    crew: CrewLevelModel;
    from: number;
    to: number;

    constructor(crew: CrewLevelModel, from: number, to: number) {
        this.crew = crew;
        this.from = from;
        this.to = to;
    }
}