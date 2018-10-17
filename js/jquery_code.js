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
  $headerImage.on('mouseenter', () => {
    $headerImage.animate({
      width: '110%',
      height: '110%'
    }, 700);
  }).on('mouseleave', () => {
      $headerImage.animate({
      width: '100%',
      height: '100%'
    }, 700);
  });

});
