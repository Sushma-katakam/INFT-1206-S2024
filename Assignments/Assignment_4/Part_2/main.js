/*
    Name : Sushma Katakam
    Date : 08-08-2024
    File : main.js
    Description : Assignment 4 part 2


const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const alt = ["pic 1", "pic 2", "pic 3", "pic 4", "pic 5"];

/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alt[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', a => {
        displayedImage.src = a.target.src;
        displayedImage.alt = a.target.alt;
    })
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
