function checkWeather() {
    const weather = document.getElementById('weatherInput').value.toLowerCase();
    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = '';

    let items = [];

    switch (weather) {
        case 'fall':
        case 'rainy':
            items = ['Sweater', 'Cardigan', 'Jacket', 'Long Pant', 'Gloves', 'Boots', 'Umbrella', 'Raincoat', 'Lipbalm', 'Moisturizer'];
            break;
        case 'winter':
            items = ['Sweater', 'Boots', 'Thermal Underwear', 'Socks', 'Beanie', 'Raincoat', 'Umbrella', 'Lipbalm', 'Moisturizer', 'Handcream', 'Sunscreen'];
            break;
        case 'summer':
            items = ['Shirt', 'Pants', 'Swimsuit', 'Cap', 'Glasses', 'Sunglasses', 'UV Protection', 'Lipbalm', 'Aloe Vera Gel', 'Insect Repellent'];
            break;
        default:
            items = [];
            break;
    }

    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = <input type="checkbox" onclick="toggleComplete(this)"> ${item};
        itemsList.appendChild(listItem);
    });
}

function toggleComplete(checkbox) {
    const listItem = checkbox.parentElement;
    if (checkbox.checked) {
        listItem.classList.add('completed');
    } else {
        listItem.classList.remove('completed');
    }
}

