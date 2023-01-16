let submit = document.getElementById('my-form');
submit.addEventListener('submit', addData);

function addData(){
    let name = document.getElementById('name').value;
    localStorage.useName = name;
    
    let email = document.getElementById('email').value;
    localStorage.userEmail = email;
    
    let ph_no = document.getElementById('ph_no').value;
    localStorage.userPhone = ph_no;

    let date = document.getElementById('date').value;
    localStorage.userDate = date;
}