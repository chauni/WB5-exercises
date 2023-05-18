const imageFiles = [
    {name: "./images/burger.jpg", description: "A plate of burger and fries"},
    {name: "./images/cookies.jpg", description: "A closeup image of chocolate chip cookies"},
    {name: "./images/english-breakfast.jpg", description: "A plate of a full english breakfast"},
    {name: "./images/fruit.jpg", description: "Various fruits on a plate"},
    {name: "./images/meat-and-veggies.jpg", description: "A plate of freshly grilled meat with a side of vegetables"}
]

const insertedImagePaths = []

const imageSelectorEl = document.getElementById('imageSelector');
const addBtnEl = document.getElementById('addBtn');
const clearBtnEl = document.getElementById('clearBtn')
const imageContainerEl = document.getElementById('imageContainer')
// clearBtnEl.onclick = onClearBtnClicked;

imageFiles.forEach((image) => {
    const imageOption = new Option(image.description, image.name)
    imageSelectorEl.appendChild(imageOption)
})

addBtnEl.addEventListener('click', () => {
    const selectedValue = imageSelectorEl.value
    if (selectedValue == '') {
        alert('Select an image!')
    }
    
    if (insertedImagePaths.includes(selectedValue)) {
        alert('Image is already on the page')
        return;
    }

    insertedImagePaths.push(selectedValue);

    const selectedImage = imageFiles.find((image) => image.name == selectedValue)
    const displayImage = document.createElement('img')
    displayImage.src = selectedImage.name
    displayImage.alt = selectedImage.description

    imageContainerEl.appendChild(displayImage)
})

clearBtnEl.addEventListener('click', () => {
    const callOnImages = imageContainerEl.querySelectorAll('img'); //scope is only on the imageContainer div and not the entire document

    insertedImagePaths.length = 0;

    Array.from(callOnImages).forEach((img) => {
        imageContainerEl.removeChild(img)
    })
})
    

