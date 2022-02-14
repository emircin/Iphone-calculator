let topText = document.querySelector(".text-1");
let bottomText = document.querySelector(".text-2");

let calculate = document.querySelectorAll("button");

calculate[0].addEventListener("click", ()=> {
    topText.innerText = "";
    bottomText.innerText = "";

})

calculate[1].addEventListener("click", ()=> {
    topText.innerText = "";
    bottomText.innerText = "";

})
calculate[2].addEventListener("click", ()=> {
    bottomText.innerText = +bottomText.innerText / 100;

})

calculate[3].addEventListener("click", ()=> {
    topText.innerText = `${bottomText.innerText}`;
    bottomText.innerText = "÷";

})

calculate[4].addEventListener("click", ()=> {
    
    bottomText.innerText += "7";

})


calculate[5].addEventListener("click", ()=> {
    
    bottomText.innerText += "8";

})
calculate[6].addEventListener("click", ()=> {
    
    bottomText.innerText += "9";

})


calculate[7].addEventListener("click", ()=> {
    topText.innerText = `${bottomText.innerText}`;
    bottomText.innerText = "*";

})
calculate[8].addEventListener("click", ()=> {
    
    bottomText.innerText += "4";

})


calculate[9].addEventListener("click", ()=> {
    
    bottomText.innerText += "5";

})

calculate[10].addEventListener("click", ()=> {
    
    bottomText.innerText += "6";

})

calculate[11].addEventListener("click", ()=> {
    topText.innerText = `${bottomText.innerText}`;
    bottomText.innerText = "-";

})
calculate[12].addEventListener("click", ()=> {
    
    bottomText.innerText += "1";

})


calculate[13].addEventListener("click", ()=> {
    
    bottomText.innerText += "2";

})

calculate[14].addEventListener("click", ()=> {

    bottomText.innerText += "3";

})

calculate[15].addEventListener("click", ()=> {
    topText.innerText = `${bottomText.innerText}`;
    bottomText.innerText = "+";

})
calculate[16].addEventListener("click", ()=> {
    
    bottomText.innerText += "0";

})


calculate[17].addEventListener("click", ()=> {

    bottomText.innerText += ".";

})

calculate[18].addEventListener("click", ()=> {
    
    if ((bottomText.innerText).includes("-")) {
        bottomText.innerText = +(+topText.innerText - Number((bottomText.innerText).slice(1))).toFixed(8);
        topText.innerText = "";

    }
    if ((bottomText.innerText).includes("+")) {
        bottomText.innerText = +(+topText.innerText + Number((bottomText.innerText).slice(1))).toFixed(8);
        topText.innerText = "";

    }
    if ((bottomText.innerText).includes("*")) {
        bottomText.innerText = +(+topText.innerText * Number((bottomText.innerText).slice(1))).toFixed(8);
        topText.innerText = "";

    }
    if ((bottomText.innerText).includes("÷")) {
        if (Number((bottomText.innerText).slice(1)) == 0) {

            topText.innerText = "";
            bottomText.innerText = "Can't Divide By Zero.";
            bottomText.style.fontSize = "2rem";
            setTimeout(() => bottomText.innerText = "", 750);
            
            

        } else {

            bottomText.innerText = +(+topText.innerText / Number((bottomText.innerText).slice(1))).toFixed(8);
            topText.innerText = "";
        }
    
        

    }

});