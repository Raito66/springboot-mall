document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    const quantityInput = document.getElementById('quantity');

    let productStock = 0;
    let productPrice = 0;

    // 从 URL 中获取 productId
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');

    // 使用 fetch 请求获取特定 productId 的商品信息
    fetch(`/products/${productId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(product => {
            document.getElementById('productName').textContent = product.productName;
            document.getElementById('productCategory').textContent = '類別: ' + product.category;
            document.getElementById('productPrice').textContent = '價錢: $' + product.price;
            productStock = product.stock;
            document.getElementById('productStock').textContent = '庫存: ' + productStock;
            productPrice = product.price;
        })
        .catch(error => console.error('Error fetching product:', error.message));

    // 结账按钮点击事件
    checkoutBtn.addEventListener('click', function() {
        // 构建订单请求对象
        const user = JSON.parse(localStorage.getItem('currentUser'));

        const orderRequest = {
            buyItemList: [{ productId: productId, quantity: parseInt(quantityInput.value) }]
        };

        // 发送订单创建请求
        fetch(`/users/${user.userId}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderRequest)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(order => {
                alert('結帳成功！');
                // 结账成功后，更新购物车显示
                quantityInput.value = 1; // 重置下单数量为 1
                document.getElementById('totalAmount').textContent = (productPrice).toFixed(2);
                document.getElementById('productStock').textContent = '庫存: ' + (productStock - 1);
            })
            .catch(error => console.error('Error creating order:', error.message));
    });
});
