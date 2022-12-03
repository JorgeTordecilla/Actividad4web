let addCartBtns = document.querySelectorAll(".add-cart-btn");
let cartAmount = document.querySelector(".cart-amount");

let btnSearch = document.querySelector(".btn_search");

const addCart = () => {
  cartAmount.innerHTML = parseInt(cartAmount.innerHTML) + 1;
};

const search = () => {
  let inputField = document.querySelector("#search-field");
  if (inputField.value === "") {
    return alert("El campo no puede estar vacio");
  }
  return;
};

addCartBtns.forEach((addCartBtn) => {
  addCartBtn.addEventListener("click", addCart);
});

btnSearch.addEventListener("click", search);
