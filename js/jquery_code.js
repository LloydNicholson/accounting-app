$(document).ready(function() {
  // Show/hide ledger format
const $generalLedger = $(".general_ledger");
const $ledgerToggle = $(".ledger_toggle");
const $journal = $(".journal");
const $journalToggle = $(".journal_toggle");

  $generalLedger.hide();
  $ledgerToggle.on('click', () => {
    $generalLedger.slideToggle(800);
  });

  // Show/hide journal format
  $journal.hide();
  $journalToggle.on('click', () => {
    $journal.slideToggle(800);
  });

});
