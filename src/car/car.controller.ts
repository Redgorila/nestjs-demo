import { Controller, Get } from "@nestjs/common";
import { CarService } from "./car.service";

@Controller("cars")
export class CarController {
	constructor(private readonly carService: CarService) {}

	@Get()
	getHello(): string {
		return this.carService.getHello();
	}
	@Get("ping")
	getBye(): string {
		return "bye";
	}
}
