import { Injectable } from '@nestjs/common';
import { PowerSupplyService } from "../power-supply/power-supply.service";

@Injectable()
export class CpuService {
    constructor(private powerSupplyService: PowerSupplyService) {
    }

    compute(a: number, b: number) {
        console.log("Drawing 10 watts of power from Power Service")
        this.powerSupplyService.supplyWatts(10)
        return a + b;
    }
}
