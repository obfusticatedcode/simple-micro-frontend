import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let index = 0; index < 5; index++) {
    const name = faker.commerce.productName();

    products += `<div style="display:flex;align-items:center;padding: 8px;">${name}</div>`;
  }

  el.innerHTML = products;
};

const element = document.querySelector("#dev-products");

if (process.env.NODE_ENV === "development" && element) {
  mount(element);
}

export { mount };
