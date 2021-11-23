async function getTickets() {
    const new_url = new URLSearchParams(window.location.search);
    let to = new_url.get(`to`);
    let date = new_url.get(`date`);
    let from = new_url.get(`from`);
    console.log(from);
    let url = `http://localhost:3000/tickets?from=${from}&to=${to}&date=${date}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    return data;
}
async function sendTickets() {
    let tickets = await getTickets();
    if (!tickets) {
    console.log("нет");}
    let html = "<div class='container'> <h2 class='text-center'>Результаты поиска</h2></div>";
    let htmlSegment = ""
    if (tickets) {
        html += '<div class="container">';
        html += '<div class="row">';
        htmlSegment = `<div>
        <p>Откуда ${tickets[0].from}</p>
        <p>Куда ${tickets[0].to}</p>
        <p>Дата вылета ${tickets[0].date}</p>
        <p>Дата вылета ${tickets[0].price}</p>
        </div>`;
        html += htmlSegment;
        html += '</div>';
        html += '</div>';
    }
    console.log(tickets);
    let container = document.querySelector('.tickets');
    container.innerHTML = html;


};

sendTickets();

