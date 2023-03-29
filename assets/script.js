//update quantity
function updateQuantity(displayQuantity) {
    let quantity = document.querySelector(".total-quantity")
    quantity.innerHTML = displayQuantity
}

//start quantity at 1. The quantity cannot drop below 0.
let quantity = 1;

//Buttons
const quantityDown = document.querySelector("#quantity-down")
const quantityUp = document.querySelector("#quantity-up")

//add event listeners increase by 1. The + and - buttons are clickable for the product in the cart.
quantityUp.addEventListener('click', function(){
    quantity++
    updateQuantity(`Quantity: ${quantity}`)
})

//add event listeners decrease by 1
quantityDown.addEventListener('click', function(){
    if(quantity > 0){
        quantity--
    }
    updateQuantity(`Quantity: ${quantity}`)
})

//Add functionality to the remove button to remove the item entirely.

//Add a second item to the shopping cart through the HTML/CSS. Write functionality to control the second item.

//Have the item display the total (price * quantity).