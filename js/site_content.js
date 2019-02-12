'use strict';

// Different business names
const businesses = [
    "Rancid Retailers",
    "Trusted Traders",
    "Lawdy Lawnmowers",
    "Garbage Gardening",
    "Anti Accounting Firm",
    "B-e-a-utiful Beauty Salon",
    "Handy Hairstylists",
    "Ordinary Orthodontists",
    "Daily Dentists",
    "Silly Sweets",
    "XYZ Stationers",
    "Sporty Sports Gear",
    "Freedom Flowers",
    "Enlightened Engineers",
    "Trendy Tutors",
    "Fresh Fellers",
    "Feline Friends",
    "Jim's Attorneys",
    "Advocates for Animals",
];

// Different owners names
const owners = [
    "Douglas",
    "Evelyn",
    "Alice",
    "Rosemary",
    "George",
    "Frederick",
    "Klaus",
    "Lee",
    "Mark",
    "Ivy",
    "Isabel",
    "Marie",
    "Patricia",
    "Jessie",
    "Kerry",
    "Martin",
    "Chris",
    "Rachel",
    "Patrick",
    "Colin",
    "Herbie",
    'Georgia'
];

// Month array
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// Initialise year array
const years = [];
for (let i = 2005; i < 2020; i++) {years.push(i);}

const payersOfMoney = [
    "Joe's Traders",
    "Mitchell's Manufacturers",
    "Levine's Loggers",
    "Harry's Movers",
    "Barry's Electricians",
    "Mary's Plumbers",
    "Carl's Cupboards",
    "Anne's Actuaries",
    "James' Carpenters",
    "Stacey's Stockers",
    "Bryan's Brewers",
    "Fun Flops",
    "Made in China Manufacturers",
    "Protecting People"
];

const banks = [
    'Nedbank',
    'ABSA',
    'FNB',
    'Standard Bank',
    'Discovery Bank',
    'Capitec Bank',
    'Bidvest Bank',
    'African Bank'
];

// Different account types and sub-accounts
const classifications = {
    // All assets
    assets: [
        {name: 'Trading stock', alts: ['trading inventory', 'stock', 'goods', 'products', 'trading stock', 'inventory']},
        {name: 'Vehicles', alts: ['motor vehicle', 'motorbike', 'bicycle', 'vehicle']},
        {name: 'Equipment', alts: ['computers', 'a computer', 'printers', 'fax machines']},
        {name: 'Machinery', alts: ['a mechanical drill', 'a large jackhammer']},
        {name: 'Land and buildings', alts: ['a property', 'a new property', 'a storage facility']}
    ],
    // All liabilities
    liabilities: [
        {name: 'Loan', alts: ['a loan', 'a substantial loan']},
        {name: 'Mortgage bond', alts: ['a property loan', 'a bond', 'a mortgage bond']}
        ],
    drawings: [{name: 'Drawings', alts: ['drawings', 'money']}],
    capital: [{name :'Capital', alts: ['contribution', 'capital']}],
    // All expenses
    expenses: [
        {name: 'Salaries', alts: ['salaries', 'monthly payments to employees']},
        {name: 'Wages', alts: ['wages', 'employee weekly wages']},
        {name: 'Repairs', alts: ['repairs to the motor vehicle', 'fixing vehicles']},
        {name: 'Advertising', alts: ['advertising', 'advertisement']},
        {name: 'Telephone', alts: ['telephone account', 'cellphone bill']},
        {name: 'Stationery', alts: ['stationery', 'pencils and pens', 'paper']},
        {name: 'Water and electricity', alts: ['rates bill', 'water and electricity']},
        {name: 'Insurance', alts: ['insurance']},
        {name: 'Packing material', alts: ['packing material', 'cardboard for packing']},
        {name: 'Fuel', alts: ['petrol', 'diesel', 'fuel']},
        {name: 'Bank charges', alts: ['bank fees', 'bank charges']},
        {name: "Consumable goods", alts: ['food', 'groceries', 'flowers']},
        {name: 'Interest on loan', alts: ['interest on long term liability']},
        {name: 'Interest expense', alts: ['interest on bank account', 'interest']},
        {name: 'Postage', alts: ['postage', 'envelopes']},
        {name: 'Donations', alts: ['donations', 'goods for the underprivileged']},
        {name: "Rent expense", alts: ["rent", "rental"]},
        {name: 'Repayment of loan', alts: ['an amount owed to the bank']}
    ],
    // All incomes
    incomes: [
        {name: 'Current income', alts: ['money for services rendered', 'money for a service']},
        {name: 'Rent income', alts: ['rent', 'rental', 'money from a tenant']},
        {name: 'Donations', alts: ['donations']},
        {name: 'Commission income', alts: ['commission', 'a percentage of sale']},
        {name: 'Sales', alts: ['sales', 'money from goods sold']}
    ]
};

const options = ['cash', '', 'on credit'];

const randomItem = (item) => {
    return item[Math.floor(Math.random() * item.length)];
};

