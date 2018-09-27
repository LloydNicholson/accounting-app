<?php
if (isset($_POST['submit'])) {
  $file = $_FILES['file'];

  $fileName = $_FILES['file']['name'];
  $fileTmpName = $_FILES['file']['tmp_name'];
  $fileSize = $_FILES['file']['size'];
  $fileError = $_FILES['file']['error'];
  $fileType = $_FILES['file']['error'];

  $fileExt = explode('.', $fileName);
  $fileActualExt = mb_strtolower(end($fileExt));

  $allowed = array('doc', 'docx', 'pdf', 'xlsx', 'xls');

  if (in_array($fileActualExt, $allowed)) {
    if ($fileError === 0) {
      if ($fileSize < 500000) {
        $fileNameNew = uniqid('', true).".".$fileActualExt;
        $fileDestination = 'Uploads/'.$fileNameNew;
        move_uploaded_file($fileTmpName, $fileDestination);
        echo "Upload successful";
        echo "<script>setTimeout(\"location.href = 'index.html';\",1000);</script>";
      } else {
        echo "Your file is too large!";
      }
    } else {
      echo "There was an error uploading your file!";
    }
  } else {
    echo "You cannot upload files of this type!";
  }
}
?>
