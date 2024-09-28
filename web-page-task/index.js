const hamburgerIcon = document.getElementById("hamburger-icon")
const mobileMenu = document.getElementById("mobile-menu")
const cancelIcon = document.getElementById("cancel-icon")

hamburgerIcon.addEventListener("click", function(){
    mobileMenu.style.display = "flex"
})

cancelIcon.addEventListener("click", function(){
    mobileMenu.style.display = "none"
})
