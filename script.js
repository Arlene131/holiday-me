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
            addItem(itemId, itemName, false); // Panggil fungsi addItem() untuk menambahkan item ke dalam items
            itemInput.value = '';
            addItemToDOM(itemId, itemName, false); // Tambahkan item ke dalam DOM setelah ditambahkan ke dalam items
        }
    });

    function addItem(id, name, completed) {
        items.push({ id, name, completed });
        localStorage.setItem('items', JSON.stringify(items));
    }

    function addItemToDOM(id, name, completed) {
        const item = document.createElement('li');
        item.textContent = name;

        // Checkbox button
        const checkButton = document.createElement('button');
        checkButton.classList.add('check-button');
        if (completed) {
            item.classList.add('completed');
            checkButton.classList.add('checked');
        }
        checkButton.addEventListener('click', () => {
            item.classList.toggle('completed');
            checkButton.classList.toggle('checked');

            // Update completed status in items array and localStorage
            const index = items.findIndex(item => item.id === id);
            if (index !== -1) {
                items[index].completed = !items[index].completed;
                localStorage.setItem('items', JSON.stringify(items));
            }
        });

        item.appendChild(checkButton);
        itemList.appendChild(item);
    }
});
