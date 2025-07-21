function calculatePrice() {
    let quantityElement = document.getElementById("quantity");
    let priceElement = document.getElementById("packageTourPrice");
    let subtotalElement = document.getElementById("subtotal");
    let grandTotalElement = document.getElementById("grandtotal");
    let totalQtyElement = document.getElementById("total_quantity");

    if (
        !quantityElement ||
        !priceElement ||
        !subtotalElement ||
        !grandTotalElement
    ) {
        console.warn("Satu atau lebih elemen tidak ditemukan!");
        return;
    }

    let quantity = parseInt(quantityElement.textContent);
    let packageTourPrice = parseInt(priceElement.value);
    let subTotal = packageTourPrice * quantity;
    let totalGrandTotal = subTotal;

    quantityElement.textContent = quantity;
    subtotalElement.textContent = "Rp " + subTotal.toLocaleString("id");
    grandTotalElement.textContent =
        "Rp " + totalGrandTotal.toLocaleString("id");

    if (totalQtyElement) {
        totalQtyElement.textContent = quantity;
    }
}

function addQuantity() {
    let quantityElement = document.getElementById("quantity");
    let quantityInput = document.getElementById("quantity_input");
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityInput.value = quantity; // Update hidden input
    quantityElement.textContent = quantity;
    calculatePrice();
}

function removeQuantity() {
    let quantityInput = document.getElementById("quantity_input");
    let quantityElement = document.getElementById("quantity");
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        // Prevents quantity from going below 1
        quantity--;
        quantityInput.value = quantity; // Update hidden input
        quantityElement.textContent = quantity;
        calculatePrice();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("add-quantity")
        .addEventListener("click", addQuantity);
    document
        .getElementById("remove-quantity")
        .addEventListener("click", removeQuantity);
    calculatePrice(); // Initial calculation
});
