document.addEventListener('DOMContentLoaded', function() {

    // 从 localStorage 中获取之前存储的用户信息
    const currentUserJSON = localStorage.getItem('currentUser');

    // 检查是否有存储的用户信息
    if (currentUserJSON) {
        // 将存储的 JSON 字符串转换为 JavaScript 对象
        const currentUser = JSON.parse(currentUserJSON);

        // 创建包含欢迎消息的 li 元素
        const welcomeListItem = document.createElement('li');
        welcomeListItem.textContent = currentUser.email + '已登入'; // 假设用户对象中有一个名为 email 的属性

        // 找到关于和登出之间的位置
        const aboutLink = document.querySelector('nav ul li:nth-child(5)'); // 第4个 li 元素就是关于

        // 在关于之前插入欢迎消息
        aboutLink.parentNode.insertBefore(welcomeListItem, aboutLink);
    } else {
        // 如果找不到用户信息，则执行登出操作并重定向到登录页面
        window.location.href = './login.html';
    }

    // 找到登出按钮，并添加点击事件监听器
    const logoutButton = document.querySelector('nav ul li:nth-child(6) a'); // 第5个 li 元素中的 a 标签就是登出按钮
    logoutButton.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默认链接行为

        // 清除本地存储中的用户信息
        localStorage.removeItem('currentUser');

        // 重定向到登录页面
        window.location.href = './login.html';
    });


    // 在此处添加事件监听器以确保DOM加载完成后执行
    const productFilterForm = document.getElementById('productFilterForm');

    function fetchAndDisplayProducts(pageNumber, pageSize, orderBy, sort) {
        // 构建查询参数
        const searchQuery = document.getElementById('searchInput').value;
        const categoryFilter = document.getElementById('categorySelect').value;
        const url = `/products?search=${searchQuery}&category=${categoryFilter}&orderBy=${orderBy}&sort=${sort}&limit=${pageSize}&offset=${(pageNumber - 1) * pageSize}`;

        // 向后端发送请求，获取产品数据
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const productList = data.results;
                const productCarousel = document.getElementById('productCarousel');
                productCarousel.innerHTML = ''; // 清空已有的产品元素

                // 在页面上显示新的产品列表
                productList.forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.classList.add('product');

                    // 创建产品信息的 DOM 元素并添加到 productDiv 中
                    const imageUrl = document.createElement('img');
                    imageUrl.src = product.imageUrl;
                    imageUrl.style.width = '250px'; // 设置图片宽度
                    imageUrl.style.height = '250px'; // 设置图片高度

                    const productName = document.createElement('p');
                    productName.textContent = '商品名稱: ' + product.productName;

                    const category = document.createElement('p');
                    category.textContent = '類別: ' + product.category;

                    const price = document.createElement('p');
                    price.textContent = '價錢: $' + product.price;

                    const stock = document.createElement('p');
                    stock.textContent = '庫存: ' + product.stock;

                    productDiv.appendChild(imageUrl);
                    productDiv.appendChild(productName);
                    productDiv.appendChild(category);
                    productDiv.appendChild(price);
                    productDiv.appendChild(stock);

                    // 创建购物车图标
                    const cartIcon = document.createElement('i');
                    cartIcon.classList.add('fas', 'fa-shopping-cart', 'cart-icon');
                    cartIcon.setAttribute('title', 'Add to Cart'); // 添加标题提示

                    // 创建购物车超链接
                    const cartLink = document.createElement('a');
                    // 获取商品的 ID 并添加到购物车链接的 URL 中
                    cartLink.href = './shoppingCart.html?productId=' + product.productId;
                    cartLink.appendChild(cartIcon); // 将购物车图标添加到超链接中

                    productDiv.appendChild(imageUrl);
                    productDiv.appendChild(productName);
                    productDiv.appendChild(category);
                    productDiv.appendChild(price);
                    productDiv.appendChild(stock);
                    productDiv.appendChild(cartLink); // 将购物车超链接添加到产品元素中

                    productCarousel.appendChild(productDiv);
                });

                // 在页面底部显示分页信息
                displayPagination(data.total, pageSize, pageNumber);
            })
            .catch(error => console.error('Error fetching products:', error.message));
    }

    // 显示分页信息
    function displayPagination(totalItems, pageSize, currentPage) {
        const totalPages = Math.ceil(totalItems / pageSize);
        const paginationDiv = document.getElementById('pagination');
        paginationDiv.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.textContent = i;
            pageLink.classList.add('page-link'); // 添加 Bootstrap 分页样式类

            // 使用闭包捕获正确的页面索引值
            (function(index) {
                pageLink.addEventListener('click', () => {
                    fetchAndDisplayProducts(index, pageSize, orderBySelect.value, sortSelect.value);
                });
            })(i);

            if (i === currentPage) {
                pageLink.classList.add('active');
            }

            const listItem = document.createElement('li');
            listItem.classList.add('page-item'); // 添加 Bootstrap 分页样式类
            listItem.appendChild(pageLink);

            paginationDiv.appendChild(listItem);
        }
    }

    // 初始化页面，显示第一页产品数据
    const orderBySelect = document.getElementById('orderBySelect');
    const sortSelect = document.getElementById('sortSelect');

    fetchAndDisplayProducts(1, 5, orderBySelect.value, sortSelect.value);

    // 监听表单提交事件
    productFilterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止表单默认提交行为
        fetchAndDisplayProducts(1, 5, orderBySelect.value, sortSelect.value); // 重新加载第一页产品数据
    });

    // 监听排序选择器变化事件
    orderBySelect.addEventListener('change', function() {
        fetchAndDisplayProducts(1, 5, orderBySelect.value, sortSelect.value);
    });

    // 监听排序方式选择器变化事件
    sortSelect.addEventListener('change', function() {
        fetchAndDisplayProducts(1, 5, orderBySelect.value, sortSelect.value);
    });
});
