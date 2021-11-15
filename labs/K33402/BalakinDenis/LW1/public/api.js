// получим все билеты
fetch(`/ticket`, {
    method: 'get',
})
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res.status);
    })
    .then(json => {
            render_ticket(json)
        }
    );

//получим контейнер формы
const formElement = document.forms.filter;
//вставим
formElement.innerHTML = `
    <div class="d-flex">
        <input name="start" type="text" class="ticket_input" placeholder="Откуда"/>
        <input name="end" type="text" class="ticket_input" placeholder="Куда"/>
        <input name="date-start" type="date" class="ticket_input" placeholder="Когда"/>
        <input name="date-end" type="date" class="ticket_input" placeholder="Обратно"/>
        <input name="count" type="number" class="ticket_input" placeholder="Пассажиров" />
    </div>
    <button type="submit" class="ticket_submit">Найти билеты</button>
`
formElement.onsubmit = function() {
    event.preventDefault();
    let url = `/ticket`;
    if (formElement.start.value &&formElement.end.value) {
        url += `?start.city_like=`+ formElement.start.value+`&end.city_like=`+formElement.end.value
    } else {
        if (formElement.end.value) {
            url+= `?end.city_like=`+formElement.end.value
        }
        if (formElement.start.value) {
            url+= `?start.city_like=`+ formElement.start.value
        }
    }

    console.log(url)
    fetch(url, {
        method: 'get',
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);
        })
        .then(json => {
                render_ticket(json)
            }
        );
}


function render_ticket(data) {
    const container = document.getElementById('all');
    let tickets = ""
    data.map(el => {
            tickets +=
                `<div class="card d-flex flex-row align-items-center mb-3" >
                    <img src=`+el.img+` class="w-25" alt="pobeda">
                    <div class="card-body">
                        <h4 class="card-title">`+el.name+`</h4>
                        <div class="d-flex justify-content-between align-items-center mt-4">
                            <div class="d-flex flex-column">
                                <h5 class="card-text">`+el.start.time+`</h5>
                                <p class="card-text">`+el.start.city+`,<br/>`+el.start.date+`, `+el.start.week+`</p>
                            </div>
                            <div class="d-flex ">
                                <p class="mr-2">`+el.start.airport+`</p>
                                <p>В пути `+el.time+`</p>
                                <p class="ml-2">`+el.end.airport+`</p>
                            </div>
                            <div class="d-flex flex-column">
                                <h5 class="card-text">`+el.end.time+`</h5>
                                <p class="card-text">`+el.end.city+`,<br/>`+el.end.date+`, `+el.end.week+`</p>
                            </div>
                        </div>
                        <div class="price d-flex justify-content-between align-items-center">
                            <span>Цена за билет: `+el.price+`</span>
                            <button class="btn text-white bg-orange" >Купить билет</button>
                        </div>
                    </div>
                </div>`
        })
    container.innerHTML=tickets
}
