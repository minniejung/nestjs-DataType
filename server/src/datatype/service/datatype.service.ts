import { Injectable } from '@nestjs/common';
import { EthersService } from '../../ethers/ethers.service';

@Injectable()
export class DatatypeService {
  constructor(private readonly ethersService: EthersService) {}

  async positive(value?: number) {
    try {
      // Todo: value 유무에 따라 positiveNumber와 setPositiveNumber의 값을 리턴합니다.
    } catch (error) {
      console.log(error);
    }
  }

  async negative(value?: number) {
    try {
      // Todo: value 유무에 따라 negativeNumber와 setNegativeNumber의 값을 리턴합니다.
    } catch (error) {
      console.log(error);
    }
  }

  async isActive() {
    try {
      // Todo: isActive의 값을 리턴합니다.
    } catch (error) {
      console.log(error);
    }
  }

  async toggleActive() {
    try {
      // Todo: toggleActive의 값을 리턴합니다.
    } catch (error) {
      console.log(error);
    }
  }

  async recipient() {
    try {
      // Todo: recipient의 값을 리턴합니다.
    } catch (error) {
      console.log(error);
    }
  }

  async wallet(address?: string) {
    try {
      // Todo: address 유무에 따라 wallet과 setWallet의 값을 리턴합니다.
    } catch (error) {
      console.log(error);
    }
  }

  async fixedData(data?: string) {
    try {
      // Todo: data 유무에 따라 getFixedData와 setFixedData의 값을 리턴합니다.
      // ⚠️ data가 byte 형의 데이터인지 확인해야 합니다.(isBytesLike)
      // ⚠️ (byte형이 아닐 시) string -> bytes32(encodeBytes32String)
      // ⚠️ data의 길이는 32바이트로 패딩해야 합니다.(zeroPadValue32)
    } catch (error) {
      console.log(error);
    }
  }

  async dynamicData(data?: string) {
    try {
      // Todo: data 유무에 따라 dynamicData와 setDynamicData의 값을 리턴합니다.
      // ⚠️ data가 byte 형의 데이터인지 확인해야 합니다.(isBytesLike)
      // ⚠️ (byte형이 아닐 시) string -> bytes(toUtf8Bytes)
    } catch (error) {
      console.error(error);
    }
  }

  async getDynamicDataLength() {
    try {
      // Todo: getDynamicDataLength의 값을 리턴합니다.
    } catch (error) {
      console.error(error);
    }
  }

  async currentState(state?: number) {
    try {
      // Todo: state 유무에 따라 currentState와 setState의 값을 리턴합니다.
    } catch (error) {
      console.error(error);
    }
  }

  async getDetails() {
    try {
      // Todo: getDetails의 값을 리턴해야 합니다.
      // ⚠️ bigint 타입은 JSON으로 변환 시 string으로 변환 필요
    } catch (error) {
      console.error(error);
    }
  }
}
