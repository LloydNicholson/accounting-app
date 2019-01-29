'use strict';

//define some the journal entries
const journalAnswerData = [];
const fillJournal = () => {
    for (let i = 0; i < transactionListArray.length; i++) { // make sure there is space for final total of column
        let count = 0;
        if (transactionListArray[i].folio === "CRJ") {
            journalAnswerData.push({});
            count++;
        }
    }
};
fillJournal();

let cashReceiptsJournalTable = new Tabulator("#CashReceiptsJournalAnswerArea", {
    data: journalAnswerData,
    layout:"fitColumns",      //fit columns to width of table
    tooltips:true,            //show tool tips on cells
    addRowPos:"top",          //when adding a new row, add it to the top of the table
    history:true,             //allow undo and redo actions on the table
    columns:[                 //define the table columns
        {title:"doc", field:"document", width:60, editor:"input", validator: ["string"]},
        {title:"date", field:"date", width:80, editor: "input", validator: ["integer", "min:1", "max:29"]},
        {title:"details", field:"details", width:160, editor:"input", validator: ["string"]},
        {title:"fol", field:"folio", width:60, editor:"input", validator: ["string"]},
        {title:"analysis of receipts", field:"analysisOfReceipts", width:170, editor:"input", validator: ["integer", "min:1"]},
        {title:"bank", field:"bank", width:100, editor:"input", validator: ["integer", "min:1"]},
        {title:"current income", field:"currentIncome", width:140, editor:"input", validator: ["integer", "min:1"]},
        {title:"sundry accounts", field:"sundry", width:150, editor:"input", validator: ["integer", "min:1"]},
        // {title:"Date Of Birth", field:"dob", width:130, sorter:"date", align:"center"},
        // {title:"Driver", field:"car", width:90,  align:"center", formatter:"tickCross", sorter:"boolean", editor:true},
    ],
});
