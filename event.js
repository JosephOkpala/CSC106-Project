const btn = document.getElementById("myBtn");
const btnTwo = document.getElementById("btnTwo")
const successMessage = document.getElementById("successMessage")

btn.addEventListener("click", event =>{
    if(successMessage.classList.contains("visible")){
        successMessage.classList.remove("visible")
    }else{
        successMessage.classList.add("visible")
    }

    setTimeout(()=>{
        successMessage.classList.remove("visible")
    }, 3000)

    btn.disabled = true
    setTimeout(() =>{
        btn.disabled = false;
    }, 3500)
})

btnTwo.addEventListener("click", event =>{
    if(successMessage.classList.contains("visible")){
        successMessage.classList.remove("visible")
    }else{
        successMessage.classList.add("visible")
    }

    setTimeout(()=>{
        successMessage.classList.remove("visible")
    }, 3000)

    btnTwo.disabled = true
    setTimeout(() =>{
        btnTwo.disabled = false;
    }, 3500)
})