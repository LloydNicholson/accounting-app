<!DOCTYPE html>
<html lang="en">
<head>
  <title>Accounting Practice App</title>
  <meta charset="utf-8">
  <!-- Stylesheet reference-->
  <link rel="stylesheet" href="acc_app.css">
  <!--Javascript reference-->
  <script src="site.js"></script>
  <!--Fonts-->
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Goudy+Bookletter+1911" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
</head>
<body>

  <div class="header">
    <h1>KID CONNECT</h1>
    <img class="header_image" src="/Images/Small_Business_and_Accounting-LG.jpg" alt="Header image">
    <h2>Accounting Practice Exercises</h2>
    <h2>Practice your Accounting with various examples that have been randomly generated. This page will give you opportunities to complete Source Documents, Journals, Ledgers and Financial statements</h2>
    <h3>Refresh your page to generate a new set of examples.</h3>
  </div>

  <div class="upload_area">
    <!--Form retrieving-->
    <form action="upload.php" method="post" enctype="multipart/form-data">
    <p>Download and fill in the sheet by hand or on your computer and send it back when completed. Remember to add your name inside the excel spreedsheet.</p>
    <label for="file">Choose file to upload</label>
    <div><input class="input" type="file" name="file"></div>
    <div><button type="submit" name="submit">Upload</button></div>
    </form>
  </div>

  <div class="transactionList">
    <!--Transaction list creation area-->
    <!--Heading-->
    <h2><script type="text/javascript">
        createHeading("Rusty's Traders", "General Ledger");
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
          createIncome(1, 4000, 13),
          createExpense(1, 700, 15),
          createIncome(1, 4000, 20),
          createAsset(1, 8000, 24),
          createIncome(1, 900, 26)
      );
      </script>
    </p>

    <!--Form giving-->
    <div class="download_area">
      <button><a href="Documents/GENERAL LEDGER TEMPLATE.xlsx" download>To download General Ledger Template, click here!</a></button>
    </div>

  </div>
</body>
</html>
