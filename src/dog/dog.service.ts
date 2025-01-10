import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { AxiosError, AxiosResponse } from "axios";
import { catchError, firstValueFrom, Observable } from "rxjs";

@Injectable()
export class DogService {
    private readonly logger = new Logger(DogService.name);
    constructor(private readonly httpService: HttpService) {}

    async getBreeds(): Promise<Breed[]>  {
        const { data } = await firstValueFrom(
            this.httpService.get<Breed[]>('https://dogapi.dog/api/v2/breeds').pipe(
                catchError((error: AxiosError) => {
                    this.logger.error(error.response.data);
                    throw 'An error happened!';
                  }),
            )
        )

        return data;
    }
}
