<script>
document.getElementById('send-viber-btn').addEventListener('click', function () {
    const fullname = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const novaPochta = document.getElementById('nova_pochta').value;

    if (!fullname || !phone || !city || !novaPochta) {
        alert("Будь ласка, заповніть усі поля!");
        return;
    }

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let cartText = '';

    if (cartItems.length === 0) {
        cartText = 'Кошик порожній.';
    } else {
        cartItems.forEach((item, i) => {
            cartText += `\n--- Товар ${i + 1} ---\n`;
            cartText += `Назва: ${item.name}\n`;
            cartText += `Колір: ${item.color}\n`;
            cartText += `Розмір: ${item.size}\n`;
            cartText += `Кількість: ${item.quantity}\n`;
        });
    }

    const message = `Нове замовлення:\n\nІм'я: ${fullname}\nТелефон: ${phone}\nМісто: ${city}\nВідділення НП: ${novaPochta}\n\nТовари:${cartText}`;

    const viberNumber = '380505270310'; // ← підстав свій номер телефону
    const viberURL = `viber://chat?number=%2B${viberNumber}&text=${encodeURIComponent(message)}`;

    window.location.href = viberURL;
});
</script>
