// let submit = document.getElementById('my-form');
// submit.addEventListener('submit', addData);

// function addData(e){
//     e.preventDefault();
    // const name = e.target.name.value;
//     const email = e.target.email.value;
//     const ph_no = e.target.ph_no.value;
//     const date = e.target.date.value;
    // localStorage.setItem('name', name)
    // localStorage.setItem('email', email)
//     localStorage.setItem('ph_no', ph_no)
//     localStorage.setItem('date', date)
// }

let submit = document.getElementById('my-form');
submit.addEventListener('submit', addData);

function addData(e){
    window.localStorage.clear();
    e.preventDefault();

    let name = document.getElementById('name').value;
    localStorage.useName = name;
         
    let email = document.getElementById('email').value;
    localStorage.userEmail = email;
    
    let ph_no = document.getElementById('ph_no').value;
    localStorage.userPhone = ph_no;

    let date = document.getElementById('date').value;
    localStorage.userDate = date;
    // console.log(localStorage);

    let obj = {
        name,
        email,
        ph_no,
        date
    }

    let obj_serialized = JSON.stringify(obj); //converting it into some form of readable data
    console.log(obj_serialized);

    localStorage.setItem('myObj', obj_serialized);
    // console.log(localStorage.length);

    // let obj_deserialized = JSON.parse(localStorage.getItem(obj));
    // console.log(obj_deserialized);

    // let val = Object.values(obj);
    // console.log(val);
    // document.getElementById('users').innerHTML = val;
     
        const parentele = document.getElementById('users');

        // parentele.innerHTML = parentele + `<li> ${obj.name} - ${obj.email} - ${obj.ph_no} - ${obj.date} </li>`
        // let li = document.createElement('li');
        // console.log(li);
        // li.textContent = obj.name +  ' - ' + obj.email + ' - ' + obj.ph_no + ' - ' + obj.date;
        // parentele.appendChild(li);
        // console.log(parentele);
}





