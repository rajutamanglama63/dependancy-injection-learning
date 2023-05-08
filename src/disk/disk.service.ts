import { Injectable } from '@nestjs/common';
import { PowerSupplyService } from 'src/power-supply/power-supply.service';

@Injectable()
export class DiskService {
    constructor(private powerSupplyService: PowerSupplyService) {}

    getData() {
        console.log("Drawing 20 watts of power from Power Service")
        this.powerSupplyService.supplyWatts(20)

        return "data!"
    }
}
