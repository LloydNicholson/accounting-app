"use strict";
function drawLedger(num_rows, num_cols, information) {
    var table_start = "<table class='table'>";
    var table_head = "<th class='table_head'>" + information + "</th>";
    var row_head = "<tr class='table_row'>";
    var col_head = "<td class='table_col'>";
    var row_foot = "</tr>";
    var col_foot = "</td>";
    var table_end = "</table>";
    var table = row_head + (col_head + col_foot).repeat(num_cols) + row_foot;
    return table_start + table_head + table.repeat(num_rows) + table_end;
}
//# sourceMappingURL=T_account.js.map