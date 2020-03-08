console.log("hello world");
const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');

const elementDiv = document.querySelector('.messages');
loadingElement.style.display='none';
const API_URL = 'http://localhost:5000/mews';
form.addEventListener('submit',(event)=> {
    event.preventDefault();
    elementDiv.textContent = '';
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content'); const mew = { name,content }; //console.log(mew);
    form.style.display='none'; loadingElement.style.display='';
    fetch(API_URL,{method: 'POST',body: JSON.stringify(mew),headers: {
        'content-type': 'application/json'
    }}).then(response => response.json()).then(crt => {
        console.log(crt);
        form.reset();
        setTimeout(function(){
            form.style.display=''; loadingElement.style.display='none'; listallmess();
                             }, 1000);
        
        //form.style.display='';
    });
});

function listallmess(){
    elementDiv.textContent = '';
    fetch(API_URL).then(response => response.json()).then(mess => {
        console.log(mess);
        mess.reverse();
        mess.forEach( m => {
            const div = document.createElement('div');
            const header = document.createElement('h3');
            header.textContent = m.name;
            const contents =document.createElement('p');
            contents.textContent = m.content;
            const datecreated = document.createElement('small');
            datecreated.textContent = new Date(m.created);
            header.style.left = '10px';
            div.appendChild(header);
            div.appendChild(contents);
            div.appendChild(datecreated);
            div.style.backgroundColor = "black";
            div.style.color = 'red';
            div.style.margin = '20px';
            div.style.borderRadius = '4px';
            elementDiv.appendChild(div);
        });
    });
    
}
//listallmess();
