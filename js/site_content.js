'use strict';
console.dir(document);

// Not going to randomise business names - decided against it
// // Different business names
// const businesses = [
//     "Rancid Retailers",
//     "Trusted Traders",
//     "Lawdy Lawnmowers",
//     "Garbage Gardening",
//     "Anti Accounting Firm",
//     "B-e-a-utiful Beauty Salon",
//     "Handy Hairstylists",
//     "Ordinary Orthodontists",
//     "Daily Dentists",
//     "Silly Sweets",
//     "XYZ Stationers",
//     "Sporty Sports Gear",
//     "Freedom Flowers",
//     "Enlightened Engineers",
//     "Trendy Tutors",
//     "Fresh Fellers",
//     "Feline Friends",
//     "Jim's Attorneys"
// ];
//
// // Set business name to randomise
// let ourBusiness = randomWord(businesses);

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
    "Stacey's Stockers"
];

const bank = [
    "Nedbank",
    "ABSA bank",
    "FNB",
    "Standard Bank",
    "Discovery Bank",
    "Capitec",
    "Bidvest"
];

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
        "the interest on our overdrawn bank account",
        "interest on loan",
        "postage",
        "donations",
        "rent"
    ],
    // All incomes
    incomes: ["current income", "rent", "donations", "commission", "cash sales"]
};

const paymentMethod = ["paid for", "purchased", "bought", "widthdrew"];

const receiveMethod = [
    "received",
    "acquired",
    "deposited into the businesses bank account",
    "deposited into the the current account of the business"
];

const option = ["cash", "", "on credit"];

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

// transaction list array
const transactionListArray = [];

class Transaction {
    constructor(businessName) {
        this._accountType = "default";
        this._paymentMethod = "default";
        this._businessName = businessName;
    }

    createTransaction() {
        transactionListArray.push(``);
        this._transaction = transactionListArray;
    }

    displayTransaction() {
        let transactionArea = document.getElementById('transactionList');
        transactionArea.innerHTML = this._transaction;
    }

    get businessName() {
        return this._businessName;
    }

    set businessName(value) {
        this._businessName = value;
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

    set accountType(value) {
        this._accountType = value;
    }
}

class Expenses extends Transaction {
    constructor() {
        super();
        this._date = randomWord(dates);
        this.accountType = classifications.expenses;
        this.paymentMethod = paymentMethod[0];

    }

    createTransaction() {
        // return something completely different
        // yay!!!

    }
}

// Base level transaction
let transaction = new Transaction();
transaction.createTransaction(paymentMethod[0], classifications.expenses, 1000, 10000);
transaction.displayTransaction();

// Expenses
let expenseType = new Expenses();
expenseType.businessName = "Hello Kitty";





















// // Create an income transaction
// function createIncome(day, low_val, high_val) {
//         let transaction = day;
//         transaction += ". " + ourBusiness;
//         transaction += " " + receiveMethod[0];
//         transaction += " " + randomWord(accountType.incomes);
//         transaction += " amounting to R" + randomisedNum(low_val, high_val);
//         transaction += " " + randomWord(option.slice(0, 2));
//         transaction += " from " + randomWord(payee) + ".";
//
//         transaction.push(transaction);
//
// }
//
// // Create an asset transaction
// function createAsset(day, low_val, high_val) {
//         let transaction = day + ". ";
//         transaction += "Our business ";
//         transaction += " " + paymentMethod[1];
//         transaction += " " + randomWord(accountType.assets);
//         transaction += " to the value of R" + randomisedNum(low_val, high_val);
//         transaction += " " + randomWord(option.slice(0, 2));
//         transaction += " from " + randomWord(payee) + ".";
//
//         transaction.push(transaction);
//
// }
//
// // Create an liability transaction
// function createLiability(day, low_val, high_val) {
//         let transaction = day + ". ";
//         transaction += "The business ";
//         transaction += " " + receiveMethod[1];
//         transaction += " " + randomWord(accountType.liabilities);
//         transaction += " to the value of R" + randomisedNum(low_val, high_val);
//         transaction += " from " + randomWord(bank) + ".";
//
//         transaction.push(transaction);
// }
//
// // Create an capital transaction
// function createCapital(day, low_val, high_val) {
//         let transaction = day + ". ";
//         transaction += "The owner, " + owner;
//         transaction += " " + randomWord(receiveMethod.slice(2, 4));
//         transaction += ", a capital contribution";
//         transaction += " of R" + randomisedNum(low_val, high_val) + ".";
//
//         transaction.push(transaction);
// }
//
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
// function createTransactionList() {
//     createCapital(1, 1, 100000, 150000);
//     createExpense(3, 1, 2000, 4000);
//     createIncome(24, 1, 9000, 14000);
//     createIncome(4, 1, 1000, 3000);
//     createExpense(10, 1, 500, 1000);
//     createDrawings(11, 2, 6000, 10000);
//     createCapital(28, 1, 20000, 40000);
//     createLiability(12, 1, 40000, 50000);
//     createIncome(16, 1, 9000, 14000);
//     createAsset(20, 1, 50000, 100000);
//     createLiability(23, 1, 90000, 110000);
//     createExpense(27, 1, 5000, 10000);
// }
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




