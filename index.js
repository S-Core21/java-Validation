let form = document.getElementById('form')
let email = document.getElementById('email')
let notifyMe = document.getElementById('btn')
let error = document.getElementById('error')

let mailformat =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


form.addEventListener('submit', (e) =>{
    let email1 = email.value
   

   if(!email1.match(mailformat)){
    e.preventDefault();
    error.textContent = 'Please provide a valid email'
   
   }
    if(email1 == ''){
        e.preventDefault();
    error.textContent = 'Please provide a valid email'
   }
})





    