upload('#file',{
    multi:true,
    accept :['.png', '.jpg', '.jpeg']

});

function upload(selector, options = {}){
    const input = document.querySelector(selector)
    const img = document.getElementById('preview')

    const open = document.createElement('div')
    open.classList.add('btn_add')
    open.textContent = 'Додати фото'

    if(options.multi){
        input.setAttribute('multiple',true)
    }
    if(options.accept && Array.isArray(options.accept)){
        input.setAttribute('accept', options.accept.join(','))
    }
    
    input.insertAdjacentElement('afterend',open)

    
    trigerInput = () => input.click()
    changeHendler = event => {
        // console.log(event.target.files)
        if(event.target.files.length){
            return
        }
        const files = Array.from(event.target.files)

        files.forEach(file => {
            if(!file.type.match('image')){
                return
            }
                
        const reader = new FileReader(); 
        reader.addEventListener("load", function () { 
          image = reader.result;
         img.insertAdjacentHTML('afterbegin', `
                <div class="preview-img"> 
                <img src="${image}">
                </div>
                ` )
          console.log(image)
        }, false);
            
            // reader.onload = ev => {
            //     console.log('ev.target')
            //     // preview.insertAdjacentHTML('afterbegin',`
            //     // <div class="preview-img">
            //     //     <img src="${src}" alt="${file.name}"/>
            //     // </div>
            //     // `)
            // }

            reader.readAsDataURL(file)
            
        })
    }
    
    open.addEventListener('click', trigerInput)
    input.addEventListener('change', changeHendler)
}