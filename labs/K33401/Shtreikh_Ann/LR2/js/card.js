async function getcard() {

    let card = localStorage.getItem("card");
    if (card != null) {
        let arrayCard = JSON.parse(card);
        let allData = [];
        for (let i = 0; i < arrayCard.length; i++) {
            let url = `http://localhost:3000/tickets?id=${arrayCard[i]}`;
            let response = await fetch(url);
            let data = await response.json();
            if (data) {
                console.log(data[0]);
                allData.push( data[0])
            } else {
                return null;
            }
        }
        console.log(allData);
        return allData

    }
}


async function renderCard() {
    let html = "";
    if (localStorage.getItem("card")==null){
        return
    }
    else {
        let tickets = await getcard();
        let htmlDif = "";
        html += "<ul>";
        for (let i = 0; i < tickets.length; i++) {
            htmlDif = `<li class ='ticket'>
            <p class="mainTic">${tickets[i].from} - ${tickets[i].to}</p>
            <p class="difTic">${tickets[i].date}</p>
            <p class="difTic">${tickets[i].time}</p>
            <p class="mainTic">${tickets[i].price}</p>
        </li>`;
            html += htmlDif;
        }
        html += "</ul>";
    }

    let container = document.getElementById("card");
    container.innerHTML = html
}
renderCard();
