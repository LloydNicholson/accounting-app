function drawLedger(num_rows, num_cols) {

  let table_start = "<table class='table'>";

  let row_head = "<tr class='row'>";
  let col_head = "<td class='col'>";

  let row_foot = "</tr>";
  let col_foot = "</td>";

  let table_end = "</table>";
  let table = row_head + (col_head + col_foot).repeat(num_cols) + row_foot;

  return table_start + table.repeat(num_rows) + table_end;
}
