const ul = document.getElementById("shop");
const url = 'http://localhost:3000/posts';

window.onload = function() {
    fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            ul.innerHTML +=
                "<div class=\"col-md-6 col-lg-4 mb-2\">" +
                "<div class=\"card h-100\">" +
                "<img src=" + data[i].img + " class=\"card-img-top\">" +
                "<div class=\"card-body text-center\">" +
                "<h5 class=\"card-title\">" + data[i].title + "</h5>" +
                "<p class=\"card-text\">" + data[i].price + "</p>" +
                "</div></div></div>"
        }
        console.log(ul.innerHTML)
    }).catch(function (error) {
        console.log(error);
    });}
