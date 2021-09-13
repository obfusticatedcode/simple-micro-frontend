import faker from "faker";

const mount = (el) => {
  const cartText = `<div style="display:flex;align-items:center;justify-content:center;padding: 12px;color:blue;border:1px solid green;">You have ${faker.datatype.number()} items in your cart</div>`;
  el.innerHTML = cartText;
};
const element = document.querySelector("#dev-cart");
if (process.env.NODE_ENV === "development" && element) {
  mount(element);
}

export { mount };
