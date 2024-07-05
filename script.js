document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('itemForm');
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');

    itemForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const itemName = itemInput.value.trim();
        if (itemName !== '') {
            addItem(itemName);
            itemInput.value = '';
        }
    });

    itemList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed');
        }
    });

    function addItem(name) {
        const li = document.createElement('li');
        li.textContent = name;
        itemList.appendChild(li);
    }
});
