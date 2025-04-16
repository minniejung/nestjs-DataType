import { Test, TestingModule } from '@nestjs/testing';
import { EthersService } from './ethers.service';
import { ConfigService } from '@nestjs/config';
import { ethers } from 'ethers';

jest.mock('ethers', () => {
  const actual = jest.requireActual('ethers');
  return {
    ...actual,
    ethers: {
      JsonRpcProvider: jest.fn().mockImplementation(() => ({})),
      Wallet: jest.fn().mockImplementation(() => ({
        address: '0xMockSigner',
      })),
      Contract: jest.fn().mockImplementation(() => mockContract),
    },
    zeroPadValue: jest.fn((data, len) => `padded(${data},${len})`),
  };
});

const mockWait = jest.fn().mockResolvedValue('receipt');
const mockContract = {
  positiveNumber: jest.fn().mockResolvedValue(100),
  setPositiveNumber: jest.fn().mockResolvedValue({ wait: mockWait }),
  negativeNumber: jest.fn().mockResolvedValue(-50),
  setNegativeNumber: jest.fn().mockResolvedValue({ wait: mockWait }),
  isActive: jest.fn().mockResolvedValue(true),
  toggleActive: jest.fn().mockResolvedValue({ wait: mockWait }),
  wallet: jest.fn().mockResolvedValue('0xWallet'),
  setWallet: jest.fn().mockResolvedValue({ wait: mockWait }),
  recipient: jest.fn().mockResolvedValue('0xRecipient'),
  fixedData: jest.fn().mockResolvedValue('0xabcdef'),
  setFixedData: jest.fn().mockResolvedValue({ wait: mockWait }),
  dynamicData: jest.fn().mockResolvedValue('0x1234'),
  setDynamicData: jest.fn().mockResolvedValue({ wait: mockWait }),
  currentState: jest.fn().mockResolvedValue(1),
  setState: jest.fn().mockResolvedValue({ wait: mockWait }),
  getDynamicDataLength: jest.fn().mockResolvedValue(8),
  getDetails: jest.fn().mockResolvedValue(['100', '-50']),
};

describe('EthersService', () => {
  let service: EthersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EthersService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key) => {
              if (key === 'RPC_URL') return 'https://mock.rpc';
              if (key === 'PRIVATE_KEY') return 'mockPrivateKey';
            }),
          },
        },
      ],
    }).compile();

    service = module.get<EthersService>(EthersService);
  });

  it('positiveNumber 반환해야 합니다.', async () => {
    expect(await service.positiveNumber()).toBe(100);
  });

  it('setPositiveNumber는 wait 호출 후 영수증 반환해야 합니다.', async () => {
    expect(await service.setPositiveNumber(123)).toBe('receipt');
  });

  it('negativeNumber 반환해야 합니다.', async () => {
    expect(await service.negativeNumber()).toBe(-50);
  });

  it('setNegativeNumber는 wait 호출 후 영수증 반환해야 합니다.', async () => {
    expect(await service.setNegativeNumber(-123)).toBe('receipt');
  });

  it('isActive 반환해야 합니다.', async () => {
    expect(await service.isActive()).toBe(true);
  });

  it('toggleActive는 wait 호출 후 영수증 반환해야 합니다.', async () => {
    expect(await service.toggleActive()).toBe('receipt');
  });

  it('wallet 반환해야 합니다.', async () => {
    expect(await service.wallet()).toBe('0xWallet');
  });

  it('setWallet은 wait 호출 후 영수증 반환해야 합니다.', async () => {
    expect(await service.setWallet('0xabc')).toBe('receipt');
  });

  it('recipient 반환해야 합니다.', async () => {
    expect(await service.recipient()).toBe('0xRecipient');
  });

  it('fixedData 반환해야 합니다.', async () => {
    expect(await service.fixedData()).toBe('0xabcdef');
  });

  it('setFixedData는 wait 호출 후 영수증 반환해야 합니다.', async () => {
    expect(await service.setFixedData('0xdata')).toBe('receipt');
  });

  it('dynamicData 반환해야 합니다.', async () => {
    expect(await service.dynamicData()).toBe('0x1234');
  });

  it('setDynamicData는 wait 호출 후 영수증 반환해야 합니다.', async () => {
    expect(await service.setDynamicData('0xdata')).toBe('receipt');
  });

  it('currentState 반환해야 합니다.', async () => {
    expect(await service.currentState()).toBe(1);
  });

  it('setState는 wait 호출 후 영수증 반환해야 합니다.', async () => {
    expect(await service.setState(2)).toBe('receipt');
  });

  it('getDynamicDataLength 반환해야 합니다.', async () => {
    expect(await service.getDynamicDataLength()).toBe(8);
  });

  it('getDetails 반환해야 합니다.', async () => {
    const result = await service.getDetails();
    expect(result).toEqual(['100', '-50']);
  });
});
