const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
    'images/pic1.jpg',
    'images/pic2.jpg',
    'images/pic3.jpg',
    'images/pic4.jpg',
    'images/pic5.jpg'
]

/* Declaring the alternative text for each image file */
const alternativeTexts = [
    'Closeup of a human eye',
    'Rock',
    'Flower',
    'Egypt',
    'Butterfly'
]
/* Looping through images */
for (let i = images.length - 1; i >= 0; --i) {
    const newImage = document.createElement('img')
    newImage.setAttribute('src', images[i])
    newImage.setAttribute('alt', alternativeTexts[i])
    newImage.setAttribute('onclick', `display(${i})`)
    thumbBar.appendChild(newImage)
}

function display(imageNo) {
    displayedImage.setAttribute('src', images[imageNo])
    displayedImage.setAttribute('alt', alternativeTexts[imageNo])
}
/* Wiring up the Darken/Lighten button */
btn.setAttribute('onclick', 'switchColors()')

function switchColors() {
    console.log('switch')
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light')
        btn.textContent = 'Lighten'
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
    } else {
        btn.setAttribute('class', 'dark')
        btn.textContent = 'Darken'
        overlay.style.backgroundColor = 'rgba(0,0,0,0)'
    }
}