function changeBackgorund(color){
    document.body.style.backgroundColor = color;
}


const themeButton = document.getElementById("theme-button");


themeButton.addEventListener('click', () => {
    console.log(document.body.style.backgroundColor);
    const currentColor = document.body.style.backgroundColor;

    if(!currentColor || currentColor == 'white'){
        changeBackgorund('black')
        themeButton.innerText = 'LIGHT MODE'
    }else{
        changeBackgorund('white'),
        themeButton.innerText = 'DARKMODE'
    }
    
})