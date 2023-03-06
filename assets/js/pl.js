const toggleButton=document.getElementsByClassName("toggle-button")[0]
const navbarLinks=document.getElementsByClassName("navbar-links")[0]


toggleButton.addEventListener("click" , () => {
    navbarLinks.classList.toggle("active")
})

function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("myForm").style.borderRadius = "10px";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";  
  }