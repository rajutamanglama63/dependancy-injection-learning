import { Module } from '@nestjs/common';
import { CpuModule } from 'src/cpu/cpu.module';
import { DiskModule } from 'src/disk/disk.module';
import { PowerSupplyModule } from 'src/power-supply/power-supply.module';
import { ComputerController } from './computer.controller';

@Module({
  imports: [CpuModule, DiskModule,PowerSupplyModule],
  controllers: [ComputerController]
})
export class ComputerModule {}
