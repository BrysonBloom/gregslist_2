import { appState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawHouses() {
    let template = ''
    appState.houses.forEach(house => template += house.houseCard)
    setHTML('listings', template)
    console.log(template)
}

export class HousesController {

    constructor() {

        appState.on('houses', _drawHouses())
    }


    async getHouses() {
        console.log('is house button working?');
        try {
            await housesService.getHouses()
            console.log('is try working');
        } catch (error) {
            Pop.error(error)
        }
    }
}