/*
const ul=document.querySelector('.items');

ul.firstElementChild.textContent='HELLO';
ul.firstElementChild.style.background='green';
ul.children[1].style.background='yellow';   */

// CLICK EVENT

const btn=document.querySelector('.btn');

btn.addEventListener('click' ,(Event)=>{ 
    Event.preventDefault();
    console.log('click');
});   


// MOUSE OVER EVENT

const btn=document.querySelector('.btn');

btn.addEventListener('mouseover' ,(Event)=>{ 
    Event.preventDefault();
    document.querySelector('#my-form').computedStyleMap.background=
    '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  
    
});  

// MOUSE OUT 

const btn=document.querySelector('.btn');

btn.addEventListener('mouseout' ,(Event)=>{ 
    Event.preventDefault();
    document.querySelector('#my-form').computedStyleMap.background=
    '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  
    
});     

// VALUE IN THE FORM 
const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myForm.addEventListener('submit',onsubmit);

function onsubmit(Event){
    Event.preventDefault();
  //  console.log(nameInput.value);
  //  console.log(emailInput.value);

  if(nameInput.value==='' || emailInput.value===''){
    msg.classList.add('error');
    msg.innerHTML='please fill details';

  }else{
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} :${emailInput.value}`));
    userList.appendChild(li);
    nameInput.value='';
    emailInput.value='';
    console.log(li);
    console.log('wow...ARUN')
  }
}