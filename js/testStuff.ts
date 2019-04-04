const transactions = {
    incomes: [{name: 'current', alts: ['sasas', 'saass']}, {name: 'rent', alts: ['sasas', 'saas']}],
};

const randomItem = (item) => {
    return item[Math.floor(Math.random() * item.length)];
};

const randomAccountName = (item) => {
    return item.name;
};

const randomAccountAlt = (item) => {
    return item.alts[Math.floor(Math.random() * item.alts.length)];
};

class Transaction {
    constructor(accountType) {
        this._accountType = accountType;
        this._string = `This is a string and the account type is ${this.accountType}`;
    }

    get accountType() {
        return randomItem(this._accountType);
    }

    get accountName() {
        return randomAccountName(this.accountType);
    }

    get accountAlts() {
        return randomAccountAlt(this.accountType);
    }

    get string() {
        return this._string;
    }

    set string(value) {
        this._string = value;
    }
}

class Incomes extends Transaction{
    constructor(accountType) {
        super(accountType);

        this.string = `Wow an income string with the account alts of ${this.accountAlts}`;

    }


}

let transaction = new Transaction(transactions.incomes);
console.log(transaction.string);

let drawings1 = new Incomes(transactions.incomes);

console.log(drawings1.string);
console.log(drawings1.accountName);
console.log(drawings1.accountType);
