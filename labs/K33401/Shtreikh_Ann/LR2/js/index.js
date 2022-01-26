function search() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let param = '?';
    if (from) {
        param += `from=${from}`
    }
    if (to) {
        param += `&to=${to}`
    }
    renderTickets(from, to);

}


async function getTickets(from, to) {
    let url = `http://localhost:3000/tickets?from=${from}&to=${to}`;
    let response = await fetch(url);
    let data = await response.json();
    if (data) {
        console.log(data);
        return data;
    } else {
        return null;
    }
}

async function renderTickets(from, to) {
    console.log(from + "" + to);
    let tickets = await getTickets(from, to);
    console.log(tickets);
    let html = "";
    let htmlDif = "";
    html += "<ul>";
    for (let i = 0; i < tickets.length; i++) {
        htmlDif = `<li class ='ticket'>
            <p class="mainTic">${tickets[i].from} - ${tickets[i].to}</p>
            <p class="difTic">${tickets[i].date}</p>
            <p class="difTic">${tickets[i].time}</p>
            <p class="mainTic">${tickets[i].price}</p>
            <button class="submit-button"  onclick="addToCard(${tickets[i].id})" ><a href ="profile.html">Купить</a></button>

        </li>`;
        html += htmlDif;
    }
    html += "</ul>";
    console.log(html);
    let container = document.getElementById("search-result");
    container.innerHTML = html
}


function addToCard(id) {
    let currentCard = localStorage.getItem("card");
    if (currentCard == null) {
        let array = [id];
        localStorage.setItem("card", JSON.stringify(array))
    } else {
        newArray = JSON.parse(currentCard);
        newArray.push(id);
        localStorage.setItem("card", JSON.stringify(newArray))
    }
}














