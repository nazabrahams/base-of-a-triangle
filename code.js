let Base= document.querySelector("[name='Base']")
let Height= document.querySelector("[name='Height']")
let calculate= document.querySelector("[data-calculate]")
let calcbtn= document.querySelector("#calcbtn")


function results() {
   let idk= (Base.value / 2) * Height.value
    calculate.value=idk

}

calcbtn.addEventListener("click", results)
