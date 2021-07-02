import {AvailableCurrencies, CurrencyCalculator, Money} from './index';


describe("Test Currency Conversion", () => {
    it('50 USD should be equal to 45.05 EUR', () => {
        expect(new Money(50, 'USD').amount).toBe(45);
    });
    

    it('100 USD + 100 USD should be equal to 180 EUR', () => {
        const res: Money = CurrencyCalculator.add(new Money(100, 'USD'), new Money(100, 'USD'));
        expect(res.amount).toBe(180);
    });

    it('300 USD - 10 Bitcoin  should be equal to 58 EUR', () => {
        expect(CurrencyCalculator.subtract(new Money(300, 'USD'), new Money(10, 'Bitcoin')).amount).toBe(58);
    });

    it('1.11 USD * 100 times  should be equal to 100 EUR', () => {
        expect(CurrencyCalculator.multiply(new Money(1.11, 'USD'), 100).amount).toBe(100);
    });

    it('200 USD / 5 times  should be equal to 100 EUR', () => {
        expect(CurrencyCalculator.divide(new Money(200, 'USD'), 5).amount).toBe(36);
    });

    it('300 USD > 10 Bitcoin ', () => {
        expect(CurrencyCalculator.isGreater(new Money(300, 'USD'), new Money(10, 'Bitcoin'))).toBeTruthy();
    });
    
})