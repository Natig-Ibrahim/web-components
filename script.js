//confirm("salam") alert kimi tetbiq olunur

//bu kod klasi accordion olan butun tag-leri secir
//const accordionEl = document.querySelectorAll(".accordion")

// const accordionBtns = document.getElementsByClassName("accordion")
// for(let i = 0; i < accordionBtns.length; i++) {
//     accordionBtns[i].addEventListener("click", function() {
//         //burada yazilmish kod bir tag-in ozunden sonra gelen tag-i secir
//         let panel = this.nextElementSibling
//         console.log(panel)
//     if(panel.style.maxHeight) {
//         panel.style.maxHeight = null
//     }
//     else {
//         //burada scrollHeight + "px" kodu obyekte lazimi qeder hundurluk verir
//         panel.style.maxHeight = panel.scrollHeight + "px"
//     }
//     })
// }


//popup forumlar
const whattsappBtn = document.getElementById("btn")
const cancelbtn = document.getElementById("cancelbtn")

const myPopUp = document.getElementById("form")

whattsappBtn.addEventListener("click", qutunuGoster)
cancelbtn.addEventListener("click", qutunuBagla)

function qutunuGoster() {
    //bu kod css-de yaratdigimiz klas esasinda sehvede ishe dushecek
    myPopUp.classList.add("active")
}

function qutunuBagla(e) {
    e.preventDefault()
    myPopUp.classList.remove("active")
}