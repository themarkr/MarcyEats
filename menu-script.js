// dom content loaded
const getItemsInCart = async(orderID) => {
    const response = await fetch(`http://localhost:3000/cart/cart/${orderID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const cartJson = await response.json();
    return cartJson.cartInfo
}

const getMenuItemInfo = async(menuItemID) => {
    const response = await fetch(`http://localhost:3000/menu/menuItems/${menuItemID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const menuItemInfoJson = await response.json();
    return menuItemInfoJson.data[0];
}

const itemInCart = (cart, itemID) => {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == itemID) {
            return true
        }
    }
    return false;
}

window.addEventListener('DOMContentLoaded', async() => {


    const fetchOrderId = async() => {
        const response = await fetch(` http://localhost:3000/order/mostRecent`)
        const data = await response.json()
        return data.mostRecentOrder[0].id
    }

    // make this an aysnc func so that it can work.....
    // */

    const orderId = await fetchOrderId()
        // console.log("hek kc sd")
        // console.log(orderId,"hello?")


    const buttons = document.querySelectorAll('.add-to-cart-button')
    buttons.forEach(button => {
        button.addEventListener('click', async(event) => {
            const menuItemID = event.target.id
            const cart = await getItemsInCart(orderId);
            if (itemInCart(cart, menuItemID)) {
                await fetch(`http://localhost:3000/cart/cart/${orderId}/add`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        menuId: menuItemID
                    })

                })
            } else {
                await fetch(`http://localhost:3000/cart/cart/${orderId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        menuId: menuItemID
                    })
                })
            }
        })
    })
})