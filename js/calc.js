//constant for the price of the box
const TRIPRICE = 99;

$(document).ready(function($) {
    let quantityInput = $("#quantity");
    //sets value to 1 when window is loaded
    quantityInput.val(1);
    refreshPrice();

    //refreshes the price on keyup
    quantityInput.on("keyup", function() {
       refreshPrice();
    });

    //refreshes the price on click (when using the counter on number input)
    quantityInput.on("click", function() {
        refreshPrice();
    });
});

//reads the value of the input field and sets the current price
function refreshPrice() {
    let price = $("#price");
    price.empty();
    let quantity = Number($("#quantity").val());
    price.append(quantity*TRIPRICE);
}