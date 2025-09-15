// script.js

// Đảm bảo mã chỉ chạy sau khi toàn bộ trang đã được tải
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. CHỨC NĂNG NÚT CUỘN LÊN ĐẦU TRANG ---
    const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

    // Hiển thị hoặc ẩn nút dựa trên vị trí cuộn
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) { // Hiển thị nút khi cuộn xuống 200px
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    // Xử lý sự kiện click để cuộn lên đầu trang
    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Tạo hiệu ứng cuộn mượt
        });
    });


    // --- 2. CHỨC NĂNG NÚT "THÊM VÀO GIỎ HÀNG" ---
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Tìm thẻ cha .product-card gần nhất
            const card = button.closest('.product-card');
            // Lấy tên sản phẩm từ thẻ h3 bên trong card
            const productName = card.querySelector('h3').textContent;
            
            // Hiển thị thông báo đơn giản
            alert(`Đã thêm "${productName}" vào giỏ hàng!`);
        });
    });


    // --- 3. HIỆU ỨNG XUẤT HIỆN KHI CUỘN (SCROLL ANIMATION) ---
    // Sử dụng Intersection Observer API để tối ưu hiệu suất
    const productCards = document.querySelectorAll('.product-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Khi phần tử đi vào viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Ngừng quan sát sau khi đã hiển thị để không lặp lại hiệu ứng
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Kích hoạt khi 10% của phần tử được nhìn thấy
    });

    // Bắt đầu quan sát tất cả các thẻ sản phẩm
    productCards.forEach(card => {
        observer.observe(card);
    });

});