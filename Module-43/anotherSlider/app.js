const images = [
    'imgs/pic-1.jpg',
    'imgs/pic-2.jpg',
    'imgs/pic-3.jpg',
    'imgs/pic-4.avif',
    'imgs/pic-5.jpg',
    'imgs/pic-6.jpg',
    'imgs/pic-7.jpg',
    'imgs/pic-8.jpg',
];

let imageIndex = 0;
const sliderImg = document.getElementById('slider-img');
setInterval(() => {
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    const imgUrl = images[imageIndex];
    sliderImg.setAttribute('src', imgUrl);
    imageIndex++;
}, 1000);