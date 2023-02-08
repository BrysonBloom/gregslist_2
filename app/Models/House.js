export class House {
    constructor(data) {
        this.id = data.id || ''
        this.bedrooms = data.bedrooms
        this.imgUrl = data.imgUrl
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.year - data.year
        this.price = data.price
        this.description = data.description
    }

    get houseCard() {
        return/*html */ `
        <div class="col-md-4 mb-3">
          <div class="card">
            <img src="${this.imgUrl}" class="card-img-top car-img"
              alt="house">
            <div class="card-body">
              <div class="card-title fs-5">${this.bedrooms + ' ' + this.bathrooms}</div>
              <p>${this.description}</p>
              <div class="d-flex justify-content-between">
              <button class="btn ms-1 btn-danger" type="button" onclick="app.housesController.removeCar('${this.id}')">Delete Car!</button>
              <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn ms-1 btn-info" type="button" onclick="app.carsController.drawForm('${this.id}')">Edit Car!</button>
              </div>
              </div>
          </div>
        </div>
        `
    }
}


