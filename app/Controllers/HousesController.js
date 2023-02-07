import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js";

export class HousesController {

    constructor() {
        this.getHouses()
    }


    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            Pop.error(error)
        }
    }
}