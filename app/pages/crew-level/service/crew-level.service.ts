import { Injectable } from '@angular/core';
import { getString, setString, hasKey, clear } from "application-settings";
import { CrewLevelModel, CrewLevelChangeModel } from '../models';

@Injectable()
export class CrewLevelService {

    private static PESISTENCE_KEY = 'crew_level_list ';

    constructor() { }

    getCrewLevelList(): Array<CrewLevelModel> {
        let crewList = this.createNewCrewList();
                
        if (hasKey(CrewLevelService.PESISTENCE_KEY)) {
            // clear();
            crewList = JSON.parse(getString(CrewLevelService.PESISTENCE_KEY));
        }
       
        return crewList;
    }

    save(crewList: Array<CrewLevelModel>) {
        setString(CrewLevelService.PESISTENCE_KEY, JSON.stringify(crewList));
    }

    private createNewCrewList(): Array<CrewLevelModel> {
        return [
            new CrewLevelModel(1, "Luffy"),
            new CrewLevelModel(2, "Zoro"),
            new CrewLevelModel(3, "Nami"),
            new CrewLevelModel(4, "Usopp"),
            new CrewLevelModel(5, "Sanji"),
            new CrewLevelModel(6, "Chopper"),
            new CrewLevelModel(7, "Robin"),
            new CrewLevelModel(8, "Franky"),
            new CrewLevelModel(9, "Brook"),
            new CrewLevelModel(10, "Buggy"),
            new CrewLevelModel(11, "Mihawk"),
            new CrewLevelModel(12, "Smoker"),
            new CrewLevelModel(13, "Tashigi"),
            new CrewLevelModel(14, "Crocodile"),
            new CrewLevelModel(15, "Eneru"),
            new CrewLevelModel(16, "Lucci"),
            new CrewLevelModel(17, "Garp"),
            new CrewLevelModel(18, "Perona"),
            new CrewLevelModel(19, "Moria"),
            new CrewLevelModel(20, "Kuma"),
            new CrewLevelModel(21, "Law"),
            new CrewLevelModel(22, "Jinbei"),
            new CrewLevelModel(23, "Ivankov"),
            new CrewLevelModel(24, "Magellan"),
            new CrewLevelModel(25, "Hancock"),
            new CrewLevelModel(26, "Marco"),
            new CrewLevelModel(27, "Ace"),
            new CrewLevelModel(28, "Whitebeard"),
            new CrewLevelModel(29, "Kizaru"),
            new CrewLevelModel(30, "Akainu"),
            new CrewLevelModel(31, "Blackbeard"),
            new CrewLevelModel(32, "Aokiji"),
            new CrewLevelModel(33, "Caesar"),
            new CrewLevelModel(34, "Fujitora"),
            new CrewLevelModel(35, "Sabo"),
            new CrewLevelModel(36, "Doflamingo"),
            new CrewLevelModel(37, "Shanks"),            
            new CrewLevelModel(38, "Morgan"),
            new CrewLevelModel(39, "Alvida"),
            new CrewLevelModel(40, "Kuro"),
            new CrewLevelModel(41, "Don Krieg"),
            new CrewLevelModel(42, "Arlong"),            
            new CrewLevelModel(43, "Hatchan"),
            new CrewLevelModel(44, "Wapol"),
            new CrewLevelModel(45, "Lapahn"),
            new CrewLevelModel(46, "Mr.1"),
            new CrewLevelModel(47, "Mr. 2"),
            new CrewLevelModel(48, "Mr. 3"),
            new CrewLevelModel(49, "Bellamy"),            
            new CrewLevelModel(50, "Wyper"),
            new CrewLevelModel(51, "Kaku"),
            new CrewLevelModel(52, "Jabra"),
            new CrewLevelModel(53, "Blueno"),
            new CrewLevelModel(54, "Coby"),
            new CrewLevelModel(55, "Sentomaru"),
            new CrewLevelModel(56, "Pacifista"),
            new CrewLevelModel(57, "Minotaurus"),
            new CrewLevelModel(58, "Hannyabal"),
            new CrewLevelModel(59, "Jozu"),
            new CrewLevelModel(60, "Vista"),
            new CrewLevelModel(61, "Hody"),
            new CrewLevelModel(62, "Vergo"),
            new CrewLevelModel(63, "Monet"),
            new CrewLevelModel(64, "Burgess"),
        ];
    }
}