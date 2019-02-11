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
const checkCRJDocument = (cell) => {
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
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }
    return cellValue;
};
const checkCRJDate = (cell) => {
    let cellValue = cell.getValue();
    let cellIndex = cell.getData().id;
    let crjItem = filteredCRJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === crjItem.currentDate) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }
    return cellValue;
};
const checkCRJDetails = (cell) => {
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
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }
    return cellValue;
};
const checkCRJBank = (cell) => {
    let cellValue = cell.getValue();
    let cellIndex = cell.getData().id;
    let crjItem = filteredCRJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === crjItem.transactionAmount) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }
    return cellValue;
};
const checkCRJCI = (cell) => {
    let cellValue = cell.getValue();
    let cellIndex = cell.getData().id;
    let crjItem = filteredCRJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === crjItem.transactionAmount && crjItem.accountName.toLowerCase() === 'Current income'.toLowerCase()) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }
    return cellValue;
};
const checkCRJSundryAmount = (cell) => {
    let cellValue = cell.getValue();
    let cellIndex = cell.getData().id;
    let crjItem = filteredCRJ[cellIndex];
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === crjItem.transactionAmount) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }
    return cellValue;
};
const checkCRJSundryAccount = (cell) => {
    let cellValue = cell.getValue().toLowerCase();
    let cellIndex = cell.getData().id;
    let crjItem = filteredCRJ[cellIndex];
    console.log(cell.getData());
    if (cellValue !== '') {
        if (cellValue === crjItem.accountName.toLowerCase()) {
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }
    return cellValue;
};

// CPJ checks
const checkCPJDocument = (cell) => {
    let cellValue = cell.getValue();
    let cellIndex = cell.getData().id;
    let previousCellIndex = cell.getData().id-1;
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (cellIndex > 0) {
            if (parseInt(cellValue[cellIndex]) === parseInt(cellValue[previousCellIndex] + 1)) {
                cell.getElement().style.backgroundColor = "#caffaa";
            } else {
                cell.getElement().style.backgroundColor = "#ffb6b1";
            }
        }
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }
    return cellValue;
};
const checkCPJDate = (cell) => {
    let cellValue = cell.getValue();
    let cellIndex = cell.getData().id;
    let cpjItem = filteredCPJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === cpjItem.currentDate) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }
    return cellValue;
};
const checkCPJPayee = (cell) => {
    let cellValue = cell.getValue().toLowerCase();
    let cellIndex = cell.getData().id;
    let cpjItem = filteredCPJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (cellValue === cpjItem.otherBusiness.toLowerCase()) {
            cell.getElement().style.backgroundColor = "#caffaa";
        } else if (cellValue === cpjItem.ownerName.toLowerCase()) {
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }
    return cellValue;
};
const checkCPJBank = (cell) => {
    let cellValue = cell.getValue();
    let cellIndex = cell.getData().id;
    let cpjItem = filteredCPJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === cpjItem.transactionAmount) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }

    return cellValue;
};
const checkCPJTradingStock = (cell) => {
    let cellValue = cell.getValue();
    let cellIndex = cell.getData().id;
    let cpjItem = filteredCPJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === cpjItem.transactionAmount && cpjItem.accountName.toLowerCase() === 'Trading stock'.toLowerCase()) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }
    return cellValue;
};
const checkCPJEquipment = (cell) => {
    let cellValue = cell.getValue();
    let cellIndex = cell.getData().id;
    let cpjItem = filteredCPJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === cpjItem.transactionAmount && cpjItem.accountName.toLowerCase() === 'Equipment'.toLowerCase()) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }
    return cellValue;
};
const checkCPJSundryAmount = (cell) => {
    let cellValue = cell.getValue();
    let cellIndex = cell.getData().id;
    let cpjItem = filteredCPJ[cellIndex];
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === cpjItem.transactionAmount) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }
    return cellValue;
};
const checkCPJSundryAccount = (cell) => {
    let cellValue = cell.getValue().toLowerCase();
    let cellIndex = cell.getData().id;
    let cpjItem = filteredCPJ[cellIndex];
    console.log(cell.getData());
    if (cellValue !== '') {
        if (cellValue === cpjItem.accountName.toLowerCase()) {
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }
    return cellValue;
};

// CJ checks
const checkCJDocument = (cell) => {
    let cellValue = cell.getValue().toLowerCase();
    let cellIndex = cell.getData().id;
    let cjItem = filteredCJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (cellValue === cjItem.documentType.toLowerCase()) {
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }
    return cellValue;
};
const checkCJDate = (cell) => {
    let cellValue = cell.getValue();
    let cellIndex = cell.getData().id;
    let cjItem = filteredCJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === cjItem.currentDate) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = "#caffaa";
        } else {
            cell.getElement().style.backgroundColor = "#ffb6b1";
        }
    } else {
        cell.getElement().style.backgroundColor = "transparent";
    }
    return cellValue;
};



