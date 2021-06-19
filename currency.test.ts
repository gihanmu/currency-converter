import {CurrencyCalculator, Money} from './index';


describe("Test Currency Conversion", () => {
    it('50 USD should be equal to 45.05 EUR', () => {
        expect(new Money(50, 'USD').amount === 45.05);
    });
    

    it('50 USD + 150 SGD should be equal to 121.90 EUR', () => {
        expect(CurrencyCalculator.add(new Money(50, 'USD'), new Money(150, 'SGD')).amount === 12.90);
    });

    it('300 USD - 10 Bitcoin  should be equal to 87.23 EUR', () => {
        expect(CurrencyCalculator.add(new Money(300, 'USD'), new Money(10, 'Bitcoin')).amount === 87.23);
    });

    it('300 USD > 10 ', () => {
        expect(CurrencyCalculator.isGreater(new Money(300, 'USD'), new Money(10, 'Bitcoin')));
    });

    it('100 EUR ==  110 USD ', () => {
        expect(CurrencyCalculator.isGreater(new Money(110, 'USD'), new Money(100, 'EUR')));
    });
    
})