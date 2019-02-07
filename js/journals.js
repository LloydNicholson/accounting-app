'use strict';

// Functions
const filterJournal = (folio) => {
    return transactionList.filter((transaction => transaction.folio === folio));
};

const createInputJournal = (array, folio) => {
    for (let i = 0; i < transactionList.length; i++) { // make sure there is space for final total of column
        if (transactionList[i].folio === folio) {
            array.push({});
        }
    }

    // Set id for the array
    for (let i = 0; i < array.length; i++) {
        array[i].id = i;
    }
};

// CRJ checks
const checkCRJRowDocument = (cell) => {
    let cellValue = cell.getValue().toLowerCase();
    let cellIndex = cell.getData().id;
    let crjItem = filteredCRJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (cellValue === crjItem.documentType.toLowerCase()) {
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    }
    return cellValue;
};
const checkCRJRowDate = (cell) => {
    let cellValue = parseInt(cell.getValue());
    let cellIndex = cell.getData().id;
    let crjItem = filteredCRJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue === crjItem.currentDate) {
        cell.getElement().style.backgroundColor = "#caffaa";
    } else {
        cell.getElement().style.backgroundColor = "#ffb6b1";
    }
    return cellValue;
};
const checkCRJRowDetails = (cell) => {
    let cellValue = cell.getValue().toLowerCase();
    let cellIndex = cell.getData().id;
    let crjItem = filteredCRJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (cellValue === crjItem.otherBusiness.toLowerCase()) {
            cell.getElement().style.backgroundColor = "#caffaa";
        } else if (cellValue === crjItem.ownerName.toLowerCase() && crjItem.accountName.toLowerCase() === 'Capital'.toLowerCase()) {
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    }
    return cellValue;
};
const checkCRJBank = (cell) => {
    let cellValue = parseInt(cell.getValue());
    let cellIndex = cell.getData().id;
    let crjItem = filteredCRJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue === crjItem.transactionAmount) {
        cell.getElement().style.backgroundColor = "#caffaa";
    } else {
        cell.getElement().style.backgroundColor = "#ffb6b1";
    }
    return cellValue;
};
const checkCRJCI = (cell) => {
    let cellValue = parseInt(cell.getValue());
    let cellIndex = cell.getData().id;
    let crjItem = filteredCRJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue === crjItem.transactionAmount && crjItem.accountName.toLowerCase() === 'Current income'.toLowerCase()) {
        cell.getElement().style.backgroundColor = "#caffaa";
    } else {
        cell.getElement().style.backgroundColor = "#ffb6b1";
    }
    return cellValue;
};
const checkCRJSundryAmount = (cell) => {
    let cellValue = parseInt(cell.getValue());
    let cellIndex = cell.getData().id;
    let crjItem = filteredCRJ[cellIndex];
    console.log(cell.getData());
    if (cellValue === crjItem.transactionAmount) {
        cell.getElement().style.backgroundColor = "#caffaa";
    } else {
        cell.getElement().style.backgroundColor = "#ffb6b1";
    }
};
const checkCRJSundryAccount = (cell) => {
    let cellValue = cell.getValue();
    let cellIndex = cell.getData().id;
    let crjItem = filteredCRJ[cellIndex];
    console.log(cell.getData());
    if (cellValue !== '') {
        if (cellValue === crjItem.accountName.toLowerCase()) {
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    }
    return cellValue;
};

// CPJ checks


// answerData
const crjAnswerData = [{}];
const cpjAnswerData = [{}];
const cjAnswerData = [{}];
const djAnswerData = [{}];

// Create journals
createInputJournal(crjAnswerData,"CRJ");
createInputJournal(cpjAnswerData,"CPJ");
createInputJournal(cjAnswerData,"CJ");
createInputJournal(djAnswerData,"DJ");

// Filter journals
const filteredCRJ = filterJournal("CRJ");
const filteredCPJ = filterJournal("CPJ");
const filteredCJ = filterJournal("CJ");
const filteredDJ = filterJournal("DJ");


// CASH RECEIPTS JOURNAL
//TODO Checks on CRJ
// Analysis
// Other accounts
// Sundry

let cashReceiptsJournalTable = new Tabulator("#CashReceiptsJournalAnswerArea", {
    data: crjAnswerData,
    layout:"fitColumns",      //fit columns to width of table
    tooltips:true,            //show tool tips on cells
    addRowPos:"top",          //when adding a new row, add it to the top of the table
    history:true,             //allow undo and redo actions on the table
    columnVertAlign:"bottom",
    columns:[                 //define the table columns
        {title: "Doc", field: "document", cellEdited: checkCRJRowDocument, width:65, editor:"input", validator: ["string"]},
        {title:"Date", field:"date", cellEdited: checkCRJRowDate, width:75, editor: "input", validator: ["integer", "min:1", "max:31"]},
        {title:"Details", field:"details", cellEdited: checkCRJRowDetails, width:150, editor:"input", validator: ["string"]},
        {title:"Fol", field:"folio", width:60, editor:"input", validator: ["string"]},
        {title:"Analysis of <br>Receipts", field:"analysisOfReceipts", width:120, editor:"input", validator: ["integer", "min:1"]},
        {title:"Bank", field:"bankValue", cellEdited: checkCRJBank, width:80, editor:"input", validator: ["integer", "min:1"]},
        {title:"Current income", field:"currentIncome", cellEdited: checkCRJCI, width:140, editor:"input", validator: ["integer", "min:1"]},
        {title:"Sundry", field:"sundry",columns: [
                {title:"Account", field:"account", cellEdited: checkCRJSundryAccount, align: "left", editor:"input", validator: ["string"]},
                {title:"Amount", cellEdited: checkCRJSundryAmount, field:"amount", align:"right", editor:"input", validator: ["integer", "min:1"]}
            ],
        },
    ],
});

// CASH PAYMENTS JOURNAL
//TODO Checks on CPJ
// Document
// Date
// Payee
//

let cashPaymentsJournalTable = new Tabulator("#CashPaymentsJournalAnswerArea", {
    data: cpjAnswerData,
    layout:"fitColumns",      //fit columns to width of table
    tooltips:true,            //show tool tips on cells
    addRowPos:"top",          //when adding a new row, add it to the top of the table
    history:true,             //allow undo and redo actions on the table
    columnVertAlign:"bottom",
    columns:[                 //define the table columns
        {title:"Doc",field:"document", width:65, editor:"input", validator: ["integer", "min:0"]},
        {title:"Date", field:"date", width:75, editor:"input", validator: ["integer", "min:1", "max:31"]},
        {title:"Payee", field:"details", width:150, editor:"input", validator: ["string"]},
        {title:"Fol", field:"folio", width:60, editor:"input", validator: ["string"]},
        {title:"Bank", field:"amount", width:100, editor:"input", validator: ["integer", "min:1"]},
        {title:"Trading Stock", field:"amount", width:140, editor:"input", validator: ["integer", "min:1"]},
        {title:"Equipment", field:"amount", width:120, editor:"input", validator: ["integer", "min:1"]},
        {title:"Sundry", field:"sundry", columns: [
                    {title:"Account", field:"sundryName", align: "left", editor:"input", validator: ["string"]},
                    {title:"Amount", field:"amount", align:"right", editor:"input", validator: ["integer", "min:1"]}
                    ],
            },
        // {title:"Date Of Birth", field:"dob", width:130, sorter:"date", align:"center"},
        // {title:"Driver", field:"car", width:90,  align:"center", formatter:"tickCross", sorter:"boolean", editor:true},
    ],
});


// CREDITORS JOURNAL
let creditorsJournalTable = new Tabulator("#CreditorsJournalAnswerArea", {
    data: cjAnswerData,
    layout:"fitColumns",      //fit columns to width of table
    tooltips:true,            //show tool tips on cells
    addRowPos:"top",          //when adding a new row, add it to the top of the table
    history:true,             //allow undo and redo actions on the table
    columnVertAlign:"bottom",
    columns:[                 //define the table columns
        {title:"Doc", field:"document", width:65, editor:"input", validator: ["integer", "min:0"]},
        {title:"Date", field:"date", width:75, editor:"input", validator: ["integer", "min:1", "max:31"]},
        {title:"Creditor", field:"details", width:150, editor:"input", validator: ["string"]},
        {title:"Fol", field:"folio", width:60, editor:"input", validator: ["string"]},
        {title:"Creditors Control", field:"amount", width:100, editor:"input", validator: ["integer", "min:1"]},
        {title:"Trading Stock", field:"amount", width:140, editor:"input", validator: ["integer", "min:1"]},
        {title:"Equipment", field:"amount", width:120, editor:"input", validator: ["integer", "min:1"]},
        {title:"Sundry", field:"sundry", columns: [
                {title:"Account", field:"sundryName", align: "left", editor:"input", validator: ["string"]},
                {title:"Amount", field:"amount", align:"right", editor:"input", validator: ["integer", "min:1"]}
            ],
        },
        // {title:"Date Of Birth", field:"dob", width:130, sorter:"date", align:"center"},
        // {title:"Driver", field:"car", width:90,  align:"center", formatter:"tickCross", sorter:"boolean", editor:true},
    ],
});

// DEBTORS JOURNAL
let debtorsJournalTable = new Tabulator("#DebtorsJournalAnswerArea", {
    data: djAnswerData,
    layout:"fitColumns",      //fit columns to width of table
    tooltips:true,            //show tool tips on cells
    addRowPos:"top",          //when adding a new row, add it to the top of the table
    history:true,             //allow undo and redo actions on the table
    columnVertAlign:"bottom",
    columns:[                 //define the table columns
        {title:"Doc", field:"document", width:65, editor:"input", validator: ["integer", "min:0"]},
        {title:"Date", field:"date", width:75, editor:"input", validator: ["integer", "min:1", "max:31"]},
        {title:"Debtor", field:"details", width:250, editor:"input", validator: ["string"]},
        {title:"Fol", field:"folio", width:60, editor:"input", validator: ["string"]},
        {title:"Sales", field:"amount", editor:"input", validator: ["integer", "min:1"]},
        {title:"Cost of Sales", field:"amount", editor:"input", validator: ["integer", "min:1"]},
        // {title:"Date Of Birth", field:"dob", width:130, sorter:"date", align:"center"},
        // {title:"Driver", field:"car", width:90,  align:"center", formatter:"tickCross", sorter:"boolean", editor:true},
    ],
});

console.log('Cash Receipts Journal', filteredCRJ);
console.log('Cash Payments Journal', filteredCPJ);
console.log('Creditors Journal', filteredCJ);
console.log('Debtors Journal', filteredDJ);
