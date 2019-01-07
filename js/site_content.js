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
let ourBusiness = randomWord(businesses);

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

const month = randomWord(months);

// Initialise year array
const years = [];
for (let i = 2000; i < 2019; i++) {
    years.push(i);
}
year = randomWord(years);

const payee = [
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
const accountType = {
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
function createHeading(questionType) {
    document.write(
        "Use the following information to complete the " +
        questionType +
        " of " +
        ourBusiness +
        " for the month of " +
        month +
        " " +
        year +
        "<br>" +
        "<br>"
    );
    document.write("Transaction list" + "<br>");
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

/* Testing account creation with objects
class Transaction {
  constructor(type, low_val, high_val) {
    this._type = type;
    this._low_val = low_val;
    this._high_val = high_val;
  }

  get type() {
    return this._type;
  }

  get low_val() {
    return this._low_val;
  }

  get high_val() {
    return this._high_val;
  }

  randomisedNum() {
    return Math.floor(Math.random() * this._high_val) + this._low_val;
  }
}

// Create different transaction types
const assetTransaction = new TransactionType('Asset', 10000, 500000);
const incomeTransaction = new TransactionType('Income', 10000, 100000);
const expenseTransaction = new TransactionType('Expense', 800, 15000);

console.log(assetTransaction.randomisedNum());
*/

const transactionList = [];

// Create an expense transaction
function createExpense(day, num, low_val, high_val) {
    for (let i = 0; i < num; i++) {
        const dateFound = /\d+/;
        let transaction = day + ". ";
        transaction += "We ";
        transaction += " " + paymentMethod[0];
        transaction += " " + randomWord(accountType.expenses);
        transaction +=
            " to the value of R" + randomisedNum(low_val, high_val) + ".";
        const currentDay = transaction.match(dateFound);

        return transaction + "<br>";
    }
}

// Create an income transaction
function createIncome(day, num, low_val, high_val) {
    for (let i = 0; i < num; i++) {
        let transaction = day;
        transaction += ". " + ourBusiness;
        transaction += " " + receiveMethod[0];
        transaction += " " + randomWord(accountType.incomes);
        transaction += " amounting to R" + randomisedNum(low_val, high_val);
        transaction += " " + randomWord(option.slice(0, 2));
        transaction += " from " + randomWord(payee) + ".";

        return transaction + "<br>";
    }
}

// Create an asset transaction
function createAsset(day, num, low_val, high_val) {
    for (let i = 0; i < num; i++) {
        let transaction = day + ". ";
        transaction += "Our business ";
        transaction += " " + paymentMethod[1];
        transaction += " " + randomWord(accountType.assets);
        transaction += " to the value of R" + randomisedNum(low_val, high_val);
        transaction += " " + randomWord(option.slice(0, 2));
        transaction += " from " + randomWord(payee) + ".";

        return transaction + "<br>";
    }
}

// Create an liability transaction
function createLiability(day, num, low_val, high_val) {
    for (let i = 0; i < num; i++) {
        let transaction = day + ". ";
        transaction += "The business ";
        transaction += " " + receiveMethod[1];
        transaction += " " + randomWord(accountType.liabilities);
        transaction += " to the value of R" + randomisedNum(low_val, high_val);
        transaction += " from " + randomWord(bank) + ".";

        return transaction + "<br>";
    }
}

// Create an capital transaction
function createCapital(day, num, low_val, high_val) {
    for (let i = 0; i < num; i++) {
        let transaction = day + ". ";
        transaction += "The owner, " + owner;
        transaction += " " + randomWord(receiveMethod.slice(2, 4));
        transaction += ", a capital contribution";
        transaction += " of R" + randomisedNum(low_val, high_val) + ".";

        return transaction + "<br>";
    }
}

// Create an drawings transaction
function createDrawings(day, num, low_val, high_val) {
    for (let i = 0; i < num; i++) {
        let transaction = day + ". ";
        transaction += owner;
        transaction += " " + paymentMethod[3];
        transaction += " " + randomWord(accountType.assets);
        transaction +=
            " worth R" + randomisedNum(low_val, high_val) + " for personal use.";

        return transaction + "<br>";
    }
}


