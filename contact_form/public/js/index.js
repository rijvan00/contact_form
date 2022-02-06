const contactform = document.querySelector('.contact-form');

let username = document.getElementById('username')
let contact_no = document.getElementById('contact_no')
let email = document.getElementById('email')
let message = document.getElementById('message')

contactform.addEventListener('submit', (e)=>{
  e.preventDefault();

  let formData = {
    username: username.value,
    contact_no : contact_no.value,
    email: email.value,
    message : message.value

  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText == 'success'){
      alert('Email sent');
      username.value = '';
      contact_no.value = '';
      email.value = '';
      message.value = '';
    }
    else{
      alert("something went wrong");
    }
  }

xhr.send(JSON.stringify(formData));

})