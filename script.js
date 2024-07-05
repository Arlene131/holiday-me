document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('itemForm');
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');

    // Load items from localStorage
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.forEach(item => addItemToDOM(item.id, item.name, item.completed));

    itemForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const itemName = itemInput.value.trim();
        if (itemName !== '') {
            const itemId = Date.now().toString();
            addItem(itemId, itemName, false);
            itemInput.value = '';
        }
    });
