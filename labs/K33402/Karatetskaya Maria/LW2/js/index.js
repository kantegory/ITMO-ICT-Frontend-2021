function search(){
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let date = document.getElementById("date").value;
    let ans = "tickets.html";
    let param = '?';
    if (from) {
    param += 'from=${from}'
    }
    if (to) {
    param += '&to=${to}'
    }
    if (date) {
    param += '&date=${date}'
    }
   window.location.href = ans + param;
}
