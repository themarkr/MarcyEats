const button = document.getElementById('checkOutButton');
const address = document.getElementById('delivery-addy');
const eta = document.getElementById('eta');

let habaneroLong = -74.143759
let habaneroLat = 40.855492

const formatAddy = (address) => {
    const splitAddress = address.split(' ')
    const joinedAddress = splitAddress.join('+');
    return joinedAddress
}

const geoEncoder = async(formattedAddress) => {
    const res = await fetch(`https://api.distancematrix.ai/maps/api/geocode/json?address=${formattedAddress}
    &key=JXZECMtfm9O0eLHmtaflAmhmPJ7xM`)
    const data = await res.json();
    console.log(data)
    return data.result[0].geometry.location
}

const getDeliveryTime = async(lat, long) => {
    const url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${habaneroLat},${habaneroLong}&destinations=${lat},${long}&key=JXZECMtfm9O0eLHmtaflAmhmPJ7xM`
    const res = await fetch(url)
    const data = await res.json();
    console.log(data)
    return data.rows[0].elements[0].duration.text;
}

const deliveryEstimate = (time) => {
    let splitTime = time.split(' ');
    let adjustedTime = parseInt(splitTime[0], 10) + 20;
    splitTime[0] = adjustedTime;
    const deliveryTime = splitTime.join(' ');
    return deliveryTime;
}



button.addEventListener('click', async() => {
    let formattedAddy = formatAddy(address.value)
    const userCoordinates = await geoEncoder(formattedAddy);
    let userLat = userCoordinates.lat;
    let userLong = userCoordinates.lng;

    const deliveryTime = await getDeliveryTime(userLat, userLong);
    const etaTime = deliveryEstimate(deliveryTime);
    eta.innerText = `Estimated time till delivery ${etaTime}`;
})