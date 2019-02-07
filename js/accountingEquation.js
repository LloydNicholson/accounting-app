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
    columnHeaderSortMulti:false,
    addRowPos:"top",          //when adding a new row, add it to the top of the table
    history:true,             //allow undo and redo actions on the table
    columns:[                 //define the table columns
        {title: "Account debited", field: "debit", cellEdited: (cell) => {
                let cellValue = cell.getValue().toLowerCase();
                let cellIndex = cell.getData().id;
                let transactionListItem = transactionList[cellIndex];
                if (cellValue === transactionListItem.debit.toLowerCase()) {
                    cell.getElement().style.backgroundColor = "#caffaa";
                } else {
                    cell.getElement().style.backgroundColor = "#ffb6b1";
                }
                return cellValue;
            }, width: 200, editor:"input", validator: ["string"]},
        {title:"Account credited", field:"credit", cellEdited: (cell) => {
                let cellValue = cell.getValue().toLowerCase();
                let cellIndex = cell.getData().id;
                let transactionListItem = transactionList[cellIndex];
                if (cellValue === transactionListItem.credit.toLowerCase()) {
                    cell.getElement().style.backgroundColor = "#caffaa";
                } else {
                    cell.getElement().style.backgroundColor = "#ffb6b1";
                }
                return cellValue;
            }, width: 200, editor: "input", validator: ["string"]},
        {title:"Assets", field:"assets", columns: [{title: "+", field: "plusAssets", editor: "input", validator: ['integer']}, {title: "-", field: "minusAssets", editor: "input", validator: ['integer']}]},
        {title:"Owners Equity", field:"ownersEquity", columns: [{title: "+", field: "plusOwnersEquity", editor: "input", validator: ['integer']},  {title: "-", field: "minusOwnersEquity", editor: "input", validator: ['integer']}]},
        {title:"Liabilities", field:"liabilities", columns: [{title: "+", field: "plusLiabilities", editor: "input", validator: ['integer']},  {title: "-", field: "minusLiabilities", editor: "input", validator: ['integer']}]},
    ],
});
