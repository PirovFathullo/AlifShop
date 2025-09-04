import {
  productsFon,
  productsNoteBook,
  productsTelevision,
} from "../data/products.js";

let productsFonHTML = "";
let productsNoteBookHTML = "";
let productsTelevisionHTML = "";

productsFon.forEach((productFon) => {
  productsFonHTML += `
    <div class="inside-products-date">
                <a href="google.com" target="_blank">
                    <div class="product-image-container">
                      <img
                        class="product-image"
                        src="${productFon.image}"
                        alt="Fon"
                      />
                    </div>
                    <div class="product-price">${productFon.price.toLocaleString(
                      "ru-RU"
                    )} c.</div>
                    <div class="product-percent-month">75 с. x 24 мес</div>
                    <div class="product-name">
                      ${productFon.name}
                    </div>
                    <div class="product-rating-container">
                      <img
                        class="product-rating-stars"
                        src="images/ratings/rating-${
                          productFon.rating.stars * 10
                        }.png"
                        alt="stars"
                      />
                      <p class="product-rating-count">${productFon.count}</p>
                    </div>
                    <div class="product-button-container">
                      <div class="product-added-to-cart">
                        <img class="product-added-to-cart-basket" src="images/icons/basket.svg" alt="basket" />
                        <button class="added-to-cart-button">В корзину</button>
                      </div>
                    </div>
                </a>
              </div>
  `;

  document.querySelector(".js-inside-products-container-fon").innerHTML =
    productsFonHTML;
});

productsNoteBook.forEach((productNoteBook) => {
  productsNoteBookHTML += `
    <div class="inside-products-date">
                <a href="google.com" target="_blank">
                <div class="product-image-container">
                  <img
                    class="product-image"
                    src="${productNoteBook.image}"
                    alt="Note Book"
                  />
                </div>
                <div class="product-price">${productNoteBook.price.toLocaleString(
                  "ru-RU"
                )} с. </div>
                <div class="product-percent-month">2 421 с. x 6 мес</div>
                <div class="product-name">
                  ${productNoteBook.name}
                </div>
                <div class="product-rating-container">
                  <img
                    class="product-rating-stars"
                    src="images/ratings/rating-${
                      productNoteBook.rating.stars * 10
                    }.png"
                    alt="stars"
                  />
                  <p class="product-rating-count">${
                    productNoteBook.rating.count
                  }</p>
                </div>
                <div class="product-button-container">
                  <div class="product-added-to-cart">
                    <img class="product-added-to-cart-basket" src="images/icons/basket.svg" alt="basket" />
                    <button class="added-to-cart-button">В корзину</button>
                  </div>
                </div>
                </a>
              </div>
  `;

  document.querySelector(".js-inside-products-container-note-book").innerHTML =
    productsNoteBookHTML;
});

productsTelevision.forEach((productTelevision) => {
  productsTelevisionHTML += `
    <div class="inside-products-date">
                <a href="google.com" target="_blank">
                <div class="product-image-container">
                  <img
                    class="product-image"
                    src="${productTelevision.image}"
                    alt="Television"
                  />
                </div>
                <div class="product-price">${productTelevision.price.toLocaleString(
                  "ru-RU"
                )} с.</div>
                <div class="product-percent-month">688 с. x 18 мес</div>
                <div class="product-name">
                  ${productTelevision.name}
                </div>
                <div class="product-rating-container">
                  <img
                    class="product-rating-stars"
                    src="images/ratings/rating-${
                      productTelevision.rating.stars * 10
                    }.png"
                    alt="stars"
                  />
                  <p class="product-rating-count">${
                    productTelevision.rating.count
                  }</p>
                </div>
                <div class="product-button-container">
                  <div class="product-added-to-cart">
                    <img class="product-added-to-cart-basket" src="images/icons/basket.svg" alt="basket" />
                    <button class="added-to-cart-button">В корзину</button>
                  </div>
                </div>
                </a>
              </div>
  `;

  document.querySelector(".js-inside-products-container-television").innerHTML =
    productsTelevisionHTML;
});
