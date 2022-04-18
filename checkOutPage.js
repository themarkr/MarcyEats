window.addEventListener('load', async () => {
    const customerId = 1 // this is gonna stay like this because we are only working with guest checkout. That shall always be customer number 1....
    
    


    const button = document.getElementById('checkOutButton')

    const total = document.getElementById('orderTotal').innerText

    console.log(total)


    // this will fetch the most recent order id // 
    const fetchOrderId = async()=>{
        const response = await fetch(` http://localhost:3000/order/mostRecent`)
        const data = await response.json()
        return data.mostRecentOrder[0].id
    }



    // const customerId = req.params.id;
    // const orderId = req.body.orderId; 
    // const orderTotal = req.body.total;

    const orderId = await fetchOrderId(); /// this is obtating the order id. 


    // button.addEventListener('click', async (event)=>{
    //     event.preventDefault()
    //     await fetch(`http://localhost:3000/order/${customerId}/checkout`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             orderId: orderId,

    //         })
    //     })
        
    // })

    // console.log(dataId)
    // console.log('hello?')
    /// i need to add an event listener to the submit button to mark curr order as compleate and then create  new order


    // const table = document.getElementById('foodItems')
})