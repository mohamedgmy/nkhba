// انتظار تحميل المستند بالكامل
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة مكتبة AOS للتأثيرات الحركية
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100
    });

    // تبديل الصور في بطاقات المنتجات
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const slider = card.querySelector('.image-slider');
        const images = slider.querySelectorAll('img');
        const prevBtn = card.querySelector('.slider-prev');
        const nextBtn = card.querySelector('.slider-next');
        
        let currentIndex = 0;
        
        // زر التالي
        nextBtn.addEventListener('click', function() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        });
        
        // زر السابق
        prevBtn.addEventListener('click', function() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            images[currentIndex].classList.add('active');
        });
    });

    // تفعيل أزرار الفئات
    const categoryButtons = document.querySelectorAll('.category-button');
    const productCategories = document.querySelectorAll('.product-category');
    
    categoryButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // إزالة الفئة النشطة من جميع الأزرار
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // إضافة الفئة النشطة للزر المضغوط
            this.classList.add('active');
            
            // إذا كان الزر الأول (الكل)، أظهر جميع الفئات
            if (index === 0) {
                productCategories.forEach(category => {
                    category.style.display = 'block';
                });
            } else {
                // إخفاء جميع الفئات
                productCategories.forEach(category => {
                    category.style.display = 'none';
                });
                // إظهار الفئة المحددة فقط
                if (productCategories[index - 1]) {
                    productCategories[index - 1].style.display = 'block';
                }
            }
        });
    });

    // تأثير التمرير السلس للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // تأثير تثبيت الهيدر عند التمرير
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.padding = '10px 0';
        } else {
            header.style.padding = '15px 0';
        }
        
        lastScrollTop = scrollTop;
    });
});
