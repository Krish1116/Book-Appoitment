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
    document.rst.reset();
     
}

function showOn(myObj){
    const parentele = document.getElementById('users');
    let li = document.createElement('li');
    li.textContent = myObj.name + ' - ' + myObj.email + ' - ' + myObj.ph_no + ' - ' + myObj.date;
    
    const dltbtn = document.createElement('input');
    dltbtn.type = 'button';
    dltbtn.value = 'Delete';
    dltbtn.className = 'button';
    // console.log(dltbtn);
    li.appendChild(dltbtn);
    parentele.appendChild(li);

    dltbtn.onclick = () => {
        localStorage.removeItem(myObj.email);
        parentele.removeChild(li); 
    }
    
    const edtbtn = document.createElement('input');
    edtbtn.type = 'submit';
    edtbtn.value = 'Edit';
    edtbtn.className = 'button-3';
    edtbtn.id = 'myId'
    // console.log(li);
    
    
    // edtbtn.onclick = (ev) => {

    //     localStorage.removeItem(myObj.email);
    //     parentele.removeChild(li);

    //     document.getElementById('name').value = name;
    //     document.getElementById('email').value = email;
    //     document.getElementById('ph_no').value = ph_no;
    //     document.getElementById('date').value = date;
    // }
    li.appendChild(edtbtn);

    edtbtn.addEventListener('click', function() {
        // li.contentEditable = true;
        // myObj.style.backgroundColor = '#dddbdb';
        localStorage.removeItem(myObj.email);
        parentele.removeChild(li);

        document.getElementById('name').value = name;
        document.getElementById('email').value = email;
        document.getElementById('ph_no').value = ph_no;
        document.getElementById('date').value = date;
    })
 
}




