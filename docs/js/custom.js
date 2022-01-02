var leftColumn;
var rightColumn;
// Contrary to intuition this needs to be true when the app is started.
var inventoryVisible = true;

function toggleInventory() {
    if (inventoryVisible) {
        leftColumn.classList.add("d-none");
        rightColumn.classList.remove("d-none")
    } else {
        leftColumn.classList.remove("d-none");
        rightColumn.classList.add("d-none")
    }
    inventoryVisible = !inventoryVisible;
    
    checkScrollToTopVisibility();
}

function checkScrollToTopVisibility()
{
    const b = document.getElementById('scroll-to-top-toggle-button');
    
    if(inventoryVisible === false) {
        b.classList.add("d-none");
        b.classList.remove("d-flex");
    }
    
    if (leftColumn.scrollTop > 300) {
        b.classList.add("d-flex");
        b.classList.remove("d-none");
    } else {
        b.classList.add("d-none");
        b.classList.remove("d-flex");
    }
}

function scrollToTop() {
    document.getElementById("left-column").scrollTo(0,0);
}

function addToggleInventoryButtonEvent() {
    const button = document.getElementById('inventory-toggle-button');
    button.onclick = () => {
        toggleInventory();
    };
}

function addScrollToTopButtonEvent() {
    const button = document.getElementById('scroll-to-top-toggle-button');
    button.classList.add("d-none");
    button.onclick = () => {
        scrollToTop();
    };
}

function initJavascript() {
    leftColumn = document.getElementById('left-column');
    rightColumn = document.getElementById('right-column');
    addToggleInventoryButtonEvent();
    addScrollToTopButtonEvent();
    leftColumn.addEventListener('scroll', function(e) {
        checkScrollToTopVisibility(leftColumn);
    });
    if(window.innerWidth <= 767) {
        toggleInventory();
        toggleInventory();
    }
}

function onResize() {
    if(window.innerWidth >= 768) {
        leftColumn.classList.remove("d-none");
        rightColumn.classList.remove("d-none");
        inventoryVisible = true;
    }
}