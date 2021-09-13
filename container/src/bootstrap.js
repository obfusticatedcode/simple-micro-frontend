import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

// webpack import module called products it also checks the key from the module federation plugin
productsMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));
