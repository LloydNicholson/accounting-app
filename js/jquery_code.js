$(document).ready(() => {
  // Show/hide ledger format
  const $generalLedger = $(".general_ledger");
  const $ledgerToggle = $(".ledger_toggle");
  const $journal = $(".journal");
  const $journalToggle = $(".journal_toggle");
  const $transactionList = $(".transaction");
  const $headerImage = $(".header_image");
  const $arrowImage = $(".arrow");
  const $downloadArea = $(".download_area");
  const $downloadLink = $downloadArea.find(".link");
  const $CRJTemplate = $(".download_area").find("#CRJ");
  const $CPJTemplate = $(".download_area").find("#CPJ");
  const $GLTemplate = $(".download_area").find("#GL");
  const $AEQTemplate = $(".download_area").find("#AEQ");
  const $CRJLink = $(".download_area").find("#CRJ_link");
  const $CPJLink = $(".download_area").find("#CPJ_link");
  const $GLLink = $(".download_area").find("#GL_link");
  const $AEQLink = $(".download_area").find("#AEQ_link");

  $generalLedger.hide();
  $ledgerToggle.on("click", () => {
    $generalLedger.slideToggle(800);
    $(event.currentTarget)
      .find(".arrow")
      .toggleClass("rotate");
  });

  // Show/hide journal format
  $journal.hide();
  $journalToggle.on("click", () => {
    $journal.slideToggle(800);
    $(event.currentTarget)
      .find(".arrow")
      .toggleClass("rotate");
  });

  $downloadLink.hide();
  $CRJTemplate.on("mouseenter", () => {
    $CRJLink.slideToggle();
  });
  $CPJTemplate.on("mouseenter", () => {
    $CPJLink.slideToggle();
  });
  $GLTemplate.on("mouseenter", () => {
    $GLLink.slideToggle();
  });
  $AEQTemplate.on("mouseenter", () => {
    $AEQLink.slideToggle();
  });
  // Make transaction list and header image bigger on mouse enter
  /* Trying to make this work with static borders without increasing actual size of image
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
  */
});
