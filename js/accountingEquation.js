'use strict';

const createInputArray = (array) => {
    for (let i = 0; i < transactionList.length; i++) { // make sure there is space for final total of column
        array.push({});
    }

    // Set id for the array
    for (let i = 0; i < array.length; i++) {
        array[i].id = i;
    }
};

const accountingEquationAnswerData = [{}];

createInputArray(accountingEquationAnswerData);
console.log(accountingEquationAnswerData);

//TODO - checks for table
// Debit
// Credit
// Assets
// Owners Equity
// Liabilities


let accountingEquationTable = new Tabulator("#accountingEquationAnswerArea", {
    data: accountingEquationAnswerData,
    layout:"fitColumns",      //fit columns to width of table
    tooltips:true,            //show tool tips on cells
    addRowPos:"top",          //when adding a new row, add it to the top of the table
    history:true,             //allow undo and redo actions on the table
    columns:[                 //define the table columns
        {title: "Account debited", field: "debit", cellEdited: (cell) => {
                let cellValue = cell.getValue();
                let cellIndex = cell.getData().id;
                if (cellValue === transactionList[cellIndex].accountName) {
                    
                }
            }, editor:"input", validator: ["string"]},
        {title:"Account credited", field:"credit", editor: "input", validator: ["string"]},
        {title:"Assets", field:"assets", editor:"input", validator: ["string"]},
        {title:"Owners Equity", field:"ownersEquity", editor:"input", validator: ["string"]},
        {title:"Liabilities", field:"liabilities", editor:"input", validator: ["string"]},
    ],
});
