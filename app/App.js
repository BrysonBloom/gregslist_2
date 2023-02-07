import { CarsController } from "./Controllers/CarsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  carsController = new CarsController()
}

window["app"] = new App();
