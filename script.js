document.getElementById('askButton').addEventListener('click', () => {
    const weather = document.getElementById('weather').value.toLowerCase();
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';

    const items = {
        fall: ['sweater', 'cardigan', 'jacket', 'long pant', 'gloves', 'boots', 'umbrella', 'raincoat', 'lipbalm', 'moisturizer'],
        winter: ['sweater', 'boots', 'thermal underwear', 'socks', 'beanie', 'raincoat', 'umbrella', 'lipbalm', 'moisturizer', 'handcream', 'sunscreen'],
        summer: ['shirt', 'pants', 'swimsuit', 'cap', 'glasses', 'sunglasses', 'uv protection', 'lipbalm', 'aloevera gel', 'insect repellent'],
        rainy: ['sweater', 'cardigan', 'jacket', 'long pant', 'gloves', 'boots', 'umbrella', 'raincoat', 'lipbalm', 'moisturizer']
    };

    const selectedItems = items[weather] || [];

    selectedItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                listItem.classList.add('checked');
            } else {
                listItem.classList.remove('checked');
            }
        });

        listItem.appendChild(checkbox);
        itemList.appendChild(listItem);
    });
});
