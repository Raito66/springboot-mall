document.addEventListener('DOMContentLoaded', function() {
    // Get current user from local storage
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const userId = user.userId;

    // Fetch user orders from backend
    fetch(`/users/${userId}/orders`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Display user orders in the table
            const orderTableBody = document.getElementById('orderTableBody');
            data.results.forEach(order => {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>${order.orderId}</td>
                <td>${order.totalAmount}</td>
                <td>${order.createdDate}</td>
                <td>${order.lastModifiedDate}</td>
            `;
                orderTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching user orders:', error.message));
});
