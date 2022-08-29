
console.log("YOU TELL ME IF IT WORKS!")

let dropdownMenu= document.querySelector(".dropdown-menu")




let toggleOnBtn= document.querySelector(".toggle-button")
let toggleOfBtn= document.querySelector("#toggle-button-dropdown")

dropdownMenu.style.display= "none"

toggleOnBtn.addEventListener("click", ()=> dropdownMenu.style.display="flex")

toggleOfBtn.addEventListener("click",()=> dropdownMenu.style.display= "none")

let pepsiMain= document.querySelector("#pepsi-mainPage")
let pepsiOriginal= document.querySelector("#Pepsi-original")
let pepsiDiet= document.querySelector("#Pepsi-diet")
let pepsiZeroSugar= document.querySelector("#Pepsi-zeroSugar")


let PespiNums= 1


pepsiMain.src= `file:///C:/Users/18296/Desktop/LittleLandingPageProject/IMAGES/images/pepsi${PespiNums}.png`

if(PespiNums===1){
    document.body.style.backgroundColor="#005CB4"
    document.body.style.transition="backgroundColor, 1s"
}

if(PespiNums===2){
    document.body.style.backgroundColor="#d90429";
    document.body.style.transition="backgroundColor, 1s"
}

if(PespiNums===3){
    document.body.style.backgroundColor= "black"
    document.body.style.transition="backgroundColor, 1s"
    PespiNums=0
}



pepsiDiet.addEventListener("click", ()=>{
    document.body.style.backgroundColor="#d90429";
    document.body.style.transition="backgroundColor, 1s"
    PespiNums=2
    pepsiMain.src= `file:///C:/Users/18296/Desktop/LittleLandingPageProject/IMAGES/images/pepsi${PespiNums}.png`

});

pepsiOriginal.addEventListener("click", ()=>{
    document.body.style.backgroundColor="#005CB4"
    document.body.style.transition="backgroundColor, 1s"
    PespiNums=1
    pepsiMain.src= `file:///C:/Users/18296/Desktop/LittleLandingPageProject/IMAGES/images/pepsi${PespiNums}.png`
    PespiNums=1
})

pepsiZeroSugar.addEventListener("click", ()=>{
     document.body.style.backgroundColor= "black"
     document.body.style.transition="backgroundColor, 1s"
     PespiNums=3
     pepsiMain.src= `file:///C:/Users/18296/Desktop/LittleLandingPageProject/IMAGES/images/pepsi${PespiNums}.png`
     PespiNums=0
})


document.body.addEventListener("keydown", (e)=>{


    if (e.code==="ArrowRight"){
        PespiNums +=1
    }

    else if(e.code==="ArrowLeft"){
        PespiNums -=1
    }
        pepsiMain.src=`file:///C:/Users/18296/Desktop/LittleLandingPageProject/IMAGES/images/pepsi${PespiNums}.png`
            if(PespiNums===1){
                document.body.style.backgroundColor="#005CB4"
                document.body.style.transition="backgroundColor, 1s"
            }

            if(PespiNums===2){
                document.body.style.backgroundColor="#d90429";
                document.body.style.transition="backgroundColor, 1s"
            }

            if(PespiNums===3){
                document.body.style.backgroundColor= "black"
                 document.body.style.transition="backgroundColor, 1s"
                 PespiNums=0
            }

    console.log(e)


})

