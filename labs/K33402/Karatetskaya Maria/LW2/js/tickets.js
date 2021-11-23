async function getTickets() {
    const new_url = new URLSearchParams(window.location.search);
    let to = new_url.get(`to`);
    let date = new_url.get(`date`);
    let from = new_url.get(`from`);
    console.log(new_url);
    let url = `http://localhost:3000/tickets?from=${from}&to=${to}&date=${date}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    return data;
}
async function getPass(){
    const new_url = new URLSearchParams(window.location.search);
    let pass = new_url.get(`pass`);
    return pass;
}

async function sendTickets() {
    let tickets = await getTickets();
    let pass = await getPass();
    let html = "";
    let htmlDif = "";
    let htmlImg = "";
    console.log(pass);
    html += "<div class='title'><a>Билеты</a></div>";
    html += "<div class='row card-group form-fly'>";
    for (let i = 0; i < tickets.length; i++){
    if (tickets[i].pass >= pass){
    let price_all = pass * tickets[i].price;

    html += "<div class='col-lg-4 col-md-6 col-sm-12 col-card'>";
    htmlImg = `<div class='card'><img src='images/${tickets[i].to}.jpg' class='card-img-top' alt=''>`;
    html += htmlImg;
    html += "<div class='card-body'>";
    htmlDif = `<h5 class='card-title'>${tickets[i].from} - ${tickets[i].to}</h5>
    <p class='card-text'>Количество пассажиров - ${pass}</p>
    <p class='card-text'>Цена - ${price_all} руб</p>
    <p class='card-text'>Дата вылета - ${tickets[i].date}</p>
    <p class='card-text'>Время вылета - ${tickets[i].time}</p>`;
    html += htmlDif;
    html += "<button class='btn btn-primary little'><a href='#' data-toggle='modal' data-target='#myModal' >Купить</a></button></div></div></div>"
    }
    }
    html += "</div>"
    console.log(tickets);
    let container = document.querySelector('.tickets');
    container.innerHTML = html;
};

sendTickets();

