const imgRef = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
];

let imgIndex = 0;
const sliderTimer = setInterval(() => {
    if (imgRef.length === imgIndex) {
        imgIndex = 0;
    }
    let sliderImage = document.getElementById('sliderImage');
    sliderImage.setAttribute('src', imgRef[imgIndex])
    console.log(imgRef[imgIndex]);
    imgIndex++;
}, 2000);