// 1- store the icons in an object  
// 2- Create a function to create and develop the toast box 
// 3- add eventlisteners to invoke the function

let icon = {
   success: '<span class="material-symbols-outlined">task_alt</span>',
   failed: '<span class="material-symbols-outlined">error</span>',
   info: '<span class="material-symbols-outlined">warning</span>',
   warning: '<span class="material-symbols-outlined">info</span>',
}

let showToast = (message = 'string', toastType = 'string',duration = 5000) => {

   let box = document.createElement('div')
   box.classList.add('toast',`toast-${toastType}`)
   box.innerHTML = `<div class="toast-icon">${icon[toastType]}</div>
                    <div class="toast-message">${message}</div>
                    <div class="toast-progress"></div>`

   duration = duration || 5000
   box.querySelector('.toast-progress').style.animationDuration = 
      `${duration / 1000}s`

   let toastAlready = document.body.querySelector('.toast')
   if(toastAlready){
      toastAlready.remove()
   }
   document.body.appendChild(box)
}


let Sumbit = document.querySelector('.custom-toast.success-toast')

Sumbit.addEventListener
('click',(e) => { 
   e.preventDefault() 
   showToast('successfully submitted','success',5000)});

let Failed = document.querySelector('.custom-toast.danger-toast')

Failed.addEventListener
('click', (e) => {
   e.preventDefault()
showToast('it failed!','failed',5000)});

let Information = document.querySelector('.custom-toast.info-toast')

Information.addEventListener
('click', (e) => {
   e.preventDefault() 
   showToast('click to get coins','info',5000)});

let Warning = document.querySelector('.custom-toast.warning-toast')

Warning.addEventListener
('click', (e) => {
   e.preventDefault()
   showToast('baaz ajaa','warning',5000)});