// Different business names
const businesses = [
  "Rancid Retailers",
  "Trusted Traders",
  "Lawdy Lawnmowers",
  "Garbage Gardening",
  "Anti Accounting Firm",
  "B-e-a-utiful Beauty Salon",
  "Handy Hairsylists",
  "Ordinary Orthodontists",
  "Daily Dentists",
  "Silly Sweets",
  "XYZ Stationers",
  "Sporty Sports Gear",
  "Freedom Flowers",
  "Enlightened Engineers",
  "Trendy Tutors",
  "Fresh Fellers",
  "Feline Friends"
];

// Set business name to randomise
ourBusiness = randomWord(businesses);

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
owner = randomWord(owners);

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

month = randomWord(months);

// Initialise year array
var years = [];
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
    "trading stock", "vehicles", "equipment", "machinery", "land and buildings"
  ],
  // All liabilities
  liabilities: [
    "a loan", "a mortgage bond", "a bank overdraft"
  ],
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

const receiveMethod = ["received", "acquired", "deposited into the businesses bank account", "deposited into the the current account of the business"];

const option = ["cash", "", "on credit"];

// Create heading for entire transaction list
function createHeading(questionType) {
  document.write("Use the following information to complete the " + questionType + " of " + ourBusiness + " for the month of " + month + " " + year + "<br>" + "<br>");
  document.write("Transaction list" + "<br>");
}

// Create a random word
function randomWord(item) {
  return item[Math.floor(Math.random() * item.length)];
}




class AccountingTransaction {
  constructor(accountType, amount) {
    this._amount = amount;
    this._accountType = accountType;
    this._day = [];
  }

  get amount() {
    return this._amount;
  }

  get accountType() {
    return this._accountType;
  }

  day() {
    // Create the day for the transaction
    firstDay = 1;
    lastDay = 29;
    for (let i = firstDay; i < lastDay; i++) {
      this._day = day.push(2);
    }
  }
}

console.log(AccountingTransaction.day);

// Create an expense transaction
function createExpense(num, amount, day) {
  for (i = 0; i < num; i++) {
    let transaction = day + ". ";
    transaction += "We ";
    transaction += " " + paymentMethod[0];
    transaction += " " + randomWord(accountType.expenses);
    transaction += " to the value of R" + Math.ceil(Math.random() * amount) + ".";

    return transaction + "<br>";
  }
}

// Create an income transaction
function createIncome(num, amount, day) {
  for (i = 0; i < num; i++) {
    let transaction = day;
    transaction += ". " + ourBusiness;
    transaction += " " + receiveMethod[0];
    transaction += " " + randomWord(accountType.incomes);
    transaction += " amounting to R" + Math.ceil(Math.random() * amount);
    transaction += " " + randomWord(option.slice(0, 2));
    transaction += " from " + randomWord(payee) + ".";

    return transaction + "<br>";
  }
}

// Create an asset transaction
function createAsset(num, amount, day) {
  for (i = 0; i < num; i++) {
    let transaction = day + ". ";
    transaction += "Our business ";
    transaction += " " + paymentMethod[1];
    transaction += " " + randomWord(accountType.assets);
    transaction += " to the value of R" + Math.ceil(Math.random() * amount);
    transaction += " " + randomWord(option.slice(0, 2));
    transaction += " from " + randomWord(payee) + ".";

    return transaction + "<br>";
  }
}

// Create an liability transaction
function createLiability(num, amount, day) {
  for (i = 0; i < num; i++) {
    let transaction = day + ". ";
    transaction += "The business ";
    transaction += " " + receiveMethod[1];
    transaction += " " + randomWord(accountType.liabilities);
    transaction += " to the value of R" + Math.ceil(Math.random() * amount);
    transaction += " from " + randomWord(bank) + ".";

    return transaction + "<br>";
  }
}

// Create an capital transaction
function createCapital(num, amount, day) {
  for (i = 0; i < num; i++) {
    let transaction = day + ". ";
    transaction += "The owner, " + owner;
    transaction += " " + randomWord(receiveMethod.slice(2, 4));
    transaction += ", a capital contribution";
    transaction += " of R" + Math.ceil(Math.random() * amount) + ".";

    return transaction + "<br>";
  }
}

// Create an drawings transaction
function createDrawings(num, amount, day) {
  for (i = 0; i < num; i++) {
    let transaction = day + ". ";
    transaction += owner;
    transaction += " " + paymentMethod[3];
    transaction += " " + randomWord(accountType.assets);
    transaction += " worth R" + Math.ceil(Math.random() * amount) + " for personal use.";

    return transaction + "<br>";
  }
}
