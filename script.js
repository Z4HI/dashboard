const darkmode = document.querySelector('#dark')
const header = document.querySelector('header')
const header3 = document.querySelector('.header3')
const projects = document.querySelector('.projects')
const leftside = document.querySelector('.leftside')
const other = document.querySelector('.other')
const project = document.querySelector('.project')
const left = document.querySelectorAll("#left")


darkmode.addEventListener('click',()=>{

header.classList.toggle('bgColorBlack')
header3.classList.toggle('bgColorBlue')
leftside.classList.toggle('bgColorGray')
other.classList.toggle('bgColorGray')
projects.classList.toggle('bgColorBlack')
project.classList.toggle('.txt')
darkmode.classList.toggle('txt')

left.forEach((el) =>{
    el.classList.toggle("txtBlack")
})


})

