// dom content loaded
window.addEventListener('DOMContentLoaded', (event) => {
        const orderID = 1;
        // fetch('http://localhost:3000/customer/:id')
        const buttons = document.querySelectorAll('.add-to-cart-button')
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                const menuItemID = event.target.id
                fetch(`http://localhost:3000/cart/cart/${orderID}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: {
                            menuId: menuItemID
                        }
                    }).then(response => response.json())
                    .then(data => console.log(data))
            })
            console.log('listenerAdded')
        })

    })
    // function that queries the database using user id 1 to find the most recent order id that is not complete 
    // other case is all orders are complete, then we would have to create a new order for that customer (focus on guest = userId 1)
    // add to cart button click
    // with that order id every time an add to cart button is clicked, use that id for the route to add it to the order-items table 


// cart button click
// when the cart button is clicked, again use that order id to query into the database with that specific orderId to get all items the order
// display all items in that order, in the cart