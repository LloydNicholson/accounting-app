"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var site_content_1 = require("./site_content");
var tabulator = require('tabulator-master');
// Functions
var filterJournal = function (folio) {
    return site_content_1.transactionList.filter((function (transaction) { return transaction.folio === folio; }));
};
var createInputJournal = function (array, folio) {
    for (var i = 0; i < site_content_1.transactionList.length; i++) { // make sure there is space for final total of column
        if (site_content_1.transactionList[i].folio === folio) {
            array.push({});
        }
    }
    // Set id for the array
    for (var i = 0; i < array.length; i++) {
        array[i].id = i;
    }
};
// CRJ checks
var checkCRJDocument = function (cell) {
    var cellValue = cell.getValue().toLowerCase();
    var cellIndex = cell.getData().id;
    var crjItem = exports.filteredCRJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (cellValue === crjItem.documentType.toLowerCase()) {
            cell.getElement().style.backgroundColor = '#caffaa';
        }
        else {
            cell.getElement().style.backgroundColor = '#ffb6b1';
        }
    }
    else {
        cell.getElement().style.backgroundColor = 'transparent';
    }
    return cellValue;
};
var checkCRJDate = function (cell) {
    var cellValue = cell.getValue();
    var cellIndex = cell.getData().id;
    var crjItem = exports.filteredCRJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === crjItem.currentDate) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = '#caffaa';
        }
        else {
            cell.getElement().style.backgroundColor = '#ffb6b1';
        }
    }
    else {
        cell.getElement().style.backgroundColor = 'transparent';
    }
    return cellValue;
};
var checkCRJDetails = function (cell) {
    var cellValue = cell.getValue().toLowerCase();
    var cellIndex = cell.getData().id;
    var crjItem = exports.filteredCRJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (cellValue === crjItem.otherBusiness.toLowerCase()) {
            cell.getElement().style.backgroundColor = '#caffaa';
        }
        else if (cellValue === crjItem.ownerName.toLowerCase() && crjItem.accountName.toLowerCase() === 'Capital'.toLowerCase()) {
            cell.getElement().style.backgroundColor = '#caffaa';
        }
        else {
            cell.getElement().style.backgroundColor = '#ffb6b1';
        }
    }
    else {
        cell.getElement().style.backgroundColor = 'transparent';
    }
    return cellValue;
};
var checkCRJBank = function (cell) {
    var cellValue = cell.getValue();
    var cellIndex = cell.getData().id;
    var crjItem = exports.filteredCRJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === crjItem.transactionAmount) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = '#caffaa';
        }
        else {
            cell.getElement().style.backgroundColor = '#ffb6b1';
        }
    }
    else {
        cell.getElement().style.backgroundColor = 'transparent';
    }
    return cellValue;
};
var checkCRJCI = function (cell) {
    var cellValue = cell.getValue();
    var cellIndex = cell.getData().id;
    var crjItem = exports.filteredCRJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === crjItem.transactionAmount && crjItem.accountName.toLowerCase() === 'Current income'.toLowerCase()) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = '#caffaa';
        }
        else {
            cell.getElement().style.backgroundColor = '#ffb6b1';
        }
    }
    else {
        cell.getElement().style.backgroundColor = 'transparent';
    }
    return cellValue;
};
var checkCRJSundryAmount = function (cell) {
    var cellValue = cell.getValue();
    var cellIndex = cell.getData().id;
    var crjItem = exports.filteredCRJ[cellIndex];
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === crjItem.transactionAmount) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = '#caffaa';
        }
        else {
            cell.getElement().style.backgroundColor = '#ffb6b1';
        }
    }
    else {
        cell.getElement().style.backgroundColor = 'transparent';
    }
    return cellValue;
};
var checkCRJSundryAccount = function (cell) {
    var cellValue = cell.getValue().toLowerCase();
    var cellIndex = cell.getData().id;
    var crjItem = exports.filteredCRJ[cellIndex];
    console.log(cell.getData());
    if (cellValue !== '') {
        if (cellValue === crjItem.accountName.toLowerCase()) {
            cell.getElement().style.backgroundColor = '#caffaa';
        }
        else {
            cell.getElement().style.backgroundColor = '#ffb6b1';
        }
    }
    else {
        cell.getElement().style.backgroundColor = 'transparent';
    }
    return cellValue;
};
// CPJ checks
var checkCPJDocument = function (cell) {
    var cellValue = cell.getValue();
    var cellIndex = cell.getData().id;
    var previousCellIndex = cell.getData().id - 1;
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (cellIndex > 0) {
            if (parseInt(cellValue[cellIndex]) === parseInt(cellValue[previousCellIndex] + 1)) {
                cell.getElement().style.backgroundColor = '#caffaa';
            }
            else {
                cell.getElement().style.backgroundColor = '#ffb6b1';
            }
        }
    }
    else {
        cell.getElement().style.backgroundColor = 'transparent';
    }
    return cellValue;
};
var checkCPJDate = function (cell) {
    var cellValue = cell.getValue();
    var cellIndex = cell.getData().id;
    var cpjItem = exports.filteredCPJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === cpjItem.currentDate) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = '#caffaa';
        }
        else {
            cell.getElement().style.backgroundColor = '#ffb6b1';
        }
    }
    else {
        cell.getElement().style.backgroundColor = 'transparent';
    }
    return cellValue;
};
var checkCPJPayee = function (cell) {
    var cellValue = cell.getValue().toLowerCase();
    var cellIndex = cell.getData().id;
    var cpjItem = exports.filteredCPJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (cellValue === cpjItem.otherBusiness.toLowerCase()) {
            cell.getElement().style.backgroundColor = '#caffaa';
        }
        else if (cellValue === cpjItem.ownerName.toLowerCase()) {
            cell.getElement().style.backgroundColor = '#caffaa';
        }
        else {
            cell.getElement().style.backgroundColor = '#ffb6b1';
        }
    }
    else {
        cell.getElement().style.backgroundColor = 'transparent';
    }
    return cellValue;
};
var checkCPJBank = function (cell) {
    var cellValue = cell.getValue();
    var cellIndex = cell.getData().id;
    var cpjItem = exports.filteredCPJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === cpjItem.transactionAmount) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = '#caffaa';
        }
        else {
            cell.getElement().style.backgroundColor = '#ffb6b1';
        }
    }
    else {
        cell.getElement().style.backgroundColor = 'transparent';
    }
    return cellValue;
};
var checkCPJTradingStock = function (cell) {
    var cellValue = cell.getValue();
    var cellIndex = cell.getData().id;
    var cpjItem = exports.filteredCPJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === cpjItem.transactionAmount && cpjItem.accountName.toLowerCase() === 'Trading stock'.toLowerCase()) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = '#caffaa';
        }
        else {
            cell.getElement().style.backgroundColor = '#ffb6b1';
        }
    }
    else {
        cell.getElement().style.backgroundColor = 'transparent';
    }
    return cellValue;
};
var checkCPJEquipment = function (cell) {
    var cellValue = cell.getValue();
    var cellIndex = cell.getData().id;
    var cpjItem = exports.filteredCPJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === cpjItem.transactionAmount && cpjItem.accountName.toLowerCase() === 'Equipment'.toLowerCase()) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = '#caffaa';
        }
        else {
            cell.getElement().style.backgroundColor = '#ffb6b1';
        }
    }
    else {
        cell.getElement().style.backgroundColor = 'transparent';
    }
    return cellValue;
};
var checkCPJSundryAmount = function (cell) {
    var cellValue = cell.getValue();
    var cellIndex = cell.getData().id;
    var cpjItem = exports.filteredCPJ[cellIndex];
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === cpjItem.transactionAmount) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = '#caffaa';
        }
        else {
            cell.getElement().style.backgroundColor = '#ffb6b1';
        }
    }
    else {
        cell.getElement().style.backgroundColor = 'transparent';
    }
    return cellValue;
};
var checkCPJSundryAccount = function (cell) {
    var cellValue = cell.getValue().toLowerCase();
    var cellIndex = cell.getData().id;
    var cpjItem = exports.filteredCPJ[cellIndex];
    console.log(cell.getData());
    if (cellValue !== '') {
        if (cellValue === cpjItem.accountName.toLowerCase()) {
            cell.getElement().style.backgroundColor = '#caffaa';
        }
        else {
            cell.getElement().style.backgroundColor = '#ffb6b1';
        }
    }
    else {
        cell.getElement().style.backgroundColor = 'transparent';
    }
    return cellValue;
};
// CJ checks
var checkCJDocument = function (cell) {
    var cellValue = cell.getValue().toLowerCase();
    var cellIndex = cell.getData().id;
    var cjItem = exports.filteredCJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (cellValue === cjItem.documentType.toLowerCase()) {
            cell.getElement().style.backgroundColor = '#caffaa';
        }
        else {
            cell.getElement().style.backgroundColor = '#ffb6b1';
        }
    }
    else {
        cell.getElement().style.backgroundColor = 'transparent';
    }
    return cellValue;
};
var checkCJDate = function (cell) {
    var cellValue = cell.getValue();
    var cellIndex = cell.getData().id;
    var cjItem = exports.filteredCJ[cellIndex];
    //cell - cell component
    console.log(cell.getData());
    if (cellValue !== '') {
        if (parseInt(cellValue) === cjItem.currentDate) {
            cellValue = parseInt(cellValue);
            cell.getElement().style.backgroundColor = '#caffaa';
        }
        else {
            cell.getElement().style.backgroundColor = '#ffb6b1';
        }
    }
    else {
        cell.getElement().style.backgroundColor = 'transparent';
    }
    return cellValue;
};
// DJ checks
// answerData
var crjAnswerData; // type declaration
var cpjAnswerData;
var cjAnswerData;
var djAnswerData;
// Create journals
createInputJournal(crjAnswerData, 'CRJ');
createInputJournal(cpjAnswerData, 'CPJ');
createInputJournal(cjAnswerData, 'CJ');
createInputJournal(djAnswerData, 'DJ');
// Filter journals
exports.filteredCRJ = filterJournal('CRJ');
exports.filteredCPJ = filterJournal('CPJ');
exports.filteredCJ = filterJournal('CJ');
exports.filteredDJ = filterJournal('DJ');
// CASH RECEIPTS JOURNAL
var cashReceiptsJournalTable = new tabulator('#CashReceiptsJournalAnswerArea', {
    data: crjAnswerData,
    layout: 'fitColumns',
    tooltips: true,
    addRowPos: 'top',
    history: true,
    columnVertAlign: 'bottom',
    headerSort: false,
    columns: [
        {
            title: 'Doc',
            field: 'document',
            cellEdited: checkCRJDocument,
            width: 65,
            editor: 'input',
            validator: ['string'],
            headerSort: false
        },
        {
            title: 'Date',
            field: 'date',
            cellEdited: checkCRJDate,
            width: 75,
            editor: 'input',
            validator: ['integer', 'min:1', 'max:31'],
            headerSort: false
        },
        {
            title: 'Details',
            field: 'details',
            cellEdited: checkCRJDetails,
            width: 150,
            editor: 'input',
            validator: ['string'],
            headerSort: false
        },
        { title: 'Fol', field: 'folio', width: 60, editor: 'input', validator: ['string'], headerSort: false },
        {
            title: 'Analysis of <br>Receipts',
            field: 'analysisOfReceipts',
            width: 120,
            editor: 'input',
            validator: ['integer', 'min:1'],
            headerSort: false
        },
        {
            title: 'Bank',
            field: 'bankValue',
            cellEdited: checkCRJBank,
            width: 80,
            editor: 'input',
            validator: ['integer', 'min:1'],
            headerSort: false
        },
        {
            title: 'Current income',
            field: 'currentIncome',
            cellEdited: checkCRJCI,
            width: 140,
            editor: 'input',
            validator: ['integer', 'min:1'],
            headerSort: false
        },
        {
            title: 'Sundry', field: 'sundry', columns: [
                {
                    title: 'Account',
                    field: 'account',
                    cellEdited: checkCRJSundryAccount,
                    align: 'left',
                    editor: 'input',
                    validator: ['string'],
                    headerSort: false
                },
                {
                    title: 'Amount',
                    cellEdited: checkCRJSundryAmount,
                    field: 'amount',
                    align: 'right',
                    editor: 'input',
                    validator: ['integer', 'min:1'],
                    headerSort: false
                }
            ],
        },
    ],
});
// CASH PAYMENTS JOURNAL
var cashPaymentsJournalTable = new tabulator('#CashPaymentsJournalAnswerArea', {
    data: cpjAnswerData,
    layout: 'fitColumns',
    tooltips: true,
    addRowPos: 'top',
    history: true,
    columnVertAlign: 'bottom',
    headerSort: false,
    columns: [
        { title: 'Doc', field: 'document', width: 65, editor: 'input', validator: ['integer', 'min:0'], headerSort: false },
        {
            title: 'Date',
            field: 'date',
            cellEdited: checkCPJDate,
            width: 75,
            editor: 'input',
            validator: ['integer', 'min:1', 'max:31'],
            headerSort: false
        },
        {
            title: 'Payee',
            field: 'details',
            cellEdited: checkCPJPayee,
            width: 150,
            editor: 'input',
            validator: ['string'],
            headerSort: false
        },
        { title: 'Fol', field: 'folio', width: 60, editor: 'input', validator: ['string'], headerSort: false },
        {
            title: 'Bank',
            field: 'amount',
            cellEdited: checkCPJBank,
            width: 100,
            editor: 'input',
            validator: ['integer', 'min:1'],
            headerSort: false
        },
        {
            title: 'Trading Stock',
            field: 'amount',
            cellEdited: checkCPJTradingStock,
            width: 140,
            editor: 'input',
            validator: ['integer', 'min:1'],
            headerSort: false
        },
        {
            title: 'Equipment',
            field: 'amount',
            cellEdited: checkCPJEquipment,
            width: 120,
            editor: 'input',
            validator: ['integer', 'min:1'],
            headerSort: false
        },
        {
            title: 'Sundry', field: 'sundry', columns: [
                {
                    title: 'Account',
                    field: 'sundryName',
                    cellEdited: checkCPJSundryAccount,
                    align: 'left',
                    editor: 'input',
                    validator: ['string'],
                    headerSort: false
                },
                {
                    title: 'Amount',
                    field: 'amount',
                    cellEdited: checkCPJSundryAmount,
                    align: 'right',
                    editor: 'input',
                    validator: ['integer', 'min:1'],
                    headerSort: false
                }
            ],
        },
    ],
});
// CREDITORS JOURNAL
var creditorsJournalTable = new tabulator('#CreditorsJournalAnswerArea', {
    data: cjAnswerData,
    layout: 'fitColumns',
    tooltips: true,
    addRowPos: 'top',
    history: true,
    columnVertAlign: 'bottom',
    columns: [
        { title: 'Doc', field: 'document', width: 65, editor: 'input', validator: ['integer', 'min:0'], headerSort: false },
        {
            title: 'Date',
            field: 'date',
            cellEdited: checkCJDate,
            width: 75,
            editor: 'input',
            validator: ['integer', 'min:1', 'max:31'],
            headerSort: false
        },
        { title: 'Creditor', field: 'details', width: 150, editor: 'input', validator: ['string'], headerSort: false },
        { title: 'Fol', field: 'folio', width: 60, editor: 'input', validator: ['string'], headerSort: false },
        {
            title: 'Creditors Control',
            field: 'amount',
            width: 140,
            editor: 'input',
            validator: ['integer', 'min:1'],
            headerSort: false
        },
        {
            title: 'Trading Stock',
            field: 'amount',
            width: 130,
            editor: 'input',
            validator: ['integer', 'min:1'],
            headerSort: false
        },
        {
            title: 'Equipment',
            field: 'amount',
            width: 100,
            editor: 'input',
            validator: ['integer', 'min:1'],
            headerSort: false
        },
        {
            title: 'Sundry', field: 'sundry', columns: [
                {
                    title: 'Account',
                    field: 'sundryName',
                    align: 'left',
                    editor: 'input',
                    validator: ['string'],
                    headerSort: false
                },
                {
                    title: 'Amount',
                    field: 'amount',
                    align: 'right',
                    editor: 'input',
                    validator: ['integer', 'min:1'],
                    headerSort: false
                }
            ],
        },
    ],
});
// DEBTORS JOURNAL
var debtorsJournalTable = new tabulator('#DebtorsJournalAnswerArea', {
    data: djAnswerData,
    layout: 'fitColumns',
    tooltips: true,
    addRowPos: 'top',
    history: true,
    columnVertAlign: 'bottom',
    headerSort: false,
    columns: [
        { title: 'Doc', field: 'document', width: 65, editor: 'input', validator: ['integer', 'min:0'], headerSort: false },
        {
            title: 'Date',
            field: 'date',
            width: 75,
            editor: 'input',
            validator: ['integer', 'min:1', 'max:31'],
            headerSort: false
        },
        { title: 'Debtor', field: 'details', width: 250, editor: 'input', validator: ['string'], headerSort: false },
        { title: 'Fol', field: 'folio', width: 60, editor: 'input', validator: ['string'], headerSort: false },
        { title: 'Sales', field: 'amount', editor: 'input', validator: ['integer', 'min:1'], headerSort: false },
        { title: 'Cost of Sales', field: 'amount', editor: 'input', validator: ['integer', 'min:1'], headerSort: false },
    ],
});
var sheets = {
    'Cash Receipts Journal': true,
    'Cash Payments Journal': '#CashPaymentsJournalAnswerArea',
    'Creditors Journal': '#CreditorsJournalAnswerArea',
    'Debtors Journal': '#DebtorsJournalAnswerArea'
};
var downloadJournalsButton = document.querySelector('#journalDownloadButton');
console.log('Cash Receipts Journal', exports.filteredCRJ);
console.log('Cash Payments Journal', exports.filteredCPJ);
console.log('Creditors Journal', exports.filteredCJ);
console.log('Debtors Journal', exports.filteredDJ);
//# sourceMappingURL=journals.js.map