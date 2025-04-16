import { Test, TestingModule } from '@nestjs/testing';
import { DatatypeService } from './datatype.service';
import { EthersService } from '../../ethers/ethers.service';

const mockEthersService = {
  positiveNumber: jest.fn().mockResolvedValue(100),
  setPositiveNumber: jest.fn().mockResolvedValue(200),
  negativeNumber: jest.fn().mockResolvedValue(-50),
  setNegativeNumber: jest.fn().mockResolvedValue(-100),
  isActive: jest.fn().mockResolvedValue(true),
  toggleActive: jest.fn().mockResolvedValue(false),
  recipient: jest.fn().mockResolvedValue('0xRecipient'),
  wallet: jest.fn().mockResolvedValue('0xWallet'),
  setWallet: jest.fn().mockResolvedValue('0xNewWallet'),
  fixedData: jest.fn().mockResolvedValue('0xabcdef'),
  setFixedData: jest.fn().mockResolvedValue('0xdeadbeef'),
  zeroPadValue32: jest.fn().mockResolvedValue('0x0000deadbeef'),
  dynamicData: jest.fn().mockResolvedValue('0x1234'),
  setDynamicData: jest.fn().mockResolvedValue('0xcafe'),
  getDynamicDataLength: jest.fn().mockResolvedValue(8),
  currentState: jest.fn().mockResolvedValue(1),
  setState: jest.fn().mockResolvedValue(2),
  getDetails: jest.fn().mockResolvedValue({
    0: 100n,
    1: -50n,
    2: true,
    3: '0xWallet',
    4: '0xRecipient',
    5: '0xabcdef',
    6: '0x1234',
    7: 1,
  }),
};

describe('DatatypeService', () => {
  let service: DatatypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DatatypeService,
        { provide: EthersService, useValue: mockEthersService },
      ],
    }).compile();

    service = module.get<DatatypeService>(DatatypeService);
  });

  it('positive 값이 없으면 positiveNumber를 반환해야 합니다.', async () => {
    const result = await service.positive();
    expect(result).toBe(100);
  });

  it('positive 값이 있으면 setPositiveNumber 실행 후 결과를 반환해야 합니다.', async () => {
    const result = await service.positive(200);
    expect(result).toBe(200);
  });

  it('negative 값이 없으면 negativeNumber 반환해야 합니다.', async () => {
    const result = await service.negative();
    expect(result).toBe(-50);
  });

  it('negative 값이 있으면 setNegativeNumber 실행 후 결과를 반환해야 합니다.', async () => {
    const result = await service.negative(-100);
    expect(result).toBe(-100);
  });

  it('활성 상태 조회 (isActive)를 조회해야 합니다.', async () => {
    const result = await service.isActive();
    expect(result).toBe(true);
  });

  it('활성 상태 토글 (toggleActive)이 작동해야 합니다.', async () => {
    const result = await service.toggleActive();
    expect(result).toBe(false);
  });

  it('recipient 실행 시 recipient를 조회해야 합니다.', async () => {
    const result = await service.recipient();
    expect(result).toBe('0xRecipient');
  });

  it('wallet address가 없을 경우 wallet를 조회해야 합니다.', async () => {
    const result = await service.wallet();
    expect(result).toBe('0xWallet');
  });

  it('wallet address가 있으면 setWallet 실행 후 결과를 반환해야 합니다.', async () => {
    const result = await service.wallet('0xNewWallet');
    expect(result).toBe('0xNewWallet');
  });

  it('fixedData 값이 없을 경우 fixedData를 조회해야 합니다.', async () => {
    const result = await service.fixedData();
    expect(result).toBe('0xabcdef');
  });

  it('fixedData 값이 있으면 패딩 후 setFixedData를 실행해야 합니다.', async () => {
    const result = await service.fixedData('0xdeadbeef');
    expect(result).toBe('0xdeadbeef');
  });

  it('dynamicData 값이 없을 경우 dynamicData를 조회해야 합니다.', async () => {
    const result = await service.dynamicData();
    expect(result).toBe('0x1234');
  });

  it('dynamicData 값이 있으면 setDynamicData 실행 후 결과를 반환해야 합니다.', async () => {
    const result = await service.dynamicData('0xcafe');
    expect(result).toBe('0xcafe');
  });

  it('getDynamicDataLength 실행 시 dynamicData 길이를 조회해야 합니다.', async () => {
    const result = await service.getDynamicDataLength();
    expect(result).toBe(8);
  });

  it('state 값이 없으면 currentState를 조회해야 합니다.', async () => {
    const result = await service.currentState();
    expect(result).toBe(1);
  });

  it('state 값이 있으면 setState 실행 후 결과를 반환해야 합니다.', async () => {
    const result = await service.currentState(2);
    expect(result).toBe(2);
  });

  it('getDetails 실행 시 bigint 타입이 문자열로 변환되어야 합니다.', async () => {
    const result = await service.getDetails();
    expect(result['0']).toBe('100');
    expect(result['1']).toBe('-50');
    expect(result['3']).toBe('0xWallet');
  });
});