// DJ checks

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
let cashReceiptsJournalTable = new Tabulator("#CashReceiptsJournalAnswerArea", {
    data: crjAnswerData,
    layout:"fitColumns",      //fit columns to width of table
    tooltips:true,            //show tool tips on cells
    addRowPos:"top",          //when adding a new row, add it to the top of the table
    history:true,             //allow undo and redo actions on the table
    columnVertAlign:"bottom",
    headerSort:false,
    columns:[                 //define the table columns
        {title: "Doc", field: "document", cellEdited: checkCRJDocument, width:65, editor:"input", validator: ["string"], headerSort:false},
        {title:"Date", field:"date", cellEdited: checkCRJDate, width:75, editor: "input", validator: ["integer", "min:1", "max:31"], headerSort:false},
        {title:"Details", field:"details", cellEdited: checkCRJDetails, width:150, editor:"input", validator: ["string"], headerSort:false},
        {title:"Fol", field:"folio", width:60, editor:"input", validator: ["string"], headerSort:false},
        {title:"Analysis of <br>Receipts", field:"analysisOfReceipts", width:120, editor:"input", validator: ["integer", "min:1"], headerSort:false},
        {title:"Bank", field:"bankValue", cellEdited: checkCRJBank, width:80, editor:"input", validator: ["integer", "min:1"], headerSort:false},
        {title:"Current income", field:"currentIncome", cellEdited: checkCRJCI, width:140, editor:"input", validator: ["integer", "min:1"], headerSort:false},
        {title:"Sundry", field:"sundry",columns: [
                {title:"Account", field:"account", cellEdited: checkCRJSundryAccount, align: "left", editor:"input", validator: ["string"], headerSort:false},
                {title:"Amount", cellEdited: checkCRJSundryAmount, field:"amount", align:"right", editor:"input", validator: ["integer", "min:1"], headerSort:false}
            ],
        },
    ],
});

// CASH PAYMENTS JOURNAL
let cashPaymentsJournalTable = new Tabulator("#CashPaymentsJournalAnswerArea", {
    data: cpjAnswerData,
    layout:"fitColumns",      //fit columns to width of table
    tooltips:true,            //show tool tips on cells
    addRowPos:"top",          //when adding a new row, add it to the top of the table
    history:true,             //allow undo and redo actions on the table
    columnVertAlign:"bottom",
    headerSort:false,
    columns:[                 //define the table columns
        {title:"Doc",field:"document", width:65, editor:"input", validator: ["integer", "min:0"], headerSort:false},
        {title:"Date", field:"date", cellEdited: checkCPJDate, width:75, editor:"input", validator: ["integer", "min:1", "max:31"], headerSort:false},
        {title:"Payee", field:"details", cellEdited: checkCPJPayee, width:150, editor:"input", validator: ["string"], headerSort:false},
        {title:"Fol", field:"folio", width:60, editor:"input", validator: ["string"], headerSort:false},
        {title:"Bank", field:"amount", cellEdited: checkCPJBank, width:100, editor:"input", validator: ["integer", "min:1"], headerSort:false},
        {title:"Trading Stock", field:"amount", cellEdited: checkCPJTradingStock, width:140, editor:"input", validator: ["integer", "min:1"], headerSort:false},
        {title:"Equipment", field:"amount", cellEdited: checkCPJEquipment, width:120, editor:"input", validator: ["integer", "min:1"], headerSort:false},
        {title:"Sundry", field:"sundry", columns: [
                    {title:"Account", field:"sundryName", cellEdited: checkCPJSundryAccount, align: "left", editor:"input", validator: ["string"], headerSort:false},
                    {title:"Amount", field:"amount", cellEdited: checkCPJSundryAmount, align:"right", editor:"input", validator: ["integer", "min:1"], headerSort:false}
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
        {title:"Doc", field:"document", width:65, editor:"input", validator: ["integer", "min:0"], headerSort:false},
        {title:"Date", field:"date", cellEdited: checkCJDate, width:75, editor:"input", validator: ["integer", "min:1", "max:31"], headerSort:false},
        {title:"Creditor", field:"details", width:150, editor:"input", validator: ["string"], headerSort:false},
        {title:"Fol", field:"folio", width:60, editor:"input", validator: ["string"], headerSort:false},
        {title:"Creditors Control", field:"amount", width:140, editor:"input", validator: ["integer", "min:1"], headerSort:false},
        {title:"Trading Stock", field:"amount", width:130, editor:"input", validator: ["integer", "min:1"], headerSort:false},
        {title:"Equipment", field:"amount", width:100, editor:"input", validator: ["integer", "min:1"], headerSort:false},
        {title:"Sundry", field:"sundry", columns: [
                {title:"Account", field:"sundryName", align: "left", editor:"input", validator: ["string"], headerSort:false},
                {title:"Amount", field:"amount", align:"right", editor:"input", validator: ["integer", "min:1"], headerSort:false}
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
    headerSort:false,
    columns:[                 //define the table columns
        {title:"Doc", field:"document", width:65, editor:"input", validator: ["integer", "min:0"], headerSort:false},
        {title:"Date", field:"date", width:75, editor:"input", validator: ["integer", "min:1", "max:31"], headerSort:false},
        {title:"Debtor", field:"details", width:250, editor:"input", validator: ["string"], headerSort:false},
        {title:"Fol", field:"folio", width:60, editor:"input", validator: ["string"], headerSort:false},
        {title:"Sales", field:"amount", editor:"input", validator: ["integer", "min:1"], headerSort:false},
        {title:"Cost of Sales", field:"amount", editor:"input", validator: ["integer", "min:1"], headerSort:false},
        // {title:"Date Of Birth", field:"dob", width:130, sorter:"date", align:"center"},
        // {title:"Driver", field:"car", width:90,  align:"center", formatter:"tickCross", sorter:"boolean", editor:true},
    ],
});

const sheets = {
    'Cash Receipts Journal': true,
    'Cash Payments Journal': '#CashPaymentsJournalAnswerArea',
    'Creditors Journal': '#CreditorsJournalAnswerArea',
    'Debtors Journal': '#DebtorsJournalAnswerArea'
};

const downloadJournals = () => {
    cashReceiptsJournalTable.download("xlsx", "AllJournals.xlsx", {sheets:sheets});
};

const downloadJournalsButton = document.querySelector('#journalDownloadButton');
downloadJournalsButton.addEventListener('click', downloadJournals);

console.log('Cash Receipts Journal', filteredCRJ);
console.log('Cash Payments Journal', filteredCPJ);
console.log('Creditors Journal', filteredCJ);
console.log('Debtors Journal', filteredDJ);
