const e=document.getElementById("guide-form"),t=e.querySelectorAll("input[required], textarea[required]"),n=document.getElementById("overlay");e.addEventListener("submit",t=>{t.preventDefault(),e.checkValidity()&&(n.style.display="block")}),t.forEach(e=>{e.addEventListener("invalid",()=>{e.nextElementSibling.style.display="block"}),e.addEventListener("input",()=>{e.checkValidity()&&(e.nextElementSibling.style.display="none")})});
//# sourceMappingURL=guide-form.695ebe73.js.map
