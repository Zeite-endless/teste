var sneaker = document.getElementById('sneaker')

function changeImageRightBtn(){
    if(sneaker.src.match("sneakerPhoto1.jpg")){
        sneaker.src = "sneakerPhoto2.jpg"
    }
    else if(sneaker.src.match("sneakerPhoto2.jpg")){
        sneaker.src = "sneakerPhoto3.jpg"
    }
    else if(sneaker.src.match("sneakerPhoto3.jpg")){
        sneaker.src = "sneakerPhoto4.jpg"
    }
    else if(sneaker.src.match("sneakerPhoto4.jpg")){
        sneaker.src = "sneakerPhoto5.jpg"
    }
    else if(sneaker.src.match("sneakerPhoto5.jpg")){
        sneaker.src = "sneakerPhoto6.jpg"
    }else if(sneaker.src.match("sneakerPhoto6.jpg")){
        sneaker.src = "sneakerPhoto1.jpg"
    }
}

function changeImageLeftBtn(){
    if(sneaker.src.match("sneakerPhoto1.jpg")){
        sneaker.src = "sneakerPhoto6.jpg"
    }
    else if(sneaker.src.match("sneakerPhoto2.jpg")){
        sneaker.src = "sneakerPhoto1.jpg"
    }
    else if(sneaker.src.match("sneakerPhoto3.jpg")){
        sneaker.src = "sneakerPhoto2.jpg"
    }
    else if(sneaker.src.match("sneakerPhoto4.jpg")){
        sneaker.src = "sneakerPhoto3.jpg"
    }
    else if(sneaker.src.match("sneakerPhoto5.jpg")){
        sneaker.src = "sneakerPhoto4.jpg"
    }else if(sneaker.src.match("sneakerPhoto6.jpg")){
        sneaker.src = "sneakerPhoto5.jpg"
    }
}

var love = document.getElementById("like")

function likeThis(){
    love.style.color = "red";
    love.style.opacity = "1";
}

