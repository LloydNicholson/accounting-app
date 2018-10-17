$(document).ready(() => {
  // Show/hide ledger format
  const $generalLedger = $(".general_ledger");
  const $ledgerToggle = $(".ledger_toggle");
  const $journal = $(".journal");
  const $journalToggle = $(".journal_toggle");
  const $transactionList = $(".transactionList");
  const $headerImage = $(".header_image");

  $generalLedger.hide();
  $ledgerToggle.on('click', () => {
    $generalLedger.slideToggle(800);
  });

  // Show/hide journal format
  $journal.hide();
  $journalToggle.on('click', () => {
    $journal.slideToggle(800);
  });

  // Make transaction list and header image bigger on mouse enter
  .on('mouseenter', () => {
    .animate({
      width: '100%',
      height: '100%'
    });
  }).on('mouseleave', () => {
      .animate({
      width: '80%',
      height: '80%'
    })
  });

});
