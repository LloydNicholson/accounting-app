$(document).ready(function() {
  // Show/hide ledger format
  $(".general_ledger").hide();
  $(".ledger_toggle").click(function() {
    $(".general_ledger").slideToggle(800);
  });

  // Show/hide journal format
  $(".journal").hide();
  $(".journal_toggle").click(function() {
    $(".journal").slideToggle(800);
  });

});
