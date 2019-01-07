<!DOCTYPE html>
<html lang="en">
<head>
  <title>Accounting Practice App</title>
  <meta charset="utf-8">

  <!-- Stylesheet reference-->
  <link rel="stylesheet" href="css/acc_app.css">

  <!-- Javascript reference-->
  <script src="js/T_account.js"></script>
  <script src="js/site_content.js"></script>

  <!--Fonts-->
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Goudy+Bookletter+1911" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
</head>
<body>

  <!--Page header-->
  <div class="header">
    <h1>KID CONNECT</h1>
    <img class="header_image" src="/Images/Small_Business_and_Accounting-LG.jpg" alt="Header image">
    <h2>Accounting Practice Exercises</h2>
    <h2>Practice your Accounting with various examples that have been randomly generated. This page will give you opportunities to complete Source Documents, Journals, Ledgers and Financial statements</h2>
    <h3>Refresh your page to generate a new set of examples.</h3>
  </div>

  <!--Form retrieving-->
  <div class="upload_area">
    <form action="upload.php" method="post" enctype="multipart/form-data">
    <p>Download and fill in the sheet by hand or on your computer and send it back when completed. Remember to add your name inside the excel spreadsheet.</p>
    <label for="file">Choose a file to upload: </label>
    <input type="file" name="file">
    <button type="submit" name="submit">Upload</button>
    </form>
  </div>

  <!--Transaction list creation area-->
  <div class="transactionList">

    <!--Heading-->
    <h2><script type="text/javascript">
        createHeading("template");
        </script>
    </h2>

    <!--Transaction list-->
    <p>
      <script type="text/javascript" src="js/transaction_list.js"></script>
    </p>
  </div>

  <!--Form giving-->
    <div class="download_area">
      <h2>Downloads</h2>
      <div class="type" id="CRJ">CRJ Template</div><div class="link" id="CRJ_link"><a href="Documents/CASH RECEIPTS JOURNAL TEMPLATE.xlsx" download>To download the Cash Receipts Journal Template, click here!</a></div>
      <div class="type" id="CPJ">CPJ Template</div><div class="link" id="CPJ_link"><a href="Documents/CASH PAYMENTS JOURNAL TEMPLATE.xlsx" download>To download the Cash Payments Journal Template, click here!</a></div>
      <div class="type" id="GL">GL Template</div><div class="link" id="GL_link"><a href="Documents/GENERAL LEDGER TEMPLATE.xlsx" download>To download the General Ledger Template, click here!</a></div>
      <div class="type" id="AEQ">AEQ Template</div><div class="link" id="AEQ_link"><a href="Documents/ACCOUNTING EQUATION.xlsx" download>To download the Accounting Equation Template, click here!</a></div>
    </div>
  <!--Answer form area-->
  <div class="format_area">
    <h2>Formats of Accounting activities</h2>
    <div class="journal_toggle"><img src="Images/Arrow.jpg" alt="arrow" class="arrow"> Show/Hide Journal format
     <img src="Images/Arrow.jpg" alt="arrow" class="arrow"></div>
    <div class="journal">
      <h3>Journal Format</h3>
      <h4>Cash Receipts Journal</h4>
      <table class="cash_receipts_journal">
        <tr class="heading">
          <th class="doc" rowspan="2">Doc</th>
          <th class="day" rowspan="2">Day</th>
          <th class="details" rowspan="2">Details</th>
          <th class="folio1" rowspan="2">Fol</th>
          <th class="analysis" rowspan="2">Analysis of receipts</th>
          <th class="acc1" rowspan="2">Bank</th>
          <th class="acc2" rowspan="2">Current Income</th>
          <th class="sundry" colspan="3">Sundry</th>
        </tr>

        <tr class="heading2">
          <th class="amount">Amount</th>
          <th class="folio2">Fol</th>
          <th class="details">Details</th>
        </tr>


        <tr class="row" id="one">
          <td class="doc"></td>
          <td class="day"></td>
          <td class="details"></td>
          <td class="folio"></td>
          <td class="analysis"></td>
          <td class="acc1"></td>
          <td class="acc2"></td>
          <td class="amount"></td>
          <td class="folio2"></td>
          <td class="details"></td>
        </tr>

        <tr class="row" id="two">
          <td class="doc"></td>
          <td class="day"></td>
          <td class="details"></td>
          <td class="folio"></td>
          <td class="analysis"></td>
          <td class="acc1"></td>
          <td class="acc2"></td>
          <td class="amount"></td>
          <td class="folio2"></td>
          <td class="details"></td>
        </tr>

        <tr class="row" id="three">
          <td class="doc"></td>
          <td class="day"></td>
          <td class="details"></td>
          <td class="folio"></td>
          <td class="analysis"></td>
          <td class="acc1"></td>
          <td class="acc2"></td>
          <td class="amount"></td>
          <td class="folio2"></td>
          <td class="details"></td>
        </tr>

        <tr class="row" id="three">
          <td class="doc"></td>
          <td class="day"></td>
          <td class="details"></td>
          <td class="folio"></td>
          <td class="analysis"></td>
          <td class="acc1"></td>
          <td class="acc2"></td>
          <td class="amount"></td>
          <td class="folio2"></td>
          <td class="details"></td>
        </tr>
      </table>
      <h4>Cash Payments Journal</h4>
      <table class="cash_payments_journal">
        <tr class="heading">
          <th class="doc" rowspan="2">Doc</th>
          <th class="day" rowspan="2">Day</th>
          <th class="details" rowspan="2">Details</th>
          <th class="folio1" rowspan="2">Fol</th>
          <th class="bank" rowspan="2">Bank</th>
          <th class="acc1" rowspan="2">Trading Stock</th>
          <th class="acc2" rowspan="2">Rent Expense</th>
          <th class="sundry" colspan="3">Sundry</th>
        </tr>

        <tr class="heading2">
          <th class="amount">Amount</th>
          <th class="folio2">Fol</th>
          <th class="details">Details</th>
        </tr>


        <tr class="row" id="one">
          <td class="doc"></td>
          <td class="day"></td>
          <td class="details"></td>
          <td class="folio"></td>
          <td class="bank"></td>
          <td class="acc1"></td>
          <td class="acc2"></td>
          <td class="amount"></td>
          <td class="folio2"></td>
          <td class="details"></td>
        </tr>

        <tr class="row" id="two">
          <td class="doc"></td>
          <td class="day"></td>
          <td class="details"></td>
          <td class="folio"></td>
          <td class="bank"></td>
          <td class="acc1"></td>
          <td class="acc2"></td>
          <td class="amount"></td>
          <td class="folio2"></td>
          <td class="details"></td>
        </tr>

        <tr class="row" id="three">
          <td class="doc"></td>
          <td class="day"></td>
          <td class="details"></td>
          <td class="folio"></td>
          <td class="bank"></td>
          <td class="acc1"></td>
          <td class="acc2"></td>
          <td class="amount"></td>
          <td class="folio2"></td>
          <td class="details"></td>
        </tr>

        <tr class="row" id="three">
          <td class="doc"></td>
          <td class="day"></td>
          <td class="details"></td>
          <td class="folio"></td>
          <td class="bank"></td>
          <td class="acc1"></td>
          <td class="acc2"></td>
          <td class="amount"></td>
          <td class="folio2"></td>
          <td class="details"></td>
        </tr>
      </table>
    </div>

    <div class="ledger_toggle"><img src="Images/Arrow.jpg" alt="arrow" class="arrow"> Show/Hide General Ledger format
    <img src="Images/Arrow.jpg" alt="arrow" class="arrow"></div>
    <div class="general_ledger">
      <h3>General Ledger Format</h3>
      <h4>Bank</h4>
      <table class="bank">
        <tr class="heading">
          <th class="debit" id="month">Month</th>
          <th class="debit" id="day">Day</th>
          <th class="debit" id="details">Details</th>
          <th class="debit" id="folio">Fol</th>
          <th class="debit" id="amount">Amount</th>

          <th class="credit" id="month">Month</th>
          <th class="credit" id="day">Day</th>
          <th class="credit" id="details">Details</th>
          <th class="credit" id="folio">Fol</th>
          <th class="credit" id="amount">Amount</th>
        </tr>
        <tr class="row" id="one">
          <td class="debit" id="month"></td>
          <td class="debit" id="day"></td>
          <td class="debit" id="details"></td>
          <td class="debit" id="folio"></td>
          <td class="debit" id="amount"></td>

          <td class="credit" id="month"></td>
          <td class="credit" id="day"></td>
          <td class="credit" id="details"></td>
          <td class="credit" id="folio"></td>
          <td class="credit" id="amount"></td>
        </tr>

        <tr class="row" id="two">
          <td class="debit" id="month"></td>
          <td class="debit" id="day"></td>
          <td class="debit" id="details"></td>
          <td class="debit" id="folio"></td>
          <td class="debit" id="amount"></td>

          <td class="credit" id="month"></td>
          <td class="credit" id="day"></td>
          <td class="credit" id="details"></td>
          <td class="credit" id="folio"></td>
          <td class="credit" id="amount"></td>
        </tr>

        <tr class="row" id="three">
          <td class="debit" id="month"></td>
          <td class="debit" id="day"></td>
          <td class="debit" id="details"></td>
          <td class="debit" id="folio"></td>
          <td class="debit" id="amount"></td>

          <td class="credit" id="month"></td>
          <td class="credit" id="day"></td>
          <td class="credit" id="details"></td>
          <td class="credit" id="folio"></td>
          <td class="credit" id="amount"></td>
        </tr>

        <tr class="row" id="four">
          <td class="debit" id="month"></td>
          <td class="debit" id="day"></td>
          <td class="debit" id="details"></td>
          <td class="debit" id="folio"></td>
          <td class="debit" id="amount"></td>

          <td class="credit" id="month"></td>
          <td class="credit" id="day"></td>
          <td class="credit" id="details"></td>
          <td class="credit" id="folio"></td>
          <td class="credit" id="amount"></td>
        </tr>

      </table>
      <h4>Trading Stock</h4>
      <table class="trading_stock">
      <tr class="heading">
        <th class="debit" id="month">Month</th>
        <th class="debit" id="day">Day</th>
        <th class="debit" id="details">Details</th>
        <th class="debit" id="folio">Fol</th>
        <th class="debit" id="amount">Amount</th>

        <th class="credit" id="month">Month</th>
        <th class="credit" id="day">Day</th>
        <th class="credit" id="details">Details</th>
        <th class="credit" id="folio">Fol</th>
        <th class="credit" id="amount">Amount</th>
      </tr>
      <tr class="row" id="one">
        <td class="debit" id="month"></td>
        <td class="debit" id="day"></td>
        <td class="debit" id="details"></td>
        <td class="debit" id="folio"></td>
        <td class="debit" id="amount"></td>

        <td class="credit" id="month"></td>
        <td class="credit" id="day"></td>
        <td class="credit" id="details"></td>
        <td class="credit" id="folio"></td>
        <td class="credit" id="amount"></td>
      </tr>

      <tr class="row" id="two">
        <td class="debit" id="month"></td>
        <td class="debit" id="day"></td>
        <td class="debit" id="details"></td>
        <td class="debit" id="folio"></td>
        <td class="debit" id="amount"></td>

        <td class="credit" id="month"></td>
        <td class="credit" id="day"></td>
        <td class="credit" id="details"></td>
        <td class="credit" id="folio"></td>
        <td class="credit" id="amount"></td>
      </tr>

      <tr class="row" id="three">
        <td class="debit" id="month"></td>
        <td class="debit" id="day"></td>
        <td class="debit" id="details"></td>
        <td class="debit" id="folio"></td>
        <td class="debit" id="amount"></td>

        <td class="credit" id="month"></td>
        <td class="credit" id="day"></td>
        <td class="credit" id="details"></td>
        <td class="credit" id="folio"></td>
        <td class="credit" id="amount"></td>
      </tr>

      <tr class="row" id="four">
        <td class="debit" id="month"></td>
        <td class="debit" id="day"></td>
        <td class="debit" id="details"></td>
        <td class="debit" id="folio"></td>
        <td class="debit" id="amount"></td>

        <td class="credit" id="month"></td>
        <td class="credit" id="day"></td>
        <td class="credit" id="details"></td>
        <td class="credit" id="folio"></td>
        <td class="credit" id="amount"></td>
      </tr>
    </table>
    </div>

    <!--Test to create table and create a form within-->
    <table class="test_table">
      <tr>
        <form method="post" enctype="multipart/form-data">
        <!--Debit column-->
        <td><input type="text" name="month1" id="input" value=""></td>
        <td><input type="text" name="day1" id="input" value=""></td>
        <td><input type="text" name="details1" id="input" value=""></td>
        <td><input type="text" name="folio1" id="input" value=""></td>
        <td><input type="text" name="amount1" id="input" value=""></td>

        <!--Credit column-->
        <td><input type="text" name="month2" id="input" value=""></td>
        <td><input type="text" name="day2" id="input" value=""></td>
        <td><input type="text" name="details2" id="input" value=""></td>
        <td><input type="text" name="folio2" id="input" value=""></td>
        <td><input type="text" name="amount2" id="input" value=""></td>
        <button type="submit" name="submit" id="input_button">Submit Activity</button>
      </form>
      </tr>
    </table>

    <!--Javascript saving PHP variables-->
    <?php
      include 'table_data.php';
    ?>
    <br>
  </div>
  <!-- jQuery and JS code loading -->
  <script src="js/jquery-3.3.1.min.js"></script>
  <script src="js/jquery_code.js"></script>
</body>
</html>
