import { Controller, Get, Patch, Body } from '@nestjs/common';
import { DatatypeService } from '../service/datatype.service';

@Controller('datatype')
export class DatatypeController {
  constructor(private readonly datatypeService: DatatypeService) {}

  @Get('positive')
  async getPositive() {
    return await this.datatypeService.positive();
  }

  @Patch('positive')
  async setPositive(@Body() option: { value: number }) {
    return await this.datatypeService.positive(option.value);
  }

  @Get('negative')
  async getNegative() {
    return await this.datatypeService.negative();
  }

  @Patch('negative')
  async setNegative(@Body() option: { value: number }) {
    return await this.datatypeService.negative(option.value);
  }

  @Get('active')
  async getActive() {
    return await this.datatypeService.isActive();
  }

  @Patch('active')
  async setActive() {
    return await this.datatypeService.toggleActive();
  }

  @Get('recipient')
  async getRecipient() {
    return await this.datatypeService.recipient();
  }

  @Get('wallet')
  async getWallet() {
    return await this.datatypeService.wallet();
  }

  @Patch('wallet')
  async setWallet(@Body() option: { address: string }) {
    return await this.datatypeService.wallet(option.address);
  }

  @Get('fixed')
  async getFixed() {
    return await this.datatypeService.fixedData();
  }

  @Patch('fixed')
  async setFixed(@Body() option: { data: string }) {
    return await this.datatypeService.fixedData(option.data);
  }

  @Get('dynamic')
  async getDynamic() {
    return await this.datatypeService.dynamicData();
  }

  @Patch('dynamic')
  async setDynamic(@Body() option: { data: string }) {
    return await this.datatypeService.dynamicData(option.data);
  }

  @Get('dynamic/length')
  async getLength() {
    return await this.datatypeService.getDynamicDataLength();
  }

  @Get('state')
  async getState() {
    return await this.datatypeService.currentState();
  }

  @Patch('state')
  async setState(@Body() option: { state: number }) {
    return await this.datatypeService.currentState(option.state);
  }

  @Get('details')
  async getDetails() {
    return await this.datatypeService.getDetails();
  }
}
