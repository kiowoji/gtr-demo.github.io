!function(e,t={}){let n=document.querySelector(e),a=document.getElementById("preview"),i=document.createElement("div");i.classList.add("btn_add"),i.textContent="Додати фото",t.multi&&n.setAttribute("multiple",!0),t.accept&&Array.isArray(t.accept)&&n.setAttribute("accept",t.accept.join(",")),n.insertAdjacentElement("afterend",i),trigerInput=()=>n.click(),changeHendler=e=>{e.target.files.length||Array.from(e.target.files).forEach(e=>{if(!e.type.match("image"))return;let t=new FileReader;t.addEventListener("load",function(){image=t.result,a.insertAdjacentHTML("afterbegin",`
                <div class="preview-img"> 
                <img src="${image}">
                </div>
                `),console.log(image)},!1),t.readAsDataURL(e)})},i.addEventListener("click",trigerInput),n.addEventListener("change",changeHendler)}("#file",{multi:!0,accept:[".png",".jpg",".jpeg"]});
//# sourceMappingURL=filter.b5f4117a.js.map
