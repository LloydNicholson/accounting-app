<!DOCTYPE html>
<html lang="en">
<head>
  <title>Accounting Practice App</title>
  <meta charset="utf-8">

  <!-- Stylesheet reference-->
  <link rel="stylesheet" href="acc_app.css">

  <!--Javascript reference-->
  <script src="site_content.js"></script>
  <script src="T_account.js"></script>

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
    <p>Download and fill in the sheet by hand or on your computer and send it back when completed. Remember to add your name inside the excel spreedsheet.</p>
    <label for="file">Choose a file to upload: </label>
    <input type="file" name="file">
    <button type="submit" name="submit">Upload</button>
    </form>
  </div>

  <!--Transaction list creation area-->
  <div class="transactionList">

    <!--Heading-->
    <h2><script type="text/javascript">
        createHeading("General Ledger");
      </script></h2>

    <!--Transaction list-->
    <p>
      <script type="text/javascript">
      document.write(
          createCapital(1, 100000, 1),
          createIncome(1, 4000, 2),
          createExpense(1, 1000, 4),
          createAsset(1, 5000, 7),
          createLiability(1, 20000, 9),
          createDrawings(1, 28000, 11),
          createIncome(1, 4000, 12),
          createExpense(1, 700, 14),
          createIncome(1, 4000, 20),
          createAsset(1, 8000, 22),
          createIncome(1, 900, 25)
      );
      </script>
    </p>

    <!--Form giving-->
    <div class="download_area">
      <button><a href="Documents/GENERAL LEDGER TEMPLATE.xlsx" download>To download General Ledger Template, click here!</a></button>
    </div>
  </div>

  <!--Answer form area-->
  <div class="answer_section">
    <h3>General Ledger Format</h3>
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
        <td class="debit" id="month"><form action="fetch_values.php" method="post" enctype="multipart/form-data"><input type="text" name="month" id="month"></form></td>
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

        <td class="credit" id="month"><form action="fetch_values.php" method="post" enctype="multipart/form-data"><input type="text" name="month" id="month"></form></td>
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
</body>
</html>
