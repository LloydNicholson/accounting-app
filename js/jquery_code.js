$(document).ready(function(){
  // Show/hide ledger
  $(".general_ledger").hide();
  $(".ledger_toggle").click(function() {
    /* Act on the event */
    $(".general_ledger").slideToggle(800);
  });

  // Show/hide journal
  $(".journal").hide();
  $(".journal_toggle").click(function() {
    /* Act on the event */
    $(".journal").slideToggle(800);
  });




});
