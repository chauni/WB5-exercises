const pTagGroup = document.getElementsByTagName('p');
Array.from(pTagGroup).forEach((element) => {
    element.style.border = "1px solid black"
})

const imageGroup = document.getElementsByTagName('img');
Array.from(imageGroup).forEach((imgEl ,i) => {
    imgEl.alt = "Rounded image " + (i + 1);
    imgEl.classList.add("roundedImg")
})