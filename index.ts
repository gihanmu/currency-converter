
export type AvailableCurrencies = 'EUR' | 'USD' | 'Bitcoin' | 'SGD'
export class Money {
    amount: number;
    currency: AvailableCurrencies;
    inspect: string;

    readonly baseCurrency = 'EUR';
    private conversionRates = {
        EUR: {
            EUR: 1,
            USD: 1.11,
            Bitcoin: 0.047,
            SGD: 1.60
        }
    };

    constructor(amount: number, targetCurrency: AvailableCurrencies) {
        this.convertTo(amount, targetCurrency);
    }

    convertTo(amount: number, targetCurrency: AvailableCurrencies) {
        if (amount === undefined || targetCurrency === undefined) {
            throw Error('Cannot perform conversion: Some params are missing');
        }
        const base = this.conversionRates[this.baseCurrency];
        if (base === undefined) {
            throw Error('Invalid base currency');
        }
        const target = base[targetCurrency];

        if (target === undefined) {
            throw Error('Invalid target currency');
        }
        const targetAmount = amount / target;

        this.amount = parseInt(targetAmount.toFixed(2));
        this.currency = targetCurrency;
        this.inspect = `${Number(targetAmount).toFixed(2)} ${this.baseCurrency}`;
    }
}

export class CurrencyCalculator {
    static add(
        val1: Money,
        val2: Money
    ): Money {


        const sum = val1.amount + val2.amount;

        return new Money(sum, 'EUR');
    }

    static subtract(
        val1: Money,
        val2: Money
    ): Money {
        const sum = val1.amount - val2.amount;
        return new Money(sum, 'EUR');
    }

    static multiply(
        val1: Money,
        noOfTimes: number
    ): Money {


        const sum = val1.amount * noOfTimes;
        return new Money(sum, 'EUR');
    }

    static divide(
        val1: Money,
        dividedBy: number
    ): Money {


        try {
            const sum = val1.amount / dividedBy;
            return new Money(sum, 'EUR');
        } catch (e) {
            throw Error('Error in division');
        }
    }

    static isEqual(
        val1: Money,
        val2: Money
    ): boolean {

        return val1.amount === val2.amount;
    }

    static isGreater(
        val1: Money,
        val2: Money
    ): boolean {

        return val1.amount > val2.amount;
    }

    static isLess(
        val1: Money,
        val2: Money
    ): boolean {

        return val1.amount < val2.amount;
    }
}
