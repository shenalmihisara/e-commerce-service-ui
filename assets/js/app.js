let category = new URLSearchParams(window.location.search)
    .get("category");

function loadProducts(category) {
    fetch(`http://localhost:8080/product/category/${category}`)
        .then(res => res.json())
        .then(data => {
            genarateProductCards(data);
        })
}

function genarateProductCards(data) {
    let productGrid = document.getElementById("product-container");

    let productGridContent = "";

    data.forEach(element => {
        productGridContent += `<div class="card mb-3" style="width: 60rem; height: 15rem; padding: 0;">
                                    <div class="row g-0 h-100 align-items-center">
                                        <div class="col-md-4 h-100">
                                            <img 
                                                style="width: 100%; height: 100%; object-fit: cover;"
                                                src="${element.imgUrl}"
                                                class="img-fluid rounded-start"
                                                alt="${element.name}"
                                            >
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body" style="padding-left: 3rem;">
                                                <h6 class="card-title">
                                                    ${element.name} <br>
                                                    ${element.productCondition} . ${element.brand}
                                                </h6>
                                                <h3 class="card-title">
                                                    RS. ${element.price}
                                                </h3>
                                                <p>
                                                    Or Best Offer <br>
                                                    Free international shipping
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>`
    })

    productGrid.innerHTML = productGridContent

}

loadProducts(category);