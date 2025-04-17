import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ethers, zeroPadValue, encodeBytes32String, isBytesLike } from 'ethers';
import { abi, address } from '../../abis/DataType.json';

@Injectable()
export class EthersService {
  private provider: ethers.JsonRpcProvider;
  private signer: ethers.Wallet;
  private contract: ethers.Contract;

  constructor(private configService: ConfigService) {
    const rpcUrl = this.configService.get<string>('RPC_URL');
    const privateKey = this.configService.get<string>('PRIVATE_KEY');

    this.provider = new ethers.JsonRpcProvider(rpcUrl);
    this.signer = new ethers.Wallet(privateKey!, this.provider);
    this.contract = new ethers.Contract(address, abi, this.signer);
  }

  async zeroPadValue32(data: string) {
    return zeroPadValue(data, 32);
  }

  async encodeBytes32String(data: string) {
    return encodeBytes32String(data);
  }

  async isBytesLike(data: string) {
    return isBytesLike(data);
  }

  // 위 코드는 지우지 마세요.

  async positiveNumber() {
    // Todo: positiveNumber의 값을 리턴합니다.
  }

  async setPositiveNumber(value: number) {
    // Todo: setPositiveNumber의 값을 리턴합니다.
    // ⚠️ setter함수는 tx 확정 후 영수증을 리턴합니다.(wait)
  }

  async negativeNumber() {
    // Todo: negativeNumber의 값을 리턴합니다.
  }

  async setNegativeNumber(value: number) {
    // Todo: setNegativeNumber의 값을 리턴합니다.
    // ⚠️ setter함수는 tx 확정 후 영수증을 리턴합니다.(wait)
  }

  async isActive() {
    // Todo: isActive의 값을 리턴합니다.
  }

  async toggleActive() {
    // Todo: toggleActive의 값을 리턴합니다.
    // ⚠️ setter함수는 tx 확정 후 영수증을 리턴합니다.(wait)
  }

  async wallet() {
    // Todo: wallet의 값을 리턴합니다.
  }

  async setWallet(address: string) {
    // Todo: setWallet의 값을 리턴합니다.
    // ⚠️ setter함수는 tx 확정 후 영수증을 리턴합니다.(wait)
  }

  async recipient() {
    // Todo: recipient의 값을 리턴합니다.
  }

  async fixedData() {
    // Todo: fixedData의 값을 리턴합니다.
  }

  async setFixedData(data: string) {
    // Todo: setFixedData의 값을 리턴합니다.
    // ⚠️ setter함수는 tx 확정 후 영수증을 리턴합니다.(wait)
  }

  async dynamicData() {
    // Todo: dynamicData의 값을 리턴합니다.
  }

  async setDynamicData(data: string) {
    // Todo: setDynamicData의 값을 리턴합니다.
    // ⚠️ setter함수는 tx 확정 후 영수증을 리턴합니다.(wait)
  }

  async currentState() {
    // Todo: currentState의 값을 리턴합니다.
  }

  async setState(state: number) {
    // Todo: setState의 값을 리턴합니다.
    // ⚠️ setter함수는 tx 확정 후 영수증을 리턴합니다.(wait)
  }

  async getDynamicDataLength() {
    // Todo: getDynamicDataLength의 값을 리턴합니다.
  }

  async getDetails() {
    // Todo: getDetails의 값을 리턴합니다.
  }
}
