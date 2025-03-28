document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("frm");
    const nameInput = document.getElementById("nameInput");
    const nameError = document.getElementById("nameError");
    const emailInput = document.getElementById("emailInput");
    const emailError = document.getElementById("emailError");
    const contactInput = document.getElementById("contactInput");
    const contactError = document.getElementById("contactError");
    const select = document.getElementById("service");
    const serviceError = document.getElementById("serviceError");
    const button =document.getElementById("bookbtn");
    const successMessage= document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        if (nameInput.value.trim() === "") {
            event.preventDefault();
            nameError.textContent = "Name is required";
            nameError.style.display = "block";
            setTimeout(() => {
                nameError.style.display = "none";
            }, 3000);
        } else {
            nameError.style.display = "none";
        }

        const emailPattern= /@.*\.com/;
        if(!emailPattern.test(emailInput)){
            emailError.textContent= "Email is Required";
            emailError.style.display="block";
            setTimeout(()=> {
                emailError.style.display="none";
            },3000);
        }else{
            emailError.style.display="none";
        }

        const contactPattern= /^\d{10}$/;
        if(!contactPattern.test(contactInput)){
            contactError.textContent="Contact required";
            contactError.style.display="block";
            setTimeout(()=> {
                contactError.style.display="none";
            },3000);
        }else{
            contactError.style.display="none";
        }

         if (select.value !== ""){
            serviceError.textContent=" Choose an Option";
            serviceError.style.display="block";
            setTimeout(()=>{
                serviceError.style.display="none";
            },3000);
         }else{
            serviceError.style.display="none";
         }


         button.addEventListener("click", event =>{
            if(successMessage.classList.contains("visible")){
                successMessage.classList.remove("visible")
            }else{
                successMessage.classList.add("visible")
            }
        
            setTimeout(()=>{
                successMessage.classList.remove("visible")
            }, 3000)
        
            button.disabled = true
            setTimeout(() =>{
                button.disabled = false;
            }, 3500)

            
        })
    });

});