const images = [
    'image/pic-1.jpg',
    'image/pic-2.jpg',
    'image/pic-3.jpg',
    'image/pic-4.avif',
    'image/pic-5.jpg',
    'image/pic-6.jpg',
    'image/pic-7.jpg',
    'image/pic-8.jpg',
];

let imgIndex = 0;
const sliderImg = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    // console.log(imgUrl);
    sliderImg.setAttribute('src', imgUrl);
    imgIndex++;

}, 1000);