const e=Array.from(document.getElementsByClassName("icons-group"));e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(e=>{e.classList.remove("active-group")}),t.classList.add("active-group")})});const t=document.getElementById("slide-left"),c=document.getElementById("slide-right"),o=document.getElementById("scroll-container");t.addEventListener("click",()=>{o.scrollLeft-=150}),c.addEventListener("click",()=>{o.scrollLeft+=150});const l=document.getElementById("categories"),n=document.querySelectorAll(".category-item"),r=document.querySelectorAll(".categories-options"),d=document.getElementById("arrow-left"),i=document.getElementById("arrow-right");n.forEach(e=>{e.addEventListener("click",()=>{r.forEach(e=>{e.classList.add("hidden")}),n.forEach(e=>{e.classList.remove("active-item")}),e.classList.add("active-item");let t=e.getAttribute("data-target");document.querySelector(t).classList.remove("hidden")})}),d.addEventListener("click",()=>{l.scrollLeft-=150}),i.addEventListener("click",()=>{l.scrollLeft+=150}),Array.from(document.getElementsByClassName("hotel-card")).forEach(e=>{e.addEventListener("click",()=>{window.location.href="hotel.html"})}),Array.from(document.getElementsByClassName("location-img")).forEach(e=>{e.addEventListener("click",()=>{window.location.href="#"})});var s=document.querySelector(".button-up");s.addEventListener("click",function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),window.addEventListener("scroll",function(){s.classList.toggle("hidden",window.scrollY<100)});
//# sourceMappingURL=index.11f656c2.js.map