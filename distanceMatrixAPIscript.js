const button = document.getElementById('checkOutButton')

button.addEventListener('click', async() => {
    var config = {
        method: 'get',
        url: 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=Washington%2C%20DC&destinations=New%20York%20City%2C%20NY&units=imperial&key=AIzaSyDQAeJr9VVEVkL0EwZtwczj-RkVwQXxA4k',
        headers: {}
    };

    const res = await fetch(config.url)
    const data = await res.json();
    console.log(data);
})