export class Money {
    amount: number;
    currency: string;
    inspect: string;

    private readonly baseCurrency =  'EUR';
    private conversionRates = {
        EUR: {
            EUR: 1,
            USD: 1.11,
            Bitcoin: 0.047,
            SGD: 1.60
        }
    };

    constructor(amount: number, targetCurrency: string) {
        this.convertTo(amount, targetCurrency);
    }

    convertTo(amount: number, targetCurrency: string) {
        if (!amount || !targetCurrency) {
            throw Error('Cannot perform conversion: Some params are missing');
        }
        const base = this.conversionRates[this.baseCurrency];
        if (!base) {
            throw Error('Invalid base currency');
        }
        const target = base[targetCurrency];

        if (!target) {
            throw Error('Invalid target currency');
        }
        const targetAmount = amount / target;

        this.amount = targetAmount;
        this.currency = targetCurrency;
        this.inspect = `${Number(targetAmount).toFixed(2)} ${this.baseCurrency}`;
    }
}

export class CurrencyCalculator {
    static add(
        val1: Money,
        val2: Money
    ): Money {
        const money1 = new Money(val1.amount, val1.currency);
        const money2 = new Money(val2.amount, val2.currency);

        const sum = money1.amount + money2.amount;

        return new Money(sum, money1.currency);
    }

    static subtract(
        val1: Money,
        val2: Money
    ): Money {
        const money1 = new Money(val1.amount, val1.currency);
        const money2 = new Money(val2.amount, val2.currency);

        const sum = money1.amount - money2.amount;
        return new Money(sum, money1.currency);
    }

    static multiply(
        val1: Money,
        val2: Money
    ): Money {
        const money1 = new Money(val1.amount, val1.currency);
        const money2 = new Money(val2.amount, val2.currency);

        const sum = money1.amount * money2.amount;
        return new Money(sum, money1.currency);
    }

    static divide(
        val1: Money,
        val2: Money
    ): Money {
        const money1 = new Money(val1.amount, val1.currency);
        const money2 = new Money(val2.amount, val2.currency);

        try {
            const sum = money1.amount / money2.amount;
            return new Money(sum, money1.currency);
        } catch (e) {
            throw Error('Error in division');
        }
    }

    static isEqual(
        val1: Money,
        val2: Money
    ): boolean {
        const money1 = new Money(val1.amount, val1.currency);
        const money2 = new Money(val2.amount, val2.currency);
        return money1.amount === money2.amount;
    }

    static isGreater(
        val1: Money,
        val2: Money
    ): boolean {
        const money1 = new Money(val1.amount, val1.currency);
        const money2 = new Money(val2.amount, val2.currency);
        return money1.amount > money2.amount;
    }

    static isLess(
        val1: Money,
        val2: Money
    ): boolean {
        const money1 = new Money(val1.amount, val1.currency);
        const money2 = new Money(val2.amount, val2.currency);
        return money1.amount < money2.amount;
    }
}
