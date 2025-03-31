/* document.getElementById('cart').addEventListener('click', function () {
    document.getElementById('item').style.visibility = 'visible';
});
*/




const dtn = document.getElementById('myBtnone');
const dtnTwo = document.getElementById('myBtntwo');
const dtnThree = document.getElementById('myBtnthree');
const dtnFour = document.getElementById('myBtnfour');
const dtnFive = document.getElementById('myBtnfive');
const dtnSix = document.getElementById('myBtnsix');
const dtnSeven = document.getElementById('myBtnseven');
const dtnEight = document.getElementById('myBtneight');
const dtnNine = document.getElementById('myBtnnine');
const successMessage = document.getElementById("successMessage");



function toggleMessage(event) {
        if (successMessage.classList.contains("visible")) {
            successMessage.classList.remove("visible");
        } else {
            successMessage.classList.add("visible");
        }

        setTimeout(() => {
            successMessage.classList.remove("visible");
        }, 3000);

        dtn.disabled = true;
        setTimeout(() => {
            dtn.disabled = false;
        }, 3500);
    }

    dtn.addEventListener("click", () => toggleMessage(dtn));
    dtnTwo.addEventListener("click", () => toggleMessage(dtnTwo));
    dtnThree.addEventListener("click", () => toggleMessage(dtnThree));
    dtnFour.addEventListener("click", () => toggleMessage(dtnFour));
    dtnFive.addEventListener("click", () => toggleMessage(dtnFive));
    dtnSix.addEventListener("click", () => toggleMessage(dtnSix));
    dtnSeven.addEventListener("click", () => toggleMessage(dtnSeven));
    dtnEight.addEventListener("click", () => toggleMessage(dtnEight));
    dtnNine.addEventListener("click", () => toggleMessage(dtnNine));
   