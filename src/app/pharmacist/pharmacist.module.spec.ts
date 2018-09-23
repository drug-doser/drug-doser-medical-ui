import { PharmacistModule } from './pharmacist.module';

describe('PharmacistModule', () => {
  let pharmacistModule: PharmacistModule;

  beforeEach(() => {
    pharmacistModule = new PharmacistModule();
  });

  it('should create an instance', () => {
    expect(pharmacistModule).toBeTruthy();
  });
});
