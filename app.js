const imageInput = document.getElementById("image-input");
const topInput = document.getElementById("top-text-input");
const bottomInput = document.getElementById("bottom-text-input");
const button = document.getElementById("meme-submit");
const createdMemes = document.getElementById('created-memes');
const form = document.querySelector("form");
const body = document.querySelector('body');
let requiredPopUp = document.createElement("div");

button.addEventListener('click', function(e){
    e.preventDefault();
    if(imageInput.value === "") {
        requiredPopUp.innerText = "ERROR: submit an image URL to continue";
        requiredPopUp.classList.add('requiredPopUp');
        body.append(requiredPopUp);
    } else if(imageInput.value !== "") {
        requiredPopUp.remove();
        memeImage();
        form.reset();
    } else { 
    memeImage();
    form.reset();
    }
});

function memeImage() {
    let imageDiv = document.createElement('div');
    imageDiv.classList.add('newImages');
    let imageValue = imageInput.value;
    let newImage = document.createElement('img');
    imageDiv.append(newImage);
    newImage.setAttribute('src', imageValue);
    newImage.classList.add('imageSizing');

    function textTop() {
        let textDiv = document.createElement('div');
        textDiv.classList.add('textDiv');
        textDiv.innerText = topInput.value; 
        imageDiv.append(textDiv);
    }

    function textBottom() {
        let textDiv = document.createElement('div');
        textDiv.classList.add('bottomTextDiv');
        textDiv.innerText = bottomInput.value; 
        imageDiv.append(textDiv);
    }

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'X'; 
    deleteButton.classList.add('deleteButton');
    deleteButton.classList.add('deleteButton:hover');
    imageDiv.append(deleteButton);
    deleteButton.addEventListener('click', function(e) {
        e.target = imageDiv; 
        imageDiv.remove(); 
    })

    textTop();
    textBottom();
    createdMemes.append(imageDiv);
};

