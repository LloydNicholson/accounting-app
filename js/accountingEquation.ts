import { transactionList } from './site_content';


const createInputArray = (array) => {
    for (let i = 0; i < transactionList.length; i++) { // make sure there is space for final total of column
        array.push({});
    }

    // Set id for the array
    for (let i = 0; i < array.length; i++) {
        array[i].id = i;
    }
};
const checkDebit = (cell) => {
    let cellValue = cell.getValue().toLowerCase();
    let cellIndex = cell.getData().id;
    let transactionListItem = transactionList[cellIndex];
    if (cellValue !== '') {
        if (cellValue === transactionListItem.debit.toLowerCase()) {
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }
    return cellValue;
};
const checkCredit = (cell) => {
    let cellValue = cell.getValue().toLowerCase();
    let cellIndex = cell.getData().id;
    let transactionListItem = transactionList[cellIndex];
    if (cellValue !== '') {
        if (cellValue === transactionListItem.credit.toLowerCase()) {
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }
    return cellValue;
};
const checkPlus = (cell) => {
    let cellValue = cell.getValue();
    let cellIndex = cell.getData().id;
    let cjItem = filteredCJ[cellIndex];
    if (cellValue !== '') {
        if (cjItem.debit === cjItem.accountName && cellValue === cjItem.transactionAmount) {
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }
    return cellValue;

};
const checkOwnerEquity = (cell) => {

};

const checkLiability = (cell) => {

};

const accountingEquationAnswerData = [{}];

createInputArray(accountingEquationAnswerData);
console.log(transactionList);
//TODO - checks for table
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
        {title: "Account debited", field: "debit", cellEdited: checkDebit, width: 200, editor:"input", validator: ["string"], headerSort:false},
        {title:"Account credited", field:"credit", cellEdited: checkCredit, width: 200, editor: "input", validator: ["string"], headerSort:false},
        {title:"Assets", field:"assets", columns: [
                {title: "+", field: "plusAssets", cellEdited: checkPlus, editor: "input", validator: ['integer'], headerSort:false},
                {title: "-", field: "minusAssets", editor: "input", validator: ['integer'], headerSort:false}
                ],
        },
        {title:"Owners Equity", field:"ownersEquity", columns: [
                {title: "+", field: "plusOwnersEquity", editor: "input", validator: ['integer'], headerSort:false},
                {title: "-", field: "minusOwnersEquity", editor: "input", validator: ['integer'], headerSort:false}
                ],
        },
        {title:"Liabilities", field:"liabilities", columns: [
                {title: "+", field: "plusLiabilities", editor: "input", validator: ['integer'], headerSort:false},
                {title: "-", field: "minusLiabilities", editor: "input", validator: ['integer'], headerSort:false}
                ],
        },
    ],
});
