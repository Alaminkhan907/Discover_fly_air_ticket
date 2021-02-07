function ticketNumberControl(product, isIncrease) {
    const productInput = document.getElementById(product + "-input");
    const productCount = parseInt(productInput.value); //DOM take value from "form"
    let productNewCount = productCount;
    if (isIncrease == true) {
      productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
      productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    //const productTotal = productNewCount * 59;
    let productTotal = 0;
    if (product == "business") {
      productTotal = productNewCount * 150;
    }
    if (product == "economy") {
      productTotal = productNewCount * 100;
    }

    document.getElementById("sub-total").innerText =
      "$" + productTotal;
    calculateTotal();
  }
  // Calculate total
  function calculateTotal() {
    const phoneCount = getInputValue("business");
    const caseCount = getInputValue("economy");

    const totalPrice = phoneCount * 150 + caseCount * 100;
    document.getElementById("sub-total").innerText = "$" + totalPrice;
    const tax = Math.round(totalPrice * 0.1);
    document.getElementById("vat").innerText = "$" + tax;
    const grandTotal = totalPrice + tax;
    document.getElementById("grand-total").innerText = "$" + grandTotal;
  }
  function getInputValue(product) {
    const productInput = document.getElementById(product + "-input");
    const productCount = parseInt(productInput.value);
    return productCount;
  }