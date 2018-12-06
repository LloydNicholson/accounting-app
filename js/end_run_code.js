// Test using javascript info
document.cookie = "username=John Doe";
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
document.cookie =
  "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

var username = document.cookie;

console.log("username", username);
console.log("returned_month", returned_month);
console.log("returned_day", returned_day);
console.log("returned_details", returned_details);
console.log("returned_folio", returned_folio);
console.log("returned_amount", returned_amount);
