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
    "Herbie"
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
    "Nedbank",
    "ABSA",
    "FNB",
    "Standard Bank",
    "Discovery Bank",
    "Capitec Bank",
    "Bidvest Bank"
];

// Set business name to randomise
let ourBusinessName = randomItem(businesses);
// Set ourOwner name to randomise every time
let ourOwner = randomItem(owners);
let month = randomItem(months);
let year = randomItem(years);
let randomBank = randomItem(banks);

// Different account types and sub-accounts
const classifications = {
    // All assets
    assets: [
        {name: "Trading Stock", alts: ['stock', 'goods', 'products', 'trading stock']},
        {name: "Vehicles", alts: ['motor vehicle', 'motorbike', 'bicycle', 'vehicle']},
        {name: "Equipment", alts: ['computers', 'computer', 'printers', 'fax machines']},
        {name: "Machinery", alts: ['mechanical drill', 'large jackhammer']},
        {name: "Land and buildings", alts: ['property', 'new property', 'storage facility']}
    ],
    // All liabilities
    liabilities: [
        {name: 'Loan', alts: ['a loan', 'a substantial loan']},
        {name: "Mortgage bond", alts: ['property loan', 'bognd', 'mortgage bond']}
        ],
    drawings: [{name: 'Drawings', alts: ['drawings', 'money']}],
    capital: [{name :'Capital', alts: ['contribution', 'capital']}],
    // All expenses
    expenses: [
        {name: "Salaries", alts: []},
        {name: "Wages", alts: []},
        {name: "Repairs", alts: ['repairs to the motor vehicle']},
        {name: 'Advertising', alts: []},
        {name: 'Telephone', alts: ['the telephone account']},
        {name: 'Stationery', alts: []},
        {name: 'Water and electricity', alts: []},
        {name: 'Insurance', alts: []},
        {name: 'Packing material', alts: []},
        {name: 'Fuel', alts: []},
        {name: 'Bank charges', alts: []},
        {name: "Consumable goods", alts: []},
        {name: 'Interest on loan', alts: ['interest on long term liability']},
        {name: 'Interest expense', alts: ['interest on bank account']},
        {name: 'postage', alts: []},
        {name: 'Donations', alts: []},
        {name: "Rent Expense", alts: ["rent", "rental"]}
    ],
    // All incomes
    incomes: [
        {name: "Current income", alts: ['money from services rendered', 'money for a service']},
        {name: 'Rent', alts: ['rent']},
        {name: 'Donations', alts: ['donations']},
        {name: 'Commission', alts: ['commission', 'a part of sale']},
        {name: 'Cash sales', alts: []}
    ]
};

const options = ["cash", "", "on credit"];

// TODO - Create a list of different account alternatives e.g. services rendered -> current income
// const fakeExpenses = [{name: "rent expense", alts: ['rent', 'rental']}];

function randomItem(item) {
    return item[Math.floor(Math.random() * item.length)];
}

function randomAccount(item) {
    return randomItem(item.alts);
}

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

function matchedNumber(currentString, testString) {
    return currentString.match(testString);
}

class Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum) {
        this._accountType = "default";
        this._paymentMethod = "default";
        this._businessName = ourBusinessName;
        this._folio = "default";
        this._option = randomItem(options);
        this._ownerName = ourOwner;
        this._transactionString = "this is the default transaction printout";
        this._date = randomItem(dates);
        this._otherBusiness = randomItem(payersOfMoney);
        this._lowNum = lowNum;
        this._highNum = highNum;
        this._transactionAmount = 0;
        this._month = month;
        this._bank = randomBank;
    }

    randomisedNum(lowNum, highNum) {
        this._transactionAmount = randomisedNum(lowNum, highNum);
    }

    get transactionString() {
        return this._transactionString;
    }

    set transactionString(value) {
        this._transactionString = value;
    }

    setAccountType(accountType) {
        this._accountType = randomAccount(accountType[0]);
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
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

    set paymentMethod(value) {
        this._paymentMethod = value;
    }

    get accountType() {
        return this._accountType;
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

    set bank(value) {
        this._bank = value;
    }
}

class Expense extends Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum) {
        super(accountType, lowNum, highNum);
        this.randomisedNum(lowNum, highNum);
        this.paymentMethod = paymentMethod;
        this.setAccountType(accountType);
        if (this.option === 'cash' || '') {
            this.folio = 'CPJ';
        } else {
            this.folio = 'CJ';
        }
        this.transactionString = `${this.date}${'&#09;'}${this._businessName} ${this.paymentMethod} ${this.otherBusiness} for ${this.accountType} for the sum of R${this.transactionAmount} ${this.option}.`;
    }
}

class Asset extends Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum) {
        super(accountType, lowNum, highNum);
        this.randomisedNum(lowNum, highNum);
        this.paymentMethod = paymentMethod;
        this.setAccountType(accountType);
        if ((this.paymentMethod === 'bought' || this.paymentMethod === 'purchased') && (this.option === 'cash' || '')) {
            this.folio = 'CPJ';
        } else {
            this.folio = 'CJ';
        }

