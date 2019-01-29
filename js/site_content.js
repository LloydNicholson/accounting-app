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
for (let i = 2005; i < 2020; i++) {
    years.push(i);
}

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

// Set business name to randomise
let ourBusinessName = randomWord(businesses);
// Set owner name to randomise every time
let owner = randomWord(owners);
let month = randomWord(months);
let year = randomWord(years);
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
    liabilities: ["a loan", "a mortgage bond"],
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
        "interest expense",
        "postage",
        "donations",
        "rent"
    ],
    // All incomes
    incomes: ["current income", "rent", "donations", "commission", "cash sales"]
};

const option = ["cash", "", "on credit"];

// const randomise = () => { trying to randomise on click
//
// };

// Create a random word
function randomWord(item) {
    return item[Math.floor(Math.random() * item.length)];
}

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

// transaction list array
// const transactionListArray = [];

class Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum) {
        this._accountType = "default";
        this._paymentMethod = "default";
        this._businessName = ourBusinessName;
        this._folio = "default";
        this._option = "default";
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

    getTransaction() {
        return this._transaction;
    }

    setAccountType(accountType) {
        this._accountType = randomWord(accountType);
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

    set otherBusiness(value) {
        this._otherBusiness = value;
    }

    get month() {
        return this._month;
    }

    set month(value) {
        this._month = value;
    }

    get transactionAmount() {
        return this._transactionAmount;
    }

    set transactionAmount(value) {
        this._transactionAmount = value;
    }
}

class Expense extends Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum, option) {
        super();
        this.setAccountType(accountType);
        this.paymentMethod = paymentMethod;
        this.randomisedNum(lowNum, highNum);
        this.option = option;
        if (option === "cash") {
            this.folio = 'CPJ';
        } else {
            this.folio = 'CJ';
        }
    }

    getTransaction() {
        return `${this.date}${'&#09;'}${this._businessName} ${this.paymentMethod} ${this._otherBusiness} for ${this.accountType} for the sum of R${this._transactionAmount}, ${this.option}.`;
    }
}

class Asset extends Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum, option) {
        super();
        this.setAccountType(accountType);
        this.paymentMethod = paymentMethod;
        this.randomisedNum(lowNum, highNum);
        this.option = option;
        if ((paymentMethod === "bought" || paymentMethod === "purchased") && (option === "cash")) {
            this.folio = 'CPJ';
        } else {
            this.folio = 'CRJ';
        }
    }

    getTransaction() {
        return `${this.date}${'&#09;'}${this._businessName} ${this.paymentMethod} ${this.accountType} from ${this._otherBusiness} amounting to R${this._transactionAmount}, ${this.option}.`;
    }
}

class Income extends Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum, option) {
        super();
        this.setAccountType(accountType);
        this.paymentMethod = paymentMethod;
        this.randomisedNum(lowNum, highNum);
        this.option = option;
        if (option === "cash") {
            this.folio = 'CRJ';
        } else {
            this.folio = "DJ";
        }
    }

    getTransaction() {
        return `${this.date}${'&#09;'}${this._businessName} ${this.paymentMethod} ${this.accountType} amounting to R${this._transactionAmount}, ${this.option} from ${this._otherBusiness}.`
    }
}

class Capital extends Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum, option) {
        super();
        this.setAccountType(accountType);
        this.paymentMethod = paymentMethod;
        this.randomisedNum(lowNum, highNum);
        this.option = option;
        this.date = 1;
        this.folio = "CRJ";
    }

    getTransaction() {
        return `${this.date}${'&#09;'}The owner, ${this.ownerName} ${this.paymentMethod} a total of R${this._transactionAmount}, ${this.option}.`;
    }

}

class Liability extends Transaction {
    constructor(accountType, paymentMethod, lowNum, highNum, option) {
        super();
        this.setAccountType(accountType);
        this.paymentMethod = paymentMethod;
        this.randomisedNum(lowNum, highNum);
        this.option = option;
        this._bank = bank;
        if ((paymentMethod === "acquired" || paymentMethod === "received") && (option === "cash")) {
            this.folio = "CRJ";
        } else {
            this.folio = "CPJ";
        }
    }

