import { HttpService } from "@nestjs/axios";
import { DogService } from "./dog.service";
import { Test, TestingModule } from "@nestjs/testing";
import { AxiosResponse } from "axios";
import { of } from "rxjs";

describe('DogService', () => {
    let service: DogService;
    let httpService: HttpService;


    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            providers: [
                DogService, 
                { 
                    provide: HttpService, 
                    useValue: { 
                        get: jest.fn()
                    } 
                }
            ],
        }).compile();

        service = app.get<DogService>(DogService);
        httpService = app.get<HttpService>(HttpService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
        expect(httpService).toBeDefined();
    });

    describe('getBreeds', () => {
        it('should return an array of breeds', async () => {
            const breeds: Breed[] = [
                {
                    id: "68f47c5a-5115-47cd-9849-e45d3c378f12",
                    type: "breed",
                    attributes: {
                        name: "Caucasian Shepherd Dog",
                        description: "The Caucasian Shepherd Dog is a large and powerful breed of dog from the Caucasus Mountains region. These dogs are large in size, with a thick double coat to protect them from the cold. They have a regal bearing, with a proud and confident demeanor. They are highly intelligent and loyal, making them excellent guard dogs. They are courageous and alert, with an instinct to protect their family and property. They are highly trainable, but require firm and consistent training.",
                        life: { max: 20, min: 15 },
                        male_weight: { max: 90, min: 50 },
                        female_weight: { max: 70, min: 45 },
                        hypoallergenic: false
                    },
                    relationships: {
                        group: { data: { id: "8000793f-a1ae-4ec4-8d55-ef83f1f644e5", type: "group" } }
                    }
                },
            ];

            const response: AxiosResponse<Breed[]> = {
                data: breeds,
                status: 200,
                statusText: 'OK',
                headers: { 'Content-Type': "application/json" },
                config: undefined
            };
            jest.spyOn(httpService, 'get').mockReturnValue(of(response));
    
            expect(await service.getBreeds()).toEqual(breeds);
        });
    });
});