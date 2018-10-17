$(document).ready(() => {
  // Show/hide ledger format
  const $generalLedger = $(".general_ledger");
  const $ledgerToggle = $(".ledger_toggle");
  const $journal = $(".journal");
  const $journalToggle = $(".journal_toggle");
  const $transactionList = $(".transactionList");
  const $headerImage = $(".header_image");
  const $arrowImage = $(".arrow");

  $generalLedger.hide();
  $ledgerToggle.on('click', () => {
    $generalLedger.slideToggle(800);
    $(event.currentTarget).find('.arrow').toggleClass('rotate');
  });

  // Show/hide journal format
  $journal.hide();
  $journalToggle.on('click', () => {
    $journal.slideToggle(800);
    $(event.currentTarget).find('.arrow').toggleClass('rotate');
  });

  // Make transaction list and header image bigger on mouse enter
  $headerImage.on('mouseenter', event => {
    $(event.currentTarget).animate({
      width: '110%',
      height: '110%'
    }, 700);
  }).on('mouseleave', event => {
      $(event.currentTarget).animate({
      width: '100%',
      height: '100%'
    }, 700);
  });



});
