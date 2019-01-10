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

// Create heading for entire transaction list
function createHeading() {

}

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
        this._ownerName = "No one yet";
        this._transaction = "this is the default transaction printout";
        this._date = randomWord(dates);
        this._otherBusiness = randomWord(payersOfMoney);
        this._lowNum = lowNum;
        this._highNum = highNum;
        this.randomisedNum(this._lowNum, this._highNum);
        this._transactionAmount = 0;
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
}

class Expense extends Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum) {
        super();
        this.setAccountType(accountType);
        this.paymentMethod = paymentMethod;
        this.randomisedNum(lowNum, highNum);
    }

    generateTransaction() {
        return `${this.date}. ${this._businessName} ${this.paymentMethod} ${this._otherBusiness} for ${this.accountType} for the sum of R${this._transactionAmount}`;
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
        return `${this.date}. ${this._businessName} ${this.paymentMethod} ${this.accountType} from ${this._otherBusiness} amounting to R${this._transactionAmount}`;
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
        return `${this.date}. ${this._businessName} ${this.paymentMethod} ${this.accountType} amounting to R${this._transactionAmount} from ${this._otherBusiness}`
    }
}

class Capital extends Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum) {
        super();
        this.ownerName = owner;
        this.setAccountType(accountType);
        this.paymentMethod = paymentMethod;
        this.randomisedNum(lowNum, highNum);
        this.date = 1;
    }

    generateTransaction() {
        return `${this.date}. The owner, ${this.ownerName} ${this.paymentMethod} a total of R${this._transactionAmount}`;
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
        return `${this.date}. ${this._businessName} ${this.paymentMethod} ${this.accountType} amounting to R${this._transactionAmount} from ${this._bank}`
    }
}

// Calling function to write code
// Base level transaction
// let transaction = new Transaction();

// Expenses
let expense1 = new Expense(classifications.expenses,"made a payment to", 2000, 10000);
// Incomes
let income1 = new Income(classifications.incomes, 'received', 5000, 8000);
// Assets
let asset1 = new Asset(classifications.assets,'purchased', 10000, 100000);
// Capital
let capital = new Capital(classifications.capital, 'deposited into the businesses bank account', 10000, 1000000);
// Liabilities
let liability1 = new Liability(classifications.liabilities, "received", 4000, 140000);


// Transaction list push area
capital.pushTransactionToArray();
expense1.pushTransactionToArray();
asset1.pushTransactionToArray();
liability1.pushTransactionToArray();
income1.pushTransactionToArray();

// DOM implementation
// Where the transaction list is created in the DOM
console.log("The original array: ");
console.log(transactionListArray);
transactionListArray.sort((a, b) => {
   return parseInt(a) - parseInt(b);
});

console.log("The new array: ");
console.log(transactionListArray);


let ulString = "<ul>";
transactionListArray.forEach((transaction) => {
    ulString += "<li>" + transaction + "</li>";
});
ulString += "</ul>";
console.log(transactionListArray);

let transactionArea = document.querySelector('#transactionList');
transactionArea.innerHTML = ulString;

let length = transactionListArray.length;
for (let i = 0; i < length-1; i++) {
    let current = transactionListArray[i];
    // let previous = transactionListArray[(i+length-1)%length];
    let next = transactionListArray[i+1];
    let firstNumber = parseInt(current);
    let secondNumber = parseInt(next);

    if (firstNumber === secondNumber)  {
        // Map the new array to replace a value
        transactionListArray.map((transaction) => {
            return transaction.replace(secondNumber, "   ");
        });
    }
}

console.log(transactionListArray);













// // Create an drawings transaction
// function createDrawings(day, low_val, high_val) {
//         let transaction = day + ". ";
//         transaction += owner;
//         transaction += " " + paymentMethod[3];
//         transaction += " " + randomWord(accountType.assets);
//         transaction += " worth R" + randomisedNum(low_val, high_val) + " for personal use.";
//
//         transaction.push(transaction);
// }
//
//
// function sortTransactions(transactions) {
//     // Trying to sort array by first letter
//     let dateInString = /\d+/;
//     for (let i = 0; i < transactions.length-1; i++) {
//         let regexNumFirst = transactions[i].match(dateInString);
//         let regexNumSecond = transactions[i+1].match(dateInString);
//         let temp = "";
//         if (regexNumSecond[0] > regexNumFirst[0]) {
//             temp = transactions[i+1];
//             transactions[i+1] = temp;
//         }
//     }
// }




