const pageUp = document.querySelector("#pageUp")

window.addEventListener("scroll", ()=>{
    if ((window.scrollY) >= (window.innerHeight)) {
        pageUp.classList.add("d-none")
    }
    else pageUp.classList.remove("d-none")
})
pageUp.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    }
    )
})