<?php
  if (isset($_POST['submit'])) {
    $r_month1 = $_POST["month1"];
    $r_day1 = $_POST["day1"];
    $r_details1 = $_POST["details1"];
    $r_folio1 = $_POST["folio1"];
    $r_amount1 = $_POST["amount1"];

    $r_month2 = $_POST["month2"];
    $r_day2 = $_POST["day2"];
    $r_details2 = $_POST["details2"];
    $r_folio2 = $_POST["folio2"];
    $r_amount2 = $_POST["amount2"];
  }
?>

<script type="text/javascript">
    function checkColumns() {
      // Debit column
      // Save data into debit column array
      const debit_col = [];

      var returned_month1 = debit_col.push(<?= json_encode($r_month1) ?>);
      var returned_day1 = debit_col.push(Number(<?= json_encode($r_day1) ?>));
      var returned_details1 = debit_col.push(<?= json_encode($r_details1) ?>);
      var returned_folio1 = debit_col.push(<?= json_encode($r_folio1) ?>);
      var returned_amount1 = debit_col.push(Number(<?= json_encode($r_amount1) ?>));

      // Credit column
      // Save data into credit column array
      const credit_col = [];

      var returned_month2 = credit_col.push(<?= json_encode($r_month2) ?>);
      var returned_day2 = credit_col.push(Number(<?= json_encode($r_day2) ?>));
      var returned_details2 = credit_col.push(<?= json_encode($r_details2) ?>);
      var returned_folio2 = credit_col.push(<?= json_encode($r_folio2) ?>);
      var returned_amount2 = credit_col.push(Number(<?= json_encode($r_amount2) ?>));

      // Return every month
      console.log('month', month);

      var current_month = months.forEach(month => {
        return month;
      });

      if (debit_col[0] != current_month) {
        console.log("That isn't a month");
      } else {
        if (month != debit_col[0]) {
          console.log('wrong');
        } else {
          console.log('correct');
        }
      }

      console.log("debit_col", debit_col);
      console.log("credit_col", credit_col);
    }

    checkColumns();
</script>
