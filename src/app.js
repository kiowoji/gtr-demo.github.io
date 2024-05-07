import './components/header.js';
import './components/footer.js';
import './components/faq.js';
import './components/booking-form.js';
import './components/add-object-form.js';
import './components/search-area.js'


// const select_btn = document.getElementById('select_open')
// const link_grop = document.querySelector('.link_grop')
// const options = document.querySelectorAll('.link-select')
// const btn_select = document.querySelector('.btn_select')

// select_btn.addEventListener('click', function(){
//     link_grop.classList.toggle('hidden')
// })

// options.forEach(option => {
//     option.addEventListener('click',function(){
//         btn_select.textContent = option.dataset.value
//         link_grop.classList.toggle('hidden')
//     } )
// });

// const id_cheked = document.getElementsByName('estate');


// for (let i = 0; i< id_cheked.length; i++) {
//     id_cheked[i].onchange = active_slot
// }

// function active_slot(){

//     slot = document.getElementById(this.value);
//     slot.classList.remove("slot");
//     for (let i = 0; i< id_cheked.length; i++) {
//         if(id_cheked[i].value != this.value){
//             remove_slot = document.getElementById(id_cheked[i].value);
//             remove_slot.classList.add("slot");

//         }
//     }
// }

// const activeted_lux =document.getElementById('active_lux');
// const id_lux = document.getElementById('lux');
// id_lux.addEventListener("change", function() {
//     if(id_lux.checked){
//         activeted_lux.classList.remove("active");
//     }else{
//         activeted_lux.classList.add("active");
//     }
// })

// const active_pivlux =document.getElementById('active_pivlux');
// const pivlux = document.getElementById('pivlux');
// pivlux.addEventListener("change", function() {
//     if(pivlux.checked){
//         active_pivlux.classList.remove("active");
//     }else{
//         active_pivlux.classList.add("active");
//     }
// })

// const active_standart =document.getElementById('active_standart');
// const standart = document.getElementById('standart');
// standart.addEventListener("change", function() {
//     if(standart.checked){
//         active_standart.classList.remove("active");
//     }else{
//         active_standart.classList.add("active");
//     }
// })



// const inp = document.querySelector('#file');
// const img = document.getElementById('preview');
// const btn_add = document.querySelector('.btn_add')




// const imageSelected = (ev) => {
//     const file = ev.target.files && ev.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.addEventListener("load", function () {
//             image = reader.result;
//             preview.insertAdjacentHTML('afterbegin', `
//                 <div class="preview-img"> 
//                 <img class="img_i" src="${image}">
//                 </div>
//                 ` )
//             console.log(image)
//         }, false);
//         reader.readAsDataURL(file);
//     }
// }
// trigerInput = () => inp.click()
// btn_add.addEventListener('click', trigerInput)
// inp.addEventListener("change", imageSelected);


// const loc =document.getElementById('loc_search');
// const loc_grop =document.getElementById('loc_group');


// loc.addEventListener('click', function (event) {
//     loc_group.classList.toggle('hidden');
//     event.stopPropagation();
// });

// document.addEventListener('click', function (event) {
//     const isClickInside = loc.contains(event.target) || loc_group.contains(event.target);

//     if (!isClickInside) {
//         loc_group.classList.add('hidden');
//     }
// });

// loc.addEventListener('click', loc_filter);

// function loc_filter(){
//     let loc_name = document.querySelector('#loc_name');
//     let loc_li = document.querySelectorAll('#loc_group>li');
//     loc_li.forEach( li => {
//         li.addEventListener('click' , function (){
//             loc_group.classList.add('hidden');
//             loc_name.innerText = li.getAttribute('data-location');
//             document.querySelector('#loc').value = li.getAttribute('data-location');
//         })
//     })

// }
