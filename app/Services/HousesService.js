import { sandboxApi } from "./AxiosService.js"
import { appState } from "../AppState.js";
import { House } from "../Models/House.js";

class HousesService {
    async getHouses() {
        const res = await sandboxApi.get('/houses')
        // console.log(res.data);
        const newArray = res.data.map(house => new House(house))
        appState.houses = newArray
        appState.emit(houses)
        console.log('is this ting working');
        // console.log(newArray);
    }
}
export const housesService = new HousesService()