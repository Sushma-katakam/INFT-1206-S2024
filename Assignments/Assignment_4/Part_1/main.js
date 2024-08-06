/*
Name: Sushma Katakam
File:main.js
Date :06 august 2024
Description: Assignment 4 part 1
*/
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}