window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed, hello?');
 
    const fetchOrderId = async()=>{
        const response = await fetch(` http://localhost:3000/order/mostRecent`)
        const data = await response.json()
        return data.mostRecentOrder[0].id
    } 

    const data = async () => {
        const id = await fetchOrderId()
        const response = await fetch(` http://localhost:3000/cart/cart/${id}`)
        const data = await response.json()
        return data.cartInfo 
    }

    const orderSubTotal = document.getElementById('orderTotal')
    const table = document.getElementById('foodItems')
    const cartButton = document.getElementById('cartB')

    cartButton.addEventListener("click", async (event)=> {
            let total = 0
            table.innerHTML = ""
            const tableItems = await data()

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

            orderSubTotal.innerHTML = total;

    })

});