const div = document.querySelector(".abtmecontainer span");
const text = ["Computer system engineering student", "IOT student"];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;


function typeLoop(){
    const currentWord = text[textIndex];

    if (isDeleting){
        element.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    }
    else{
        element.textContent = currentWord.substring(0, charIndex+1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 40:80;

    if(!isDeleting && charIndex === currentWord.length){
        typingSpeed =2000;
        isDeleting = true;
    } else if (isDeleting && charIndex ===0){
        isDeleting = false;
        textIndex = (textIndex +1)%text.length;
        typingSpeed = 500;
    }
    setTimeout(typeLoop, typingSpeed);
}

typeLoop();