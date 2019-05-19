"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Different business names
var classification_model_1 = require("./classification.model");
var businesses = [
    'Rancid Retailers',
    'Trusted Traders',
    'Lawdy Lawnmowers',
    'Garbage Gardening',
    'Anti Accounting Firm',
    'B-e-a-utiful Beauty Salon',
    'Handy Hairstylists',
    'Ordinary Orthodontists',
    'Daily Dentists',
    'Silly Sweets',
    'XYZ Stationers',
    'Sporty Sports Gear',
    'Freedom Flowers',
    'Enlightened Engineers',
    'Trendy Tutors',
    'Fresh Fellers',
    'Feline Friends',
    'Jim\'s Attorneys',
    'Advocates for Animals',
];
// Different owners names
var owners = [
    'Douglas',
    'Evelyn',
    'Alice',
    'Rosemary',
    'George',
    'Frederick',
    'Klaus',
    'Lee',
    'Mark',
    'Ivy',
    'Isabel',
    'Marie',
    'Patricia',
    'Jessie',
    'Kerry',
    'Martin',
    'Chris',
    'Rachel',
    'Patrick',
    'Colin',
    'Herbie'
];
// Month array
var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
// Initialise year array
var years = [];
for (var i = 2005; i < 2020; i++) {
    years.push(i);
}
var payersOfMoney = [
    'Joe\'s Traders',
    'Mitchell\'s Manufacturers',
    'Levine\'s Loggers',
    'Harry\'s Movers',
    'Barry\'s Electricians',
    'Mary\'s Plumbers',
    'Carl\'s Cupboards',
    'Anne\'s Actuaries',
    'James\' Carpenters',
    'Stacey\'s Stockers',
    'Bryan\'s Brewers',
    'Fun Flops',
    'Made in China Manufacturers',
    'Protecting People'
];
var banks = [
    'Nedbank',
    'ABSA',
    'FNB',
    'Standard Bank',
    'Discovery Bank',
    'Capitec Bank',
    'Bidvest Bank'
];
// Different account types and sub-accounts
var classifications = {
    // All assets
    assets: [
        new classification_model_1.Classification('Trading stock', ['stock', 'goods', 'products', 'trading stock']),
        new classification_model_1.Classification('Vehicles', ['motor vehicle', 'motorbike', 'bicycle', 'vehicle']),
        new classification_model_1.Classification('Equipment', ['computers', 'computer', 'printers', 'fax machines']),
        new classification_model_1.Classification('Machinery', ['mechanical drill', 'large jackhammer']),
        new classification_model_1.Classification('Land and buildings', ['property', 'new property', 'storage facility'])
    ],
    // All liabilities
    liabilities: [
        new classification_model_1.Classification('Loan', ['a loan', 'a substantial loan']),
        new classification_model_1.Classification('Mortgage bond', ['a property loan', 'a bond', 'a mortgage bond'])
    ],
    drawings: [
        new classification_model_1.Classification('Drawings', ['drawings', 'money'])
    ],
    capital: [
        new classification_model_1.Classification('Capital', ['contribution', 'capital'])
    ],
    // All expenses
    expenses: [
        new classification_model_1.Classification('Salaries', ['salaries', 'monthly payments to employees']),
        new classification_model_1.Classification('Wages', ['wages', 'employee weekly wages']),
        new classification_model_1.Classification('Repairs', ['repairs to the motor vehicle']),
        new classification_model_1.Classification('Advertising', ['advertising', 'advertisement']),
        new classification_model_1.Classification('Telephone', ['telephone account', 'cellphone bill']),
        new classification_model_1.Classification('Stationery', ['stationery', 'pencils and pens', 'paper']),
        new classification_model_1.Classification('Water and electricity', ['rates bill', 'water and electricity']),
        new classification_model_1.Classification('Insurance', ['insurance']),
        new classification_model_1.Classification('Packing material', ['packing material', 'cardboard for packing']),
        { name: 'Fuel', alts: ['petrol', 'diesel', 'fuel'] },
        { name: 'Bank charges', alts: ['bank fees', 'bank charges'] },
        { name: 'Consumable goods', alts: ['food', 'groceries', 'flowers'] },
        { name: 'Interest on loan', alts: ['interest on long term liability'] },
        { name: 'Interest expense', alts: ['interest on bank account', 'interest'] },
        { name: 'Postage', alts: ['postage', 'envelopes'] },
        { name: 'Donations', alts: ['donations', 'goods for the underprivileged'] },
        { name: 'Rent expense', alts: ['rent', 'rental'] }
    ],
    // All incomes
    incomes: [
        new classification_model_1.Classification('Current income', ['money for services rendered', 'money for a service']),
        new classification_model_1.Classification('Rent', ['rent', 'rental']),
        new classification_model_1.Classification('Donations', ['donations']),
        new classification_model_1.Classification('Commission', ['commission', 'a percentage of a recent sale']),
        new classification_model_1.Classification('Cash sales', ['sales'])
    ]
};
var options = ['cash', '', 'on credit'];
var randomItem = function (item) {
    return item[Math.floor(Math.random() * item.length)];
};
// const incomeAccountType = randomItem(classifications.incomes);
// const incomeAccountName = randomAccountName(incomeAccountType);
// const incomeAccountAlt = randomAccountAlt(incomeAccountType);
// console.log('account type: ', incomeAccountType);
// console.log('account name', incomeAccountName);
// console.log('account alt: ', incomeAccountAlt);
// Set business name to randomise
var ourBusinessName = randomItem(businesses);
// Set ourOwner name to randomise every time
var ourOwner = randomItem(owners);
var month = randomItem(months);
var year = randomItem(years);
var randomBank = randomItem(banks);
// const randomItem1 = randomItem(classifications.incomes);
// const randomAlt = randomItem1.alts[Math.floor(Math.random() * randomItem1.alts.length)];
// TODO - Randomise on click
// const randomise = () => { trying to randomise on click
//
// };
// Create random values between two points
function randomisedNum(lowNum, highNum) {
    return Math.floor(Math.random() * highNum) + Math.floor(lowNum);
}
// Randomised date
var dates = [];
var firstDay = 1;
var lastDay = 28;
switch (month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        lastDay = 31;
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        lastDay = 30;
        break;
    case 'February':
        lastDay = 28;
}
for (var i = firstDay; i <= lastDay; i++) {
    dates.push(i);
}
function matchedNumber(currentString, testString) {
    return currentString.match(testString);
}
var Transaction = /** @class */ (function () {
    function Transaction(businessName, amount, date, item) {
        this.businessName = businessName;
        this.amount = amount;
        this.date = date;
        this.item = item;
    }
    Transaction.prototype.toTransactionString = function () {
        return this.date + ". " + this.businessName + " bought " + this.item + " for " + this.amount;
    };
    return Transaction;
}());
exports.Transaction = Transaction;
var Drawings = /** @class */ (function (_super) {
    __extends(Drawings, _super);
    function Drawings(businessName, amount, date, item) {
        return _super.call(this, businessName, amount, date, item) || this;
    }
    return Drawings;
}(Transaction));
exports.Drawings = Drawings;
var drawings1 = new Drawings('Harry\'s Traders', 500, 21, 'stock');
// div = transaction.toTransactionString();
// class Expense extends Transaction {
//   constructor() {
//     super();
//     // Check for option and set the folio
//     if (super.option === 'cash' || this.option === '') {
//       this.folio = 'CPJ';
//       this.debit = this.accountName;
//       this.credit = 'Bank';
//     } else {
//       this.folio = 'CJ';
//       this.debit = this.accountName;
//       this.credit = 'Creditors control';
//     }
//
//     this.transactionString = `${ this.currentDate }${ '&#09;' }${ this._businessName } ${ this.paymentMethod } ${ this.otherBusiness } for ${ this.accountAlts } for the sum of R${ this.transactionAmount } ${ this.option }.`;
//   }
// }
//
// class Asset extends Transaction {
//   constructor() {
//     super();
//
//     // Check for option and set the folio
//     if ((this.paymentMethod === 'bought' || this.paymentMethod === 'purchased') && (this.option === 'cash' || this.option === '')) {
//       this.folio = 'CPJ';
//       this.debit = this.accountName;
//       this.credit = 'Bank'
//     } else {
//       this.folio = 'CJ';
//       this.debit = this.accountName;
//       this.credit = 'Creditors control';
//     }
//
//     this.transactionString = `${ this.currentDate }${ '&#09;' }${ this._businessName } ${ this.paymentMethod } ${ this.accountAlts } from ${ this.otherBusiness } amounting to R${ this.transactionAmount } ${ this.option }.`;
//   }
// }
//
// class Income extends Transaction {
//   constructor() {
//     super();
//
//     // Check for option and set the folio
//     if (this.option === 'cash' || this.option === '') {
//       this.folio = 'CRJ';
//       this.debit = 'Bank';
//       this.credit = this.accountName;
//     } else {
//       this.folio = 'DJ';
//       this.debit = 'Debtors control';
//       this.credit = this.accountName;
//     }
//
//     // Set document based on payment method
//     if ((this.folio === 'CRJ') && this.accountName === 'Current income') {
//       this.documentType = 'CRR'
//     } else {
//       this.documentType = 'Rec'
//     }
//
//     this.transactionString = `${ this.currentDate }${ '&#09;' }${ this._businessName } ${ this.paymentMethod } ${ this.accountAlts } amounting to R${ this.transactionAmount } ${ this.option } from ${ this.otherBusiness }.`;
//   }
// }
//
// class Capital extends Transaction {
//   constructor() {
//     super();
//     this.folio = "CRJ";
//     this.debit = 'Bank';
//     this.credit = this.accountName;
//     this.documentType = 'B/S';
//     this.analyse = false;
//     this.transactionString = `${ this.currentDate }${ '&#09;' }The owner, ${ this.ownerName } ${ this.paymentMethod } a total of R${ this.transactionAmount } ${ this.option }.`;
//   }
// }
//
// class Liability extends Transaction {
//   constructor() {
//     super();
//     if ((this.paymentMethod === 'acquired' || this.paymentMethod === 'received')) {
//       this.folio = 'CRJ';
//       this.debit = 'Bank';
//       this.credit = this.accountName;
//     } else {
//       this.folio = 'CPJ';
//       this.debit = this.accountName;
//       this.credit = 'Bank';
//     }
//
//     if (this.folio === 'CRJ') {
//       this.documentType = 'Rec'
//     }
//     this.transactionString = `${ this.currentDate }${ '&#09;' }${ this._businessName } ${ this.paymentMethod } ${ this.accountAlts } amounting to R${ this.transactionAmount } from ${ this.bank }.`;
//   }
// }
//
// class Drawings extends Transaction {
//
//   constructor() {
//     super();
//     this.folio = "CPJ";
//     this.debit = this.accountName;
//     this.credit = 'Bank';
//     this.option = '';
//
//     this.transactionString = `${ this.currentDate }${ '&#09;' }The business owner, ${ this.ownerName } ${ this.paymentMethod } cash worth R${ this.transactionAmount } for ${ this._reasonForTransaction }`;
//   }
// }
// Base Transaction
// let transaction = new Transaction(classifications.expenses, "default", 0, 0);
//
// // Expenses
// let expense1 = new Expense(classifications.expenses, "made payment to", 2000, 10000);
// let expense2 = new Expense(classifications.expenses, "paid", 8000, 20000);
// // Incomes
// let income1 = new Income(classifications.incomes, 'received', 5000, 8000);
// let income2 = new Income(classifications.incomes, 'received', 10000, 15000);
// // Assets
// let asset1 = new Asset(classifications.assets, 'purchased', 10000, 100000);
// let asset2 = new Asset(classifications.assets, 'bought', 50000, 200000);
// let asset3 = new Asset(classifications.assets, 'bought', 10000, 200000);
// // Capital
// let capital = new Capital(classifications.capital, 'deposited into the businesses bank account', 10000, 1000000);
// // Liabilities
// let liability1 = new Liability(classifications.liabilities, "received", 4000, 140000, "cash");
// let liability2 = new Liability(classifications.liabilities, "acquired", 50000, 100000, "cash");
// // Drawings
// let drawings1 = new Drawings(classifications.drawings, "withdrew", "personal debt payment", 5000, 10000);
// let drawings2 = new Drawings(classifications.drawings, "took out", "buying small personal items", 100, 1000);
// Transaction list push area
exports.transactionList = [];
var pushToArray = function (array) {
    array.push(drawings1);
    // array.push(capital);
    // array.push(expense1);
    // array.push(expense2);
    // array.push(asset1);
    // array.push(asset2);
    // array.push(asset3);
    // array.push(liability1);
    // array.push(liability2);
    // array.push(drawings1);
    // array.push(drawings2);
    // array.push(income1);
    // array.push(income2);
};
// Push area
pushToArray(exports.transactionList);
// Sorting the array
var sortArray = function (array) {
    array.sort(function (a, b) {
        return a.currentDate - b.currentDate;
    });
};
// Sort area
sortArray(exports.transactionList);
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
var ulString = '<ul class="list-group">';
exports.transactionList.forEach(function (index) {
    ulString += '<li class="list-group-item" style="white-space: pre-wrap">' + index.transactionString + '</li>';
});
ulString += '</ul>';
// DOM
// Create heading for entire transaction list
function createHeading() {
    var transactionHeading = document.querySelector('#transactionListHeading');
    transactionHeading.innerHTML = "Use the following information to complete the template of " + ourBusinessName + " for the month of " + month + " " + year;
}
createHeading();
// Add transaction to list elements
var transactionArea = document.querySelector('#transactionList');
transactionArea.innerHTML = ulString;
//# sourceMappingURL=site_content.js.map