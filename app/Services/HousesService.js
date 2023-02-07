import { sandboxApi } from "./AxiosService"

class HousesService {
    async getHouses() {
        const res = await sandboxApi.get('/houses')
        console.log(res.data);
    }
}
export const housesService = new HousesService()