let submit = document.getElementById('my-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let ph_no = document.getElementById('ph_no');
let date = document.getElementById('date');
submit.addEventListener('submit', addData);

let obj = [];
function addData(e){
    window.localStorage.clear();
    e.preventDefault();

    let name = e.target.name.value;
    let email = e.target.email.value;
    let ph_no = e.target.ph_no.value;
    let date = e.target.date.value;

    let myObj = {name, email, ph_no, date}
    obj.push(myObj);
    localStorage.setItem(email, JSON.stringify(obj));
    
    showOn(myObj);

}

function showOn(myObj){
    const parentele = document.getElementById('users');
    let li = document.createElement('li');
    li.textContent = myObj.name + ' - ' + myObj.email + ' - ' + myObj.ph_no + ' - ' + myObj.date;
    
    const dltbtn = document.createElement('input');
    dltbtn.type = 'button';
    dltbtn.value = 'Delete';
    dltbtn.className = 'btn';
    console.log(dltbtn);
    li.appendChild(dltbtn);
    parentele.appendChild(li);

    dltbtn.onclick = () => {
        localStorage.removeItem(myObj.email);
        parentele.removeChild(li);
    }
}





