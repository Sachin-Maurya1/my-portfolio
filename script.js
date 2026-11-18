const menutoggle = document.getElementById("menu-toggle");
const navmenu = document.getElementById("nav-menu");

menutoggle.addEventListener("click",() =>{
    navmenu.classList.toggle("active");
});
const navlink = document.querySelectorAll("#nav-menu a");
navlink.forEach(link =>{
    link.addEventListener("click", () =>{
        navmenu.classList.remove("active");
    });
});

