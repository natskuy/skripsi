function calculatePrice() {
    let quantity = parseInt(document.getElementById("quantity").textContent);
    let packageTourPrice = parseInt(document.getElementById("packageTourPrice").value
    );
    let subTotal = packageTourPrice * quantity;

    const tourPrice = packageTourPrice;
    subTotal = tourPrice * quantity;
    const totalGrandTotal = subTotal;

    const btnAddQty = document.getElementById('add-quantity');
    const btnGrandTotal = document.getElementById('remove-quantity');

    // tampilan subtotal
    document.getElementById("subtotal").textContent =
        "Rp " + subTotal.toLocaleString("id");

    // update quantity
    document.getElementById("quantity").textContent = quantity;
    document.getElementById("quantity_input").value = quantity;
    document.getElementById("total_quantity").textContent = quantity;

    // Grand total = subtotal (karena tanpa asuransi & pajak)
    document.getElementById("grandtotal").textContent =
        "Rp " + subTotal.toLocaleString("id");
}  

function addQuantity() {
    let quantityElement = document.getElementById("quantity");
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    document.getElementById("quantity_input").value = quantity;
    calculatePrice();
}

function removeQuantity() {
    let quantityElement = document.getElementById("quantity");
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        // Prevents quantity from going below 1
        quantity--;
        quantityElement.textContent = quantity;
        document.getElementById("quantity_input").value = quantity;
        calculatePrice();
    }
}

    document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("add-quantity").addEventListener("click", addQuantity);
    document.getElementById("remove-quantity").addEventListener("click", removeQuantity);
    calculatePrice(); // Initial calculation
});