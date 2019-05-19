"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var journals_1 = require("./journals");
var site_content_1 = require("./site_content");
var tabulator = require('tabulator-master');
var createInputArray = function (array) {
    for (var i = 0; i < site_content_1.transactionList.length; i++) { // make sure there is space for final total of column
        array.push({});
    }
    // Set id for the array
    for (var i = 0; i < array.length; i++) {
        array[i].id = i;
    }
};
var checkDebit = function (cell) {
    var cellValue = cell.getValue().toLowerCase();
    var cellIndex = cell.getData().id;
    var transactionListItem = site_content_1.transactionList[cellIndex];
    if (cellValue !== '') {
        if (cellValue === transactionListItem.debit.toLowerCase()) {
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
var checkCredit = function (cell) {
    var cellValue = cell.getValue().toLowerCase();
    var cellIndex = cell.getData().id;
    var transactionListItem = site_content_1.transactionList[cellIndex];
    if (cellValue !== '') {
        if (cellValue === transactionListItem.credit.toLowerCase()) {
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
var checkPlus = function (cell) {
    var cellValue = cell.getValue();
    var cellIndex = cell.getData().id;
    var cjItem = journals_1.filteredCJ[cellIndex];
    if (cellValue !== '') {
        if (cjItem.debit === cjItem.accountName && cellValue === cjItem.transactionAmount) {
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
var checkOwnerEquity = function (cell) {
};
var checkLiability = function (cell) {
};
var accountingEquationAnswerData = [{}];
createInputArray(accountingEquationAnswerData);
console.log(site_content_1.transactionList);
//TODO - checks for table
// Assets
// Owners Equity
// Liabilities
var accountingEquationTable = new tabulator('#accountingEquationAnswerArea', {
    data: accountingEquationAnswerData,
    layout: 'fitColumns',
    tooltips: true,
    addRowPos: 'top',
    history: true,
    columns: [
        {
            title: 'Account debited',
            field: 'debit',
            cellEdited: checkDebit,
            width: 200,
            editor: 'input',
            validator: ['string'],
            headerSort: false
        },
        {
            title: 'Account credited',
            field: 'credit',
            cellEdited: checkCredit,
            width: 200,
            editor: 'input',
            validator: ['string'],
            headerSort: false
        },
        {
            title: 'Assets', field: 'assets', columns: [
                {
                    title: '+',
                    field: 'plusAssets',
                    cellEdited: checkPlus,
                    editor: 'input',
                    validator: ['integer'],
                    headerSort: false
                },
                { title: '-', field: 'minusAssets', editor: 'input', validator: ['integer'], headerSort: false }
            ],
        },
        {
            title: 'Owners Equity', field: 'ownersEquity', columns: [
                { title: '+', field: 'plusOwnersEquity', editor: 'input', validator: ['integer'], headerSort: false },
                { title: '-', field: 'minusOwnersEquity', editor: 'input', validator: ['integer'], headerSort: false }
            ],
        },
        {
            title: 'Liabilities', field: 'liabilities', columns: [
                { title: '+', field: 'plusLiabilities', editor: 'input', validator: ['integer'], headerSort: false },
                { title: '-', field: 'minusLiabilities', editor: 'input', validator: ['integer'], headerSort: false }
            ],
        },
    ],
});
//# sourceMappingURL=accountingEquation.js.map