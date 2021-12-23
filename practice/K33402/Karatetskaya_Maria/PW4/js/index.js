function search(){
    this.event.preventDefault()
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let date = document.getElementById("date").value;
    let pass = document.getElementById("pass").value;
    pass = pass.split()[0];
    let ans = "tickets.html";
    let param = '?';
    if (from) {
    param += `from=${from}`
    }
    if (to) {
    param += `&to=${to}`
    }
    if (date) {
    param += `&date=${date}`
    }
    if (pass) {
    param += `&pass=${pass}`
    }
   window.location.href = ans + param;
}
