window.addEventListener('DOMContentLoaded', async (event) => {
    console.log('DOM fully loaded and parsed, hello?');
    document.body.style.cursor = "default";

    const fetchOrderId = async () => {
        const response = await fetch(` http://localhost:3000/order/mostRecent`)
        const data = await response.json()
        return data.mostRecentOrder[0].id
    }

    const data = async () => {
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

    const orderSubTotal = document.getElementById('orderTotal')
    const table = document.getElementById('foodItems')
    table.innerHTML = ""
    const tableItems = await data()

    tableItems.forEach((orderitem, index) => {
        let num = orderitem.quantity;

        const tablerow = document.createElement('tr');
        tablerow.setAttribute("class", `tr_style`);

        tablerow.innerHTML = `<td class="simbol">${orderitem.name}</td>
                <td class="priceTr"><span id="minus${index}"> - </span> <span class="num" id="quantity${index}">${num} </span> <span id="add${index}"> + </span></td>
                <td>${orderitem.price}</td>`

        table.appendChild(tablerow)
        const minus = document.getElementById(`minus${index}`)
        const plus = document.getElementById(`add${index}`)
        let quantity = document.getElementById(`quantity${index}`)


        plus.addEventListener("click", async () => {
            num = num + 1;
            quantity.innerHTML = num;
            const orderId = await fetchOrderId()
            await fetch(`http://localhost:3000/cart/cart/${orderId}/add`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    menuId: orderitem.id
                })
            })
            const total = await getTotal();
            orderSubTotal.innerHTML = total;
        })

        minus.addEventListener("click", async () => {
            const orderId = await fetchOrderId()
            num = num - 1;
            if (num !== 0) {
                quantity.innerHTML = num;
                console.log(orderId)
                await fetch(`http://localhost:3000/cart/cart/${orderId}/subtract`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        menuId: orderitem.id
                    })
                })
                const total = await getTotal();
                orderSubTotal.innerHTML = total;

            } else {
                table.removeChild(tablerow)
                await fetch(`http://localhost:3000/cart/cart/${orderId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        menuId: orderitem.id
                    })
                })
                const total = await getTotal();
                orderSubTotal.innerHTML = total;
            }
        })

    })

    const total = await getTotal();

    orderSubTotal.innerHTML = total;

});