        this.transactionString = `${this.date}${'&#09;'}${this._businessName} ${this.paymentMethod} ${this.accountType} from ${this.otherBusiness} amounting to R${this.transactionAmount} ${this.option}.`;
    }
}

class Income extends Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum) {
        super(accountType, lowNum, highNum);
        this.randomisedNum(lowNum, highNum);
        this.paymentMethod = paymentMethod;
        this.setAccountType(accountType);
        if (this.option === 'cash' || '') {
            this.folio = 'CRJ';
        } else {
            this.folio = 'DJ';
        }
        this.transactionString = `${this.date}${'&#09;'}${this._businessName} ${this.paymentMethod} ${this.accountType} amounting to R${this.transactionAmount} ${this.option} from ${this.otherBusiness}.`;
    }
}

class Capital extends Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum, option) {
        super(accountType, lowNum, highNum);
        this.randomisedNum(lowNum, highNum);
        this.paymentMethod = paymentMethod;
        this.setAccountType(accountType);
        this.date = 1;
        this.folio = "CRJ";
        this.option = option;
        this.transactionString = `${this.date}${'&#09;'}The owner, ${this.ownerName} ${this.paymentMethod} a total of R${this.transactionAmount} ${this.option}.`;
    }
}

class Liability extends Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum) {
        super(accountType, lowNum, highNum);
        this.randomisedNum(lowNum, highNum);
        this.paymentMethod = paymentMethod;
        this.setAccountType(accountType);
        if ((this.paymentMethod === 'acquired' || this.paymentMethod === 'received') && (this.option ==='cash' || '')) {
            this.folio = 'CRJ';
        } else {
            this.folio = 'CPJ';
        }
        this.transactionString = `${this.date}${'&#09;'}${this._businessName} ${this.paymentMethod} ${this.accountType} amounting to R${this.transactionAmount} from ${this.bank}.`;
    }
}

class Drawings extends Transaction {

    constructor(accountType, paymentMethod, reasonForTransaction, lowNum, highNum) {
        super(paymentMethod, lowNum, highNum);
        this.paymentMethod = paymentMethod;
        this._reasonForTransaction = reasonForTransaction;
        this.setAccountType(accountType);
        this.randomisedNum(lowNum, highNum);
        this.folio = "CPJ";
        this.transactionString = `${this.date}${'&#09;'}The business owner, ${this.ownerName} ${this.paymentMethod} cash worth R${this.transactionAmount} for ${this._reasonForTransaction}`;
    }
}

// Base Transaction
// let transaction = new Transaction("default", "default", 0, 0);

// Expenses
let expense1 = new Expense(classifications.expenses,"made payment to", 2000, 10000);
let expense2 = new Expense(classifications.expenses, "paid", 8000, 20000);
// Incomes
let income1 = new Income(classifications.incomes, 'received', 5000, 8000);
let income2 = new Income(classifications.incomes, 'received', 10000, 15000);
// Assets
let asset1 = new Asset(classifications.assets,'purchased', 10000, 100000);
let asset2 = new Asset(classifications.assets, 'bought', 50000, 200000);
let asset3 = new Asset(classifications.assets, 'received', 10000, 200000);
// Capital
let capital = new Capital(classifications.capital, 'deposited into the businesses bank account', 10000, 1000000, "cash");
// Liabilities
let liability1 = new Liability(classifications.liabilities, "received", 4000, 140000, "cash");
let liability2 = new Liability(classifications.liabilities, "acquired", 50000, 100000, "cash");
// Drawings
let drawings1 = new Drawings(classifications.drawings, "withdrew", "personal debt payment",5000, 10000);
let drawings2 = new Drawings(classifications.drawings, "took out", "buying small personal items", 100, 1000);

// Transaction list push area
const transactionListArray = [];
const pushToTransactionList = () => {
    transactionListArray.push(capital);
    transactionListArray.push(expense1);
    transactionListArray.push(expense2);
    transactionListArray.push(asset1);
    transactionListArray.push(asset2);
    transactionListArray.push(asset3);
    transactionListArray.push(liability1);
    transactionListArray.push(liability2);
    transactionListArray.push(drawings1);
    transactionListArray.push(drawings2);
    transactionListArray.push(income1);
    transactionListArray.push(income2);
};
pushToTransactionList();

// Sorting the array
transactionListArray.sort((a, b) => {
   return a.date - b.date;
});

const replaceDateWithBlankSpace = array => {
    for (let i = 0; i < array.length-1; i++) {
        if (array[i].date === array[i+1].date) {
            array[i+1].date = '';
       }

       if (i>1) {
           if (array[i-2].date === array[i].date) {
               array[i].date = '';
           }
       }
    }
};

replaceDateWithBlankSpace(transactionListArray);





// DOM implementation
// Where the transaction list is created in the DOM
let ulString = '<ul class="list-group">';
transactionListArray.forEach((index) => {
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
