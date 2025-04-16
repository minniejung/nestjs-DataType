import { Module } from '@nestjs/common';
import { DatatypeService } from './service/datatype.service';
import { DatatypeController } from './controller/datatype.controller';
import { EthersService } from '../ethers/ethers.service';

@Module({
  controllers: [DatatypeController],
  providers: [DatatypeService, EthersService],
})
export class DatatypeModule {}
