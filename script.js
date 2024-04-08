//mobile-nav code
const mobile_btn = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".mobile-nav-container");
const mobile_btn_2 = document.querySelector(".close");
// accordian code
const ourItemDiv = document.getElementsByClassName("item");
const openIcon = document.getElementsByClassName("iconOpen");
const closeIcon = document.getElementsByClassName("iconClose");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};



mobile_btn.addEventListener("click", () => toggleNavbar());
mobile_btn_2.addEventListener("click", () => toggleNavbar());
// console.log(ourItemDiv);
for (let i = 0; i < ourItemDiv.length; i++) {
  closeIcon[i].style.display = "none";

  ourItemDiv[i].addEventListener("click", () => {
    const result = ourItemDiv[i].classList.toggle("active");

    if (result) {
      closeIcon[i].style.display = "block";
      openIcon[i].style.display = "none";
    } else {
      closeIcon[i].style.display = "none";
      openIcon[i].style.display = "block";
    }
  });
}



