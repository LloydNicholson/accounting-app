// Different business names
const ourBusiness = [
  "Eric's Retailers",
  "Mandy's Traders",
  "Christine's Lawnmowers",
  "Annabel's Gardening",
  "Reeve's Accounting Firm"
];

// Set business 0 name to randomise
ourBusiness[0] = randomWord(ourBusiness);

// Different owners names
const owner = [
  'Douglas',
  'Evelyn',
  'Alice',
  'Rosemary',
  'George',
  'Frederick',
  'Klaus',
  'Lee'
];

// Set owner 0 name to randomise everytime
owner[0] = randomWord(owner);

// Month array
const month = [
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
var year = [];
for (let i = 2000; i < 2019; i++) {
  year.push(i);
}

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
    "Capitec"
];

// Different account types and sub-accounts
const accountType = {
  // All assets
  assets: [
    'trading stock', 'vehicles', 'equipment', 'machinery', 'land and buildings'
  ],
  // All liabilities
  liabilities: [
    'a loan', 'a mortgage bond', 'a bank overdraft'
  ],
  drawings: ['drawings'],
  capital: ['capital'],
  // All expenses
  expenses: [
    'salaries',
    'wages',
    'repairs to the motor vehicle',
    'advertising',
    'the telephone account',
    'telephone',
    'stationery',
    'water and electricity',
    'insurance',
    'packing material',
    'fuel',
    'bank charges',
    'consumable goods',
    'the interest on our overdrawn bank account',
    'interest on loan',
    'postage',
    'donations',
    'rent'
  ],
  // All incomes
  incomes: ['current income', 'rent', 'donations', 'commission', 'cash sales']
};

const paymentMethod = ['paid', 'purchased', 'bought', 'widthdrew'];

const receiveMethod = ['received', 'acquired', 'deposited into the businesses bank account', 'deposited into the the current account of the business'];

const option = ['cash', '', 'on credit'];

// Create heading for entire transaction list
function createHeading(questionType) {
  document.write("Use the following information to complete the " + questionType + " of " + ourBusiness[0] + " for the month of " + randomWord(month) + " " + randomWord(year) + "<br>" + "<br>");
  document.write('Transaction list' + "<br>");
}

// Create a random word
function randomWord(item) {
  return (item[Math.floor(Math.random() * item.length)]);
}

// Create the day for the transaction
var day = [];
firstDay = 1;
lastDay = 29;
for (let i = firstDay; i < lastDay; i++) {
  day.push(i);
}

// Create an expense transaction
function createExpense(num, amount, date = "") {
  for (i = 0; i < num; i++) {
    let transaction = date + ". ";
    transaction += "We ";
    transaction += " " + paymentMethod[0];
    transaction += " " + randomWord(accountType.expenses);
    transaction += " to the value of R" + Math.ceil(Math.random() * amount) + ".";

    return (transaction + "<br>");
  }
}

// Create an income transaction
function createIncome(num, amount, date = "") {
  for (i = 0; i < num; i++) {
    let transaction = date
    transaction += ". " + ourBusiness[0];
    transaction += " " + receiveMethod[0];
    transaction += " " + randomWord(accountType.incomes);
    transaction += " amounting to R" + Math.ceil(Math.random() * amount);
    transaction += " " + randomWord(option.slice(0, 2));
    transaction += " from " + randomWord(payee) + ".";

    return transaction + "<br>";
  }
}

// Create an asset transaction
function createAsset(num, amount, date = "") {
  for (i = 0; i < num; i++) {
    let transaction = date + ". ";
    transaction += "Our business ";
    transaction += " " + paymentMethod[1];
    transaction += " " + randomWord(accountType.assets);
    transaction += " to the value of R" + Math.ceil(Math.random() * amount);
    transaction += " " + randomWord(option.slice(0, 2));
    transaction += " from " + randomWord(payee) + ".";

    return transaction + "<br>";
  }
};

// Create an liability transaction
function createLiability(num, amount, date = "") {
  for (i = 0; i < num; i++) {
    let transaction = date + ". ";
    transaction += "The business ";
    transaction += " " + receiveMethod[1];
    transaction += " " + randomWord(accountType.liabilities);
    transaction += " to the value of R" + Math.ceil(Math.random() * amount);
    transaction += " from " + randomWord(bank) + ".";

    return transaction + "<br>";
  }
}

// Create an capital transaction
function createCapital(num, amount, date = "") {
  for (i = 0; i < num; i++) {
    let transaction = date + ". ";
    transaction += "The owner, " + owner[0];
    transaction += " " + randomWord(receiveMethod.slice(2, 4));
    transaction += ", a capital contribution";
    transaction += " of R" + Math.ceil(Math.random() * amount) + ".";

    return transaction + "<br>";
  }
}

// Create an drawings transaction
function createDrawings(num, amount, date = "") {
  for (i = 0; i < num; i++) {
    let transaction = date + ". ";
    transaction += owner[0];
    transaction += " " + paymentMethod[3];
    transaction += " " + randomWord(accountType.assets);
    transaction += " worth R" + Math.ceil(Math.random() * amount) + " for personal use.";

    return transaction + "<br>";
  }
}
