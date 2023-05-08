import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerSupplyService {
    supplyWatts(watts: number) {
        console.log("watts: ", watts)
    }
}
