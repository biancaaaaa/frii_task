const TRIPRICE = 99;

$(document).ready(function($) {
    let quantityInput = $("#quantity");
    quantityInput.val(1);
    refreshPrice();

    quantityInput.on("keyup", function() {
       refreshPrice();
    });
});

function refreshPrice() {
    let price = $("#price");
    price.empty();
    let quantity = Number($("#quantity").val());
    price.append(quantity*TRIPRICE);
}