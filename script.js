// Чекаємо, поки весь HTML завантажиться
document.addEventListener('DOMContentLoaded', () => {

    // Знаходимо всі елементи, які нам потрібні
    const galleryImages = document.querySelectorAll('.gallery-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    // Функція для відкриття модального вікна
    const openLightbox = (e) => {
        // Беремо src (посилання) з картинки, на яку клікнули
        const imgSrc = e.target.src;
        lightboxImg.src = imgSrc; // Вставляємо це посилання у нашу модальну картинку
        lightbox.style.display = 'flex'; // Показуємо модальне вікно
    };

    // Функція для закриття
    const closeLightbox = () => {
        lightbox.style.display = 'none'; // Ховаємо модальне вікно
    };

    // Навішуємо "прослуховувач" кліку на кожне фото в галереї
    galleryImages.forEach(img => {
        img.addEventListener('click', openLightbox);
    });

    // Навішуємо клік на хрестик "закрити"
    closeBtn.addEventListener('click', closeLightbox);

    // Бонус: закриваємо по кліку на темний фон
    lightbox.addEventListener('click', (e) => {
        // Якщо клікнули не на саму картинку, а на фон
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Бонус: закриваємо по натисканню на 'Escape'
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });

});