/**
 * Herushop Core Cart Functional Processor
 * Handles arithmetic logic transformations and storage injections.
 */

function loadCartDashboard() {
    const cartWrapper = document.getElementById('cartItemsWrapper');
    const totalAmountSpan = document.getElementById('cartTotalAmount');
    if (!cartWrapper) return;

    cartWrapper.innerHTML = '';
    let cart = JSON.parse(localStorage.getItem('herushop_cart')) || [];
    let absoluteSubtotal = 0;

    if (cart.length === 0) {
        cartWrapper.innerHTML = `
            <div class="empty-state">
                <p class="lang-en">Your cart is currently completely empty.</p>
                <p class="lang-th">ตะกร้าสินค้าของคุณว่างเปล่าในขณะนี้</p>
                <a href="products.html" class="btn lang-en">Browse Products</a>
                <a href="products.html" class="btn lang-th">เลือกดูสินค้า</a>
            </div>
        `;
        if (totalAmountSpan) totalAmountSpan.innerText = "฿0.00";
        applyLanguage(localStorage.getItem('preferredLang') || 'th');
        return;
    }

    cart.forEach(item => {
        const productMetadata = productDatabase.find(p => p.id === item.id);
        if (productMetadata) {
            const rowCost = productMetadata.price * item.quantity;
            absoluteSubtotal += rowCost;

            const row = document.createElement('div');
            row.className = 'cart-item-row';
            row.innerHTML = `
                <div class="item-meta">
                    <h4 class="lang-en">${productMetadata.name_en}</h4>
                    <h4 class="lang-th">${productMetadata.name_th}</h4>
                    <p>฿${productMetadata.price.toLocaleString()}</p>
                </div>
                <div class="item-quantities">
                    <button onclick="mutateQuantity('${item.id}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="mutateQuantity('${item.id}', 1)">+</button>
                </div>
                <div class="item-row-total">
                    <p>฿${rowCost.toLocaleString()}</p>
                    <button onclick="removeProductFromCart('${item.id}')" class="remove-btn">✕</button>
                </div>
            `;
            cartWrapper.appendChild(row);
        }
    });

    if (totalAmountSpan) {
        totalAmountSpan.innerText = `฿${absoluteSubtotal.toLocaleString()}`;
    }
    applyLanguage(localStorage.getItem('preferredLang') || 'th');
}

function mutateQuantity(id, change) {
    let cart = JSON.parse(localStorage.getItem('herushop_cart')) || [];
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }
    localStorage.setItem('herushop_cart', JSON.stringify(cart));
    loadCartDashboard();
    updateCartBadge();
}

function removeProductFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('herushop_cart')) || [];
    cart = cart.filter(i => i.id !== id);
    localStorage.setItem('herushop_cart', JSON.stringify(cart));
    loadCartDashboard();
    updateCartBadge();
}

document.addEventListener('DOMContentLoaded', loadCartDashboard);
