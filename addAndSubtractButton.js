
const subtractFromCart = async (menuId, orderId)=>{
    await fetch(`http://localhost:3000/cart/cart/${orderId}/add`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            menuId: menuId
        })
    })
}

const addToCart = async (menuId, orderId) => {
    await fetch(`http://localhost:3000/cart/cart/${orderId}/subtract`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            menuId: menuId
        })
    })
}


module.exports = {
    subtractFromCart,
    addToCart
}; 