// Set business name to randomise
let ourBusinessName = randomItem(businesses);
// Set ourOwner name to randomise every time
let ourOwner = randomItem(owners);
let month = randomItem(months);
let year = randomItem(years);
let randomBank = randomItem(banks);

// const randomItem1 = randomItem(classifications.incomes);
// const randomAlt = randomItem1.alts[Math.floor(Math.random() * randomItem1.alts.length)];

// TODO - Randomise on click
// const randomise = () => { trying to randomise on click
//
// };

// Create random values between two points
function randomisedNum(low_num, high_num) {
    return Math.floor(Math.random() * high_num) + Math.floor(low_num);
}

// Randomised date
const dates = [];
let firstDay = 1;
let lastDay = 28;
switch (month) {
    case 'January': case 'March': case 'May': case 'July': case 'August': case 'October': case 'December': lastDay = 31;
    break;
    case 'April': case 'June': case 'September': case 'November': lastDay = 30;
    break;
    case 'February': lastDay = 28;
}

for (let i = firstDay; i <= lastDay; i++) {
    dates.push(i);
}

class Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum) {
        this._accountType = randomItem(accountType);
        this._paymentMethod = paymentMethod;
        this._businessName = ourBusinessName;
        this._folio = "default";
        this._option = randomItem(options);
        this._ownerName = ourOwner;
        this._transactionString = 'this is the default transaction printout';
        this._currentDate = randomItem(dates);
        this._otherBusiness = randomItem(payersOfMoney);
        this._transactionAmount = randomisedNum(lowNum, highNum);
        this._month = month;
        this._bank = randomBank;
        this._documentType = '';
        this._analyse = true;
        this._debit = 'Debit account';
        this._credit = 'Credit account';
    }

    get className() {
        return this.constructor.name;
    }

    get transactionString() {
        return this._transactionString;
    }

    set transactionString(value) {
        this._transactionString = value;
    }

    get analyse() {
        return this._analyse;
    }

    set analyse(value) {
        this._analyse = value;
    }

    get debit() {
        return this._debit;
    }

    set debit(value) {
        this._debit = value;
    }

    get credit() {
        return this._credit;
    }

    set credit(value) {
        this._credit = value;
    }

    get documentType() {
        return this._documentType;
    }

    set documentType(value) {
        this._documentType = value;
    }

    get accountType() {
        return this._accountType;
    }

    set accountType(value) {
        this._accountType = value;
    }

    get accountName() {
        return this.accountType.name;
    }

    get accountAlts() {
        return this.accountType.alts[Math.floor(Math.random() * this.accountType.alts.length)];
    }

    get currentDate() {
        return this._currentDate;
    }

    set currentDate(value) {
        this._currentDate = value;
    }

    get ownerName() {
        return this._ownerName;
    }

    get folio() {
        return this._folio;
    }

    set folio(value) {
        this._folio = value;
    }

    get option() {
        return this._option;
    }

    set option(value) {
        this._option = value;
    }

    get paymentMethod() {
        return this._paymentMethod;
    }

    get otherBusiness() {
        return this._otherBusiness;
    }

    get transactionAmount() {
        return this._transactionAmount;
    }

    set transactionAmount(value) {
        this._transactionAmount = value;
    }

    get bank() {
        return this._bank;
    }
}

class Expense extends Transaction {
    constructor(paymentMethod, lowNum, highNum) {
        super(classifications.expenses, paymentMethod, lowNum, highNum);
        // Check for option and set the folio
        if (this.option === 'cash' || this.option === '') {
            this.folio = 'CPJ';
            this.debit = this.accountName;
            this.credit = 'Bank';
        } else {
            this.folio = 'CJ';
            this.debit = this.accountName;
            this.credit = 'Creditors control';
        }

        this.transactionString = `${this.currentDate}${'&#09;'}${this._businessName} ${this.paymentMethod} ${this.otherBusiness} for ${this.accountAlts} for the sum of R${this.transactionAmount} ${this.option}.`;
    }
}

class Asset extends Transaction {
    constructor(paymentMethod, lowNum, highNum) {
        super(classifications.assets, paymentMethod, lowNum, highNum);

        // Check for option and set the folio
        if (this.option === 'cash' || this.option === '') {
            this.folio = 'CPJ';
            this.debit = this.accountName;
            this.credit = 'Bank'
        } else {
            this.folio = 'CJ';
            this.debit = this.accountName;
            this.credit = 'Creditors control';
        }

        this.transactionString = `${this.currentDate}${'&#09;'}${this._businessName} ${this.paymentMethod} ${this.accountAlts} from ${this.otherBusiness} amounting to R${this.transactionAmount} ${this.option}.`;
    }
}