    getTransaction() {
        return `${this.date}${'&#09;'}${this._businessName} ${this.paymentMethod} ${this.accountType} amounting to R${this._transactionAmount} from ${this._bank}.`
    }
}

class Drawings extends Transaction {

    constructor(accountType, paymentMethod, reasonForTransaction, lowNum, highNum) {
        super();
        this._reasonForTransaction = reasonForTransaction;
        this.setAccountType(accountType);
        this.paymentMethod = paymentMethod;
        this.randomisedNum(lowNum, highNum);
        this.folio = "CPJ";
    }

    getTransaction() {
        return `${this.date}${'&#09;'}The business owner, ${this.ownerName} ${this.paymentMethod} cash worth R${this._transactionAmount} for ${this._reasonForTransaction}`;
    }
}

// Base Transaction
// let transaction = new Transaction("default", "default", 0, 0);

// Expenses
let expense1 = new Expense(classifications.expenses,"made payment to", 2000, 10000, "cash");
let expense2 = new Expense(classifications.expenses, "paid", 8000, 20000, "on credit");
// Incomes
let income1 = new Income(classifications.incomes, 'received', 5000, 8000, "cash");
let income2 = new Income(classifications.incomes, 'received', 10000, 15000, "on credit");
// Assets
let asset1 = new Asset(classifications.assets,'purchased', 10000, 100000, "cash");
let asset2 = new Asset(classifications.assets, 'bought', 50000, 200000, "on credit");
let asset3 = new Asset(classifications.assets, 'received', 50000, 200000, "cash");
// Capital
let capital = new Capital(classifications.capital, 'deposited into the businesses bank account', 10000, 1000000, "cash");
// Liabilities
let liability1 = new Liability(classifications.liabilities, "received", 4000, 140000, "cash");
let liability2 = new Liability(classifications.liabilities, "acquired", 50000, 100000, "cash");
// Drawings
// let drawings1 = new Drawings(classifications.drawings, "withdrew", "personal debt payment",5000, 10000);
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
    transactionListArray.push(drawings2);
    transactionListArray.push(income1);
    transactionListArray.push(income2);
};
pushToTransactionList();

// let row = journalTable.getRow(1); //return row component with index of 1
// let rowData = row.getData();
// let rows = journalTable.getRows();
// let rows = journalTable.getRowFromPosition(0, true);

// DOM implementation
// Where the transaction list is created in the DOM
// Sorting the array
transactionListArray.sort((a, b) => {
   return a.date - b.date;
});

// // For debugging purposes
// setTimeout(() => {
//     for (let i = 0; i < transactionListArray.length; i++) {
//         let currentInputDate = cashReceiptsJournalTable.getData()[i].date;
//         let currentDate = transactionListArray[i].date;
//
//         if (currentInputDate !== 'undefined') {
//             if (parseInt(currentInputDate) === currentDate) {
//                 console.log("The date " + currentInputDate + " is correct");
//             }
//         }
//     }
//
//     setTimeout(() => {
//         console.clear();
//     }, 2000);
// }, 8000);


// console.log(journalTable.columnManager.columns[1].contentElement.style.backgroundColor);

// const createJournalSolution = () => {
//     let journalArea = document.querySelector('#journalSolutionArea');
//     let tableString = "</div><table class='table-striped table-bordered'><tbody>";
//
//     tableString += "<thead><tr>";
//
//     tableString += "<td> Doc </td>";
//     tableString += "<td> Date </td>";
//     tableString += "<td> Details </td>";
//     tableString += "<td> Fol </td>";
//     tableString += "<td> Bank </td>";
//
//     tableString += "</tr></thead></tbody></table>";
//
//     journalArea.innerHTML = tableString;
//
// };

// createJournalSolution();

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

let ulString = '<ul class="list-group">';
transactionListArray.forEach((transaction) => {
    ulString += '<li class="list-group-item" style="white-space: pre-wrap">' + transaction.getTransaction() + '</li>';
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
