const e=Array.from(document.getElementsByClassName("icons-group"));e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(e=>{e.classList.remove("active-group")}),t.classList.add("active-group")})});const t=document.getElementById("slide-left"),c=document.getElementById("slide-right"),o=document.getElementById("scroll-container");t.addEventListener("click",()=>{o.scrollLeft-=150}),c.addEventListener("click",()=>{o.scrollLeft+=150});const l=document.getElementById("categories"),n=document.querySelectorAll(".category-item"),r=document.querySelectorAll(".categories-options"),s=document.getElementById("arrow-left"),a=document.getElementById("arrow-right");n.forEach(e=>{e.addEventListener("click",()=>{r.forEach(e=>{e.classList.add("hidden")}),n.forEach(e=>{e.classList.remove("active-item")}),e.classList.add("active-item");let t=e.getAttribute("data-target");document.querySelector(t).classList.remove("hidden")})}),s.addEventListener("click",()=>{l.scrollLeft-=150}),a.addEventListener("click",()=>{l.scrollLeft+=150});const d=document.getElementsByClassName("phone-overflow"),i=document.getElementsByClassName("eye-icon");for(let e=0;e<i.length;e++)i[e].addEventListener("click",()=>{d[e].classList.toggle("!w-max")});document.querySelectorAll(".hotel-phone").forEach(function(e){e.addEventListener("click",function(e){e.stopPropagation()})}),Array.from(document.getElementsByClassName("hotel-card")).forEach(e=>{e.addEventListener("click",()=>{window.location.href="hotel.html"})});
//# sourceMappingURL=index.07d4bf7a.js.map
