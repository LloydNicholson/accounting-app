function drawLedger(num_rows, num_cols, information) {
  let table_start = "<table class='table'>";
  let table_head = "<th class='table_head'>" + information + "</th>";
  let row_head = "<tr class='table_row'>";
  let col_head = "<td class='table_col'>";

  let row_foot = "</tr>";
  let col_foot = "</td>";

  let table_end = "</table>";
  let table = row_head + (col_head + col_foot).repeat(num_cols) + row_foot;

  return table_start + table_head + table.repeat(num_rows) + table_end;
}
