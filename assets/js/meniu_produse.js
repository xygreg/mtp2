document.addEventListener("DOMContentLoaded", function () {
  const sortUpBtn = document.getElementById("sort-up-btn");
  const sortDownBtn = document.getElementById("sort-down-btn");
  const produseTabel = document.getElementById("produse-tabel");

  function sortTable(order) {
    let rows = produseTabel.rows,
      rlen = rows.length,
      arr = [],
      i,
      j,
      cells,
      clen;

    for (i = 0; i < rlen; i++) {
      cells = rows[i].cells;
      clen = cells.length;
      arr[i] = [];

      for (j = 0; j < clen; j++) {
        arr[i][j] = cells[j].innerHTML;
      }
    }

    arr.sort(function (a, b) {
      let numA = parseFloat(a[3]);
      let numB = parseFloat(b[3]);

      if (order === "asc") {
        return numA - numB;
      } else {
        return numB - numA;
      }
    });

    for (i = 0; i < rlen; i++) {
      arr[i] = "<td>" + arr[i].join("</td><td>") + "</td>";
    }

    produseTabel.innerHTML = "<tr>" + arr.join("</tr><tr>") + "</tr>";
  }

  sortUpBtn.addEventListener("click", function () {
    sortTable("asc");
  });

  sortDownBtn.addEventListener("click", function () {
    sortTable("desc");
  });
});
