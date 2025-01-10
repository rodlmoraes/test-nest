import { Controller, Get } from "@nestjs/common";
import { DogService } from "./dog.service";

@Controller()
export class DogController {
    constructor(private readonly catService: DogService) {}

    @Get('dog/breeds')
    getFacts(): Promise<Breed[]> {
        return this.catService.getBreeds()
    }
}
