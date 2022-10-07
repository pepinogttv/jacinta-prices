products = products.reduce(
  (acc, curr) => ({
    ...acc,
    [curr.nombre]: curr,
  }),
  {}
);
products = Object.values(products);

function getPrice({ precio }) {
  const splt = precio.split(".");
  const int = splt[0].replace(",", "");
  const r = `${int}.${splt[1]}`;
  return Number(r);
}
function f(number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(number);
}

const productsHtml = products.reduce((acc, curr) => {
  const price = getPrice(curr);

  acc += `<tr>
    <td>${curr.nombre}</td>
    <td>${f(price * 2.1)}</td>
    <td>${f(price * 2.1 * 1.15)}</td>

  </tr>
  <tr>`;
  return acc;
}, "");

tbody.innerHTML = productsHtml;

console.log(products.length);

myInput.onkeyup = function () {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};
