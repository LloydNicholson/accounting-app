'use strict';

// Not going to randomise business names - decided against it
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
    "Jim's Attorneys"
];

// Set business name to randomise
let ourBusinessName = randomWord(businesses);

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
    "Chris"
];

// Set owner name to randomise everytime
let owner = randomWord(owners);
//
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

const month = randomWord(months);

// Initialise year array
const years = [];
for (let i = 2000; i < 2019; i++) {
    years.push(i);
}
let year = randomWord(years);

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
];

const banks = [
    "Nedbank",
    "ABSA bank",
    "FNB",
    "Standard Bank",
    "Discovery Bank",
    "Capitec bank",
    "Bidvest bank"
];

let bank = randomWord(banks);

// Different account types and sub-accounts
const classifications = {
    // All assets
    assets: [
        "trading stock",
        "vehicles",
        "equipment",
        "machinery",
        "land and buildings"
    ],
    // All liabilities
    liabilities: ["a loan", "a mortgage bond", "a bank overdraft"],
    drawings: ["drawings"],
    capital: ["capital"],
    // All expenses
    expenses: [
        "salaries",
        "wages",
        "repairs to the motor vehicle",
        "advertising",
        "the telephone account",
        "telephone",
        "stationery",
        "water and electricity",
        "insurance",
        "packing material",
        "fuel",
        "bank charges",
        "consumable goods",
        "interest on loan",
        "postage",
        "donations",
        "rent"
    ],
    // All incomes
    incomes: ["current income", "rent", "donations", "commission", "cash sales"]
};

// const option = ["cash", "", "on credit"];

// Create a random word
function randomWord(item) {
    return item[Math.floor(Math.random() * item.length)];
}

// Randomised date
const dates = [];
const firstDay = 1;
const lastDay = 28;
for (let i = firstDay; i < lastDay; i++) {
    dates.push(i);
}

// Create random values between two points
function randomisedNum(low_num, high_num) {
    return Math.floor(Math.random() * high_num) + Math.floor(low_num);
}


function hasNumber(currentString, testString) {
    return currentString.match(testString);
}

// transaction list array
const transactionListArray = [];

class Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum) {
        this._accountType = "default";
        this._paymentMethod = "default";
        this._businessName = ourBusinessName;
        this._ownerName = owner;
        this._transaction = "this is the default transaction printout";
        this._date = randomWord(dates);
        this._otherBusiness = randomWord(payersOfMoney);
        this._lowNum = lowNum;
        this._highNum = highNum;
        this.randomisedNum(this._lowNum, this._highNum);
        this._transactionAmount = 0;
        this._month = month;
    }

    randomisedNum(lowNum, highNum) {
        this._transactionAmount = randomisedNum(lowNum, highNum);
    }

    generateTransaction() {
        return this._transaction;
    }

    setAccountType(accountType) {
        this._accountType = randomWord(accountType);
    }

    pushTransactionToArray() {
        if (this.generateTransaction() != null) {
            transactionListArray.push(this.generateTransaction());
        }
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

    set ownerName(value) {
        this._ownerName = value;
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

    set otherBusiness(value) {
        this._otherBusiness = value;
    }

    get month() {
        return this._month;
    }
}

class Expense extends Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum) {
        super();
        this.setAccountType(accountType);
        this.paymentMethod = paymentMethod;
        this.randomisedNum(lowNum, highNum);
    }

    generateTransaction() {
        return `${this.date}. ${this._businessName} ${this.paymentMethod} ${this._otherBusiness} for ${this.accountType} for the sum of R${this._transactionAmount}.`;
    }
}

class Asset extends Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum) {
        super();
        this.setAccountType(accountType);
        this.paymentMethod = paymentMethod;
        this.randomisedNum(lowNum, highNum);
    }

    generateTransaction() {
        return `${this.date}. ${this._businessName} ${this.paymentMethod} ${this.accountType} from ${this._otherBusiness} amounting to R${this._transactionAmount}.`;
    }
}

