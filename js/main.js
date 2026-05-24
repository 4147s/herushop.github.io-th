function updateCartBadge() {
    let cart = JSON.parse(localStorage.getItem('herushop_cart')) || [];
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        el.innerText = count;
    });
}

// Tambahkan pemanggilan updateCartBadge() ke dalam event DOMContentLoaded bawaan Anda.
document.addEventListener('DOMContentLoaded', updateCartBadge);
