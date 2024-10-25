const products = [
  { name: "Chicken Burger", price: 10.0, count: 0 },
  { name: "Chicken Wings", price: 9.0, count: 0 },
  { name: "French Fries", price: 12.0, count: 0 },
  { name: "Fried Chicken", price: 8.0, count: 0 },
  { name: "Beer", price: 2.2, count: 0 },
  { name: "Milkshake", price: 1.8, count: 0 },
];

/*Functions */
function calculateTotal() {
  /*   Variables   */
  const spanTotal = document.querySelector("#total");
  let total = 0;

  /*   Actions   */
  products.forEach((item) => {
    total += item.price * item.count;
  });
  /*  Updating  */
  spanTotal.textContent = total.toFixed(2);
}

function calculateTax() {
  const spanTax = document.querySelector("#tax");
  let totalTax = 0;

  products.forEach((item) => {
    totalTax += item.price * item.count * 0.21;
  });
  spanTax.textContent = totalTax.toFixed(2);
}

// function calculateFinal() {
//     const spanFinal = document.querySelector('#final');
//     let totalFinal = 0;

//     products.forEach( item => {
//         totalFinal += item.price * item.count * 0.21;
//     })
//     spanFinal.textContent = totalFinal;
// }

function minus(span, name) {
  span.parentNode.querySelector("input[type=number]").stepDown();
  const productMatch = products.find((product) => product.name === name);
  console.log({ productMatch, name });
  productMatch.count--;
  calculateTotal();
  calculateTax();
}

function plus(span, name) {
  span.parentNode.querySelector("input[type=number]").stepUp();
  /* hacemos una busqueda de los productos para encontrar el producto que coincida con el nombre */
  const productMatch = products.find((product) => product.name === name);
  // console.log({productMatch, name});
  productMatch.count++;
  calculateTotal();
  calculateTax();
}

calculateTotal();
calculateTax();

//Rotate icon when click a div
const cardHeader = document.getElementById("cardHeader");
const icon = cardHeader.querySelector(".fa-chevron-up");

cardHeader.addEventListener("click", () => {
  icon.classList.toggle("rotated");
});
