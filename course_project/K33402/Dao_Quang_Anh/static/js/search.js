// seatgeek
// MjQzNjQyMTl8MTYzNjQ4NDc0Ni44MzY0Njc3
// ----
// pixabay
// 24339880-ad2e916d540f2e061b8fd1194

const search = document.getElementById('search-button');

search.addEventListener('click', Search);

function Search(){
    let query = document.getElementById('input').value.trim();
    let query2 = document.getElementById('input2').value.trim();
    let x = document.getElementById("option-1");
    let y = document.getElementById("option-2");
    if (x.checked == true)
    {
        if (query && query2) {
            fetch(`https://api.seatgeek.com/2/events?client_id=MjQzNjQyMTl8MTYzNjQ4NDc0Ni44MzY0Njc3&q=${query}&venue.city=${query2}`)
            .then(response => response.json())
            .then(data => {
                let html = "";
                if(data.events){
                    data.events.forEach(e => {
                        let eType = (e.type).replaceAll("_"," ");
                        eType = eType[0].toUpperCase() + eType.substring(1,);

                        html += `
                            <div class="d-flex events" id = ${e.id}>
                                <img class="search-image m-1" src="${e.performers[0].image}" alt="event">
                                <div style="width:100%" class="d-flex flex-column justify-content-evenly ms-2">
                                        <span class="fw-bold search-time"> ${e['datetime_utc'].split('T')[0]} @ ${e['datetime_utc'].split('T')[1]}</span>
                                        <span class="fw-bold search-name">${e['venue']['name']} </span>
                                        <span class="fw-normal search-type-location-member-icon"> ${eType} . ${e['venue']['city']}, ${e['venue']['country']}</span>
                                        <div class='d-flex justify-content-between search-result-description'>
                                            <span class="fw-normal search-type-location-member-icon">${e['venue']['id']} attendees</span>
                                            <svg style="margin-right:10px" class="search-type-location-member-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                                                <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                            </svg> 
                                        </div>
                                    </div>
                            </div>
                            <hr style="border-top: solid 1px white;">
                        `
                    });
                }
                e.innerHTML = html;
            });
        } else {
            fetch(`https://api.seatgeek.com/2/events?client_id=MjQzNjQyMTl8MTYzNjQ4NDc0Ni44MzY0Njc3&q=${query}+${query2}`)
            .then(response => response.json())
            .then(data => {
                let html = "";
                if(data.events){
                    data.events.forEach(e => {
                        let eType = (e.type).replaceAll("_"," ");
                        eType = eType[0].toUpperCase() + eType.substring(1,);

                        html += `
                            <div class="d-flex events" id = ${e.id}>
                                <img class="search-image m-1" src="${e.performers[0].image}" alt="event">
                                <div style="width:100%" class="d-flex flex-column justify-content-evenly ms-2">
                                        <span class="fw-bold search-time"> ${e['datetime_utc'].split('T')[0]} @ ${e['datetime_utc'].split('T')[1]}</span>
                                        <span class="fw-bold search-name">${e['venue']['name']} </span>
                                        <span class="fw-normal search-city"> ${eType} . ${e['venue']['city']}, ${e['venue']['country']}</span>
                                        <div class='d-flex justify-content-between search-result-description'>
                                            <span class="fw-normal search-city">${e['venue']['id']} attendees</span>
                                            <svg class="svg-search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                                                <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                            </svg> 
                                        </div>
                                    </div>
                            </div>
                            <hr>
                        `
                    });
                }
                e.innerHTML = html;
            });
        }
    } else {
        fetch(`https://pixabay.com/api/?key=24339880-ad2e916d540f2e061b8fd1194&q=${query}+${query2}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if(data.hits){
                data.hits.forEach(e => {
                    html += `
                        
                        <div class="d-flex groups id=${e.id}">
                            <div class="search-image me-2">
                                <img class="search-image m-1" src="${e.webformatURL}" alt="group">
                            </div>
                            <div style="width:100%" class="d-flex flex-column justify-content-evenly ms-2">
                                <div class="d-flex">
                                    <span style="color: black;" class="fw-bold me-2 group-color">${e.user}</span>
                                    <div class="group-members">
                                        <i class="fa fa-user"> ${e.collections}</i>
                                    </div>
                                </div>
                                <i class="fa fa-thumbs-up group-color">: ${e.likes}</i>
                                <i class="fa fa-eye group-color">: ${e.views}</i>
                                <div class='d-flex justify-content-between search-result-description group-color'>
                                    <span> Tags: ${e.tags}</span>
                                    <svg style="color:rgb(104, 91, 91);margin-right:10px" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                                        <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                    </svg> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                    `
                });
            }
            e.innerHTML = html;
        });
    }
}