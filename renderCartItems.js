window.addEventListener('DOMContentLoaded', async (event) => {
    console.log('DOM fully loaded and parsed, hello?');
 
    //this is fetching the order Id that is most recent 

    const fetchOrderId = async ()=>{
        const response = await fetch(` http://localhost:3000/order/mostRecent`)
        const data = await response.json()
        return data.mostRecentOrder[0].id
    } 


    //this is grabing the order information the display all order items in the cart  
    const data = async () => {
        const orderId = await fetchOrderId()
        // console.log("he;lo?")
        console.log(orderId)
        const response = await fetch(` http://localhost:3000/cart/cart/${orderId}`)
        const data = await response.json()
        return data.cartInfo 
    }

    // console.log(orderId)

    const orderSubTotal = document.getElementById('orderTotal')
    const table = document.getElementById('foodItems')
    // const cartButton = document.getElementById('cartB')

            let total = 0
            table.innerHTML = ""
            const tableItems = await data()

            // console.log("hejhjehbcr")
            console.log(tableItems)

            tableItems.forEach(orderitem => {
                total += orderitem.price * orderitem.quantity
            })

            tableItems.forEach(orderitem => {
                const tablerow = document.createElement('tr');
                tablerow.innerHTML = `<td>${orderitem.name}</td>
                <td>${orderitem.quantity}</td>
                <td>${orderitem.price}</td>`

                table.appendChild(tablerow)
            })

            orderSubTotal.innerHTML = total.toFixed(2);

});