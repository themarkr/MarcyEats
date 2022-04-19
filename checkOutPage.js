window.addEventListener('DOMContentLoaded', async() => {
    const customerId = 1 // this is gonna stay like this because we are only working with guest checkout. That shall always be customer number 1....

    const button = document.getElementById('checkOutButton')
    const orderConfirmationPage = document.getElementById('order-confirmation-page');
    const orderPlacedPage = document.getElementById('success-page');
    orderConfirmationPage.classList.add('container')
    orderConfirmationPage.classList.remove('d-none');
    orderPlacedPage.classList.add('d-none')
    const fetchOrderId = async() => {
        const response = await fetch(`http://localhost:3000/order/mostRecent`)
        const data = await response.json()
        return data.mostRecentOrder[0].id
    }

    const data = async() => {
        const orderId = await fetchOrderId()
        const response = await fetch(` http://localhost:3000/cart/cart/${orderId}`)
        const data = await response.json()
        return data.cartInfo
    }

    const getTotal = async() => {
            const tableItems = await data()
            let total = 0
            tableItems.forEach(orderitem => {
                total += orderitem.price * orderitem.quantity
            })
            total = total.toFixed(2);
            return total
        }
        //

    const total = await getTotal()
    const orderId = await fetchOrderId()
    const tableBody = document.getElementById('foodItems')
    const orderTotal = document.getElementById('orderTotal')

    button.addEventListener('click', async(event) => {
        orderConfirmationPage.classList.add('d-none')
        orderPlacedPage.classList.remove('d-none');
        orderPlacedPage.style.display = "initial";
        await fetch(`http://localhost:3000/order/${customerId}/checkout`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                orderId: orderId,
                total: total
            })
        })

        await fetch(`http://localhost:3000/order/guest`, {
            method: 'POST'
        })

        tableBody.innerHTML = "";
        orderTotal.innerHTML = `$0.00`;
    })
})