class Income extends Transaction {
    constructor(paymentMethod, lowNum, highNum) {
        super(classifications.incomes, paymentMethod, lowNum, highNum);

        // Check for option and set the folio
        if (this.option === 'cash' || this.option === '') {
            this.folio = 'CRJ';
            this.debit = 'Bank';
            this.credit = this.accountName;
        } else {
            this.folio = 'DJ';
            this.debit = 'Debtors control';
            this.accountType = classifications.incomes[4];
        }

        // Set document based on payment method
        if ((this.folio === 'CRJ') && this.accountName === 'Current income') {
            this.documentType = 'CRR'
        } else {
            this.documentType = 'Rec'
        }

        this.transactionString = `${this.currentDate}${'&#09;'}${this._businessName} ${this.paymentMethod} ${this.accountAlts} amounting to R${this.transactionAmount} ${this.option} from ${this.otherBusiness}.`;
    }
}

class Capital extends Transaction {
    constructor(paymentMethod, lowNum, highNum) {
        super(classifications.capital, paymentMethod, lowNum, highNum);
        this.folio = "CRJ";
        this.debit = 'Bank';
        this.credit = this.accountName;
        this.documentType = 'B/S';
        this.analyse = false;
        this.option = randomItem(['cash', '']);
        this.transactionString = `${this.currentDate}${'&#09;'}The owner, ${this.ownerName} ${this.paymentMethod} a total of R${this.transactionAmount} ${this.option}.`;
    }
}

class Liability extends Transaction {
    constructor(paymentMethod, lowNum, highNum) {
        super(classifications.liabilities, paymentMethod, lowNum, highNum);
        this.folio = 'CRJ';
        this.debit = 'Bank';
        this.credit = this.accountName;
        this.documentType = 'Rec';

        this.transactionString = `${this.currentDate}${'&#09;'}${this._businessName} ${this.paymentMethod} ${this.accountAlts} amounting to R${this.transactionAmount} from ${this.bank}.`;
    }
}

class Drawings extends Transaction {

    constructor(paymentMethod, reasonForTransaction, lowNum, highNum) {
        super(classifications.drawings, paymentMethod, lowNum, highNum);
        this._reasonForTransaction = reasonForTransaction;
        this.folio = "CPJ";
        this.debit = this.accountName;
        this.credit = 'Bank';
        this.option = '';

        this.transactionString = `${this.currentDate}${'&#09;'}The business owner, ${this.ownerName} ${this.paymentMethod} cash worth R${this.transactionAmount} for ${this._reasonForTransaction}`;
    }
}

// Base Transaction
// let transaction = new Transaction(classifications.expenses, "default", 0, 0);

// Expenses
let expense1 = new Expense("made payment to", 2000, 10000);
let expense2 = new Expense("paid", 8000, 20000);
// Incomes
let income1 = new Income('received', 5000, 8000);
let income2 = new Income('received', 10000, 15000);
let income3 = new Income('received', 10000, 15000);
let income4 = new Income('got', 8000, 10000);

// Assets
let asset1 = new Asset('purchased', 10000, 100000);
let asset2 = new Asset('bought', 50000, 200000);
let asset3 = new Asset('bought', 10000, 200000);
let asset4 = new Asset('made payment for', 9000, 20000);

// Capital
let capital = new Capital('deposited into the businesses bank account', 10000, 1000000);
// Liabilities
let liability1 = new Liability("received", 4000, 140000);
let liability2 = new Liability("acquired", 50000, 100000);
// Drawings
let drawings1 = new Drawings("withdrew", "personal debt payment",5000, 10000);
let drawings2 = new Drawings("took out", "buying small personal items", 100, 1000);

// Transaction list push area
const transactionList = [];

const pushToArray = (array) => {
    array.push(capital);
    array.push(expense1);
    array.push(expense2);
    array.push(asset1);
    array.push(asset2);
    array.push(asset3);
    array.push(asset4);
    array.push(liability1);
    array.push(liability2);
    array.push(drawings1);
    array.push(drawings2);
    array.push(income1);
    array.push(income2);
    array.push(income3);
    array.push(income4);
};

// Push area
pushToArray(transactionList);

// Sorting the array
const sortArray = (array) => {
    array.sort((a, b) => {
        return a.currentDate - b.currentDate;
    });
};

// Sort area
sortArray(transactionList);

// const replaceDateWithBlankSpace = array => {
//     for (let i = 0; i < array.length-1; i++) {
//         if (array[i].currentDate === array[i+1].currentDate) {
//             array[i+1].currentDate = '';
//        }
//
//        if (i>1) {
//            if (array[i-2].currentDate === array[i].currentDate) {
//                array[i].currentDate = '';
//            }
//        }
//     }
// };
//
// replaceDateWithBlankSpace(transactionList);

// DOM implementation
// Where the transaction list is created in the DOM
let ulString = '<ul class="list-group">';
transactionList.forEach((index) => {
    ulString += '<li class="list-group-item" style="white-space: pre-wrap">' + index.transactionString + '</li>';
});
ulString += '</ul>';

// DOM
// Create heading for entire transaction list
function createHeading() {
    let transactionHeading = document.querySelector('#transactionListHeading');
    transactionHeading.innerHTML = `Use the following information to complete the template of ${ourBusinessName} for the month of ${month} ${year}`;
}
createHeading();

// Add transaction to list elements
let transactionArea = document.querySelector('#transactionList');
transactionArea.innerHTML = ulString;