class Income extends Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum) {
        super();
        this.setAccountType(accountType);
        this.paymentMethod = paymentMethod;
        this.randomisedNum(lowNum, highNum);
    }

    generateTransaction() {
        return `${this.date}. ${this._businessName} ${this.paymentMethod} ${this.accountType} amounting to R${this._transactionAmount} from ${this._otherBusiness}.`
    }
}

class Capital extends Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum) {
        super();
        this.setAccountType(accountType);
        this.paymentMethod = paymentMethod;
        this.randomisedNum(lowNum, highNum);
        this.date = 1;
    }

    generateTransaction() {
        return `${this.date}. The owner, ${this.ownerName} ${this.paymentMethod} a total of R${this._transactionAmount}.`;
    }

}

class Liability extends Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum) {
        super();
        this.setAccountType(accountType);
        this.paymentMethod = paymentMethod;
        this.randomisedNum(lowNum, highNum);
        this._bank = bank;
    }

    generateTransaction() {
        return `${this.date}. ${this._businessName} ${this.paymentMethod} ${this.accountType} amounting to R${this._transactionAmount} from ${this._bank}.`
    }
}

class Drawings extends Transaction {

    constructor(accountType, paymentMethod, reasonForTransaction, lowNum, highNum) {
        super();
        this._reasonForTransaction = reasonForTransaction;
        this.setAccountType(accountType);
        this.paymentMethod = paymentMethod;
        this.randomisedNum(lowNum, highNum);
    }

    generateTransaction() {
        return `${this.date}. The business owner, ${this.ownerName} ${this.paymentMethod} cash worth R${this._transactionAmount} for ${this._reasonForTransaction}`;
    }
}

// Expenses
let expense1 = new Expense(classifications.expenses,"made a payment to", 2000, 10000);
let expense2 = new Expense(classifications.expenses, "paid to", 8000, 20000);
// Incomes
let income1 = new Income(classifications.incomes, 'received', 5000, 8000);
let income2 = new Income(classifications.incomes, 'received', 10000, 15000);
// Assets
let asset1 = new Asset(classifications.assets,'purchased', 10000, 100000);
let asset2 = new Asset(classifications.assets, 'bought', 50000, 200000);
// Capital
let capital = new Capital(classifications.capital, 'deposited into the businesses bank account', 10000, 1000000);
// Liabilities
let liability1 = new Liability(classifications.liabilities, "received", 4000, 140000);
let liability2 = new Liability(classifications.liabilities, "acquired", 50000, 100000);
// Drawings
// let drawings1 = new Drawings(classifications.drawings, "withdrew", "personal debt payment",5000, 10000);
let drawings2 = new Drawings(classifications.drawings, "took out", "buying small personal items", 100, 1000);

// Transaction list push area
capital.pushTransactionToArray();
expense1.pushTransactionToArray();
expense2.pushTransactionToArray();
asset1.pushTransactionToArray();
asset2.pushTransactionToArray();
liability1.pushTransactionToArray();
liability2.pushTransactionToArray();
// drawings1.pushTransactionToArray();
drawings2.pushTransactionToArray();
income1.pushTransactionToArray();
income2.pushTransactionToArray();

// DOM implementation
// Where the transaction list is created in the DOM
// Sorting the array
transactionListArray.sort((a, b) => {
   return parseInt(a) - parseInt(b);
});


const replaceDateWithBlankSpace = array => {
    const length = array.length - 1;

    for (let i = 0; i < length; i++) {
        const regex = /^\d+./;
        const currentString = array[i];
        const nextString = array[i + 1];
        const tabCharacter = '&#9;';

        const currentDate = currentString.match(regex);
        const nextDate = nextString.match(regex);

        // Check if array is at first index
        if (i >= 0 && i <= length+1) {
            array[i+1] = array[i+1].replace(/\s/, tabCharacter);
        }

        // Find if current date equals next date and set a blank area
        if (currentDate && nextDate && currentDate[0] === nextDate[0]){
            array[i+1] = array[i+1].replace(regex, "");
        }

    }
};
replaceDateWithBlankSpace(transactionListArray);
// console.log(transactionListArray);

let ulString = "<ul>";
transactionListArray.forEach((transaction) => {
    ulString += "<li>" + transaction + "</li>";
});
ulString += "</ul>";



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



