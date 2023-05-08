import { Module } from '@nestjs/common';
import { PowerSupplyService } from './power-supply.service';

@Module({
  providers: [PowerSupplyService],
  exports: [PowerSupplyService]
})
export class PowerSupplyModule {}
