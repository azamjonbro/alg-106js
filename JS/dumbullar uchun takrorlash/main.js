{
  /* <div class="product">
                <div class="product-img">
                    <img src="https://picsum.photos/id/100/400/400" loading="lazy" alt="this is a product image">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="product-body">
                    <h3 class="product-title">Product Name</h3>
                    <div class="product-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus asperiores alias dicta necessitatibus, repellendus itaque ipsum exercitationem totam soluta hic eligendi eius quo distinctio doloremque facere consectetur delectus molestias velit. <i class="fa-solid fa-chevron-down" style="cursor: pointer;"></i>
                    </div>
                    <div class="pricebox">
                        <del>$129.99</del>
                        <b>$99.99 <sup style=" background: yellow; padding: 2px; border-radius: 5px; color: red;">13.4%</sup></b>
                    </div>
                    <button class="btn btn-primary">Add to Cart</button>
                    <button class="btn btn-secondary">Buy one click</button>
                </div>
            </div>
             */
}

const productBox = document.querySelector(".productbox");

function showLoader() {
  productBox.innerHTML = `<div class="loader"></div>`;
}

function renderProducts(products) {
  productBox.innerHTML = "";
  products.length == 0
    ? productBox.innerHTML`<p style="color:red; text-align:center;">No products available.</p>`
    : products.forEach((item) => {
        let product = document.createElement("div");
        product.classList.add("product");
        product.innerHTML += `
        <div class="product-img">
                    <img src="https://picsum.photos/id/100/400/400" loading="lazy" alt="this is a product image">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="product-body">
                    <h3 class="product-title">Product Name</h3>
                    <div class="product-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus asperiores alias dicta necessitatibus, repellendus itaque ipsum exercitationem totam soluta hic eligendi eius quo distinctio doloremque facere consectetur delectus molestias velit. <i class="fa-solid fa-chevron-down" style="cursor: pointer;"></i>
                    </div>
                    <div class="pricebox">
                        <del>$129.99</del>
                        <b>$99.99 <sup style=" background: yellow; padding: 2px; border-radius: 5px; color: red;">13.4%</sup></b>
                    </div>
                    <button class="btn btn-primary">Add to Cart</button>
                    <button class="btn btn-secondary">Buy one click</button>
                </div>
    `;
        productBox.appendChild(product);
      });
}

async function loadProducts() {
  showLoader();

  try {
    const res = await fetch("https://fakestoreapi.com/producst");
    const data = await res.json();
    renderProducts(data);
  } catch (error) {
    productBox.innerHTML = `
      <p style="color:red; text-align:center;">
        Dumbul codelaringda hato bor yoki manzilni tekshirib ko'r!
      </p>
    `;
    console.error(error);
  }
}

loadProducts();
