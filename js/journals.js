'use strict';

// Imports

// Functions
const filterJournal = (folio) => {
    return transactionListArray.filter((transaction => transaction.folio === folio));
};

const createInputJournal = (array, folio) => {
    for (let i = 0; i < transactionListArray.length; i++) { // make sure there is space for final total of column
        if (transactionListArray[i].folio === folio) {
            array.push({});
        }
    }
};

// let property = transactionListArray[0];
// for (let key in property) {
//     if (property.hasOwnProperty(key)) {
//         console.log(key + " -> " + property[key]);
//     }
// }

const checkCorrect = (initialArray) => {
    // for (let key in initialArray) {
    //     if (initialArray.hasOwnProperty(key)) {
    //         console.log(checkedArray[key] + " is correct");
    //     }
    // }

    Object.entries(initialArray).forEach(
        ([key, value]) => console.log(key, value)
    );


};


// CASH RECEIPTS JOURNAL
const crjAnswerData = [{}];
createInputJournal(crjAnswerData,"CRJ");
let cashReceiptsJournalTable = new Tabulator("#CashReceiptsJournalAnswerArea", {
    data: crjAnswerData,
    layout:"fitColumns",      //fit columns to width of table
    tooltips:true,            //show tool tips on cells
    addRowPos:"top",          //when adding a new row, add it to the top of the table
    history:true,             //allow undo and redo actions on the table
    columnVertAlign:"bottom",
    columns:[                 //define the table columns
        {title:"Doc", field:"document", width:65, editor:"input", validator: ["string"]},
        {title:"Date", field:"date", width:75, editor: "input", validator: ["integer", "min:1", "max:31"]},
        {title:"Details", field:"details", width:150, editor:"input", validator: ["string"]},
        {title:"Fol", field:"folio", width:60, editor:"input", validator: ["string"]},
        {title:"Analysis of <br>Receipts", field:"analysisOfReceipts", width:120, editor:"input", validator: ["integer", "min:1"]},
        {title:"Bank", field:"bank", width:80, editor:"input", validator: ["integer", "min:1"]},
        {title:"Current income", field:"currentIncome", width:140, editor:"input", validator: ["integer", "min:1"]},
        {title:"Sundry", field:"sundry",columns: [
                {title:"Account", field:"account", align: "left", editor:"input", validator: ["string"]},
                {title:"Amount", field:"amount", align:"right", editor:"input", validator: ["integer", "min:1"]}
            ],
        },
    ],
});

// Create the filtered CRJ
const filteredCRJ = filterJournal("CRJ");
// Checks


// CASH PAYMENTS JOURNAL
const cpjAnswerData = [{}];
createInputJournal(cpjAnswerData,"CPJ");
let cashPaymentsJournalTable = new Tabulator("#CashPaymentsJournalAnswerArea", {
    data: cpjAnswerData,
    layout:"fitColumns",      //fit columns to width of table
    tooltips:true,            //show tool tips on cells
    addRowPos:"top",          //when adding a new row, add it to the top of the table
    history:true,             //allow undo and redo actions on the table
    columnVertAlign:"bottom",
    columns:[                 //define the table columns
        {title:"Doc", field:"document", width:65, editor:"input", validator: ["integer", "min:0"]},
        {title:"Date", field:"date", width:75, editor:"input", validator: ["integer", "min:1", "max:31"]},
        {title:"Payee", field:"details", width:150, editor:"input", validator: ["string"]},
        {title:"Fol", field:"folio", width:60, editor:"input", validator: ["string"]},
        {title:"Bank", field:"bank", width:100, editor:"input", validator: ["integer", "min:1"]},
        {title:"Trading Stock", field:"tradingStock", width:140, editor:"input", validator: ["integer", "min:1"]},
        {title:"Equipment", field:"additional", width:120, editor:"input", validator: ["integer", "min:1"]},
        {title:"Sundry", field:"sundry", columns: [
                    {title:"Account", field:"sundryName", align: "left", editor:"input", validator: ["string"]},
                    {title:"Amount", field:"amount", align:"right", editor:"input", validator: ["integer", "min:1"]}
                    ],
            },
        // {title:"Date Of Birth", field:"dob", width:130, sorter:"date", align:"center"},
        // {title:"Driver", field:"car", width:90,  align:"center", formatter:"tickCross", sorter:"boolean", editor:true},
    ],
});

// Create the filtered CPJ
const filteredCPJ = filterJournal("CPJ");

// Checks




// CREDITORS JOURNAL
const cjAnswerData = [{}];
createInputJournal(cjAnswerData,"CJ");


// DEBTORS JOURNAL
const djAnswerData = [{}];
createInputJournal(djAnswerData,"DJ");




console.log(filteredCRJ);
console.log(filteredCPJ);
