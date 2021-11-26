var leftColumn;
var rightColumn;
// Contrary to intuition this needs to be true when the app is started.
var inventoryVisible = true;

function toggleInventory() {
    console.log('toggle all the things!');
    if (inventoryVisible) {
        leftColumn.classList.add("d-none");
        rightColumn.classList.remove("d-none")
    } else {
        leftColumn.classList.remove("d-none");
        rightColumn.classList.add("d-none")
    }
    inventoryVisible = !inventoryVisible;
}

function addToggleInventoryButtonEvent() {
    const button = document.getElementById('inventory-toggle-button');
    button.onclick = () => {
        toggleInventory();
    };
}

function initJavascript() {
    console.log('Initializing javascript.');
    console.log('You can safely ignore any error messages for missing js/css files. To make the web app run on github.io and locally all js/css files are added twice (with different paths).');
    leftColumn = document.getElementById('left-column');
    rightColumn = document.getElementById('right-column');
    addToggleInventoryButtonEvent();
}

function onResize() {
    if(window.innerWidth >= 768) {
        leftColumn.classList.remove("d-none");
        rightColumn.classList.remove("d-none");
        inventoryVisible = true;
    }
}