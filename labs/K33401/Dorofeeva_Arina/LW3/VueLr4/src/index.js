export function eye(a, input, i) {
    a.on('click', function (event) {
        event.preventDefault();
        if (input.attr("type") === "text") {
            i.attr('type', 'password');
            i.removeClass("fa-eye");
            i.addClass("fa-eye-slash");
        } else if (input.attr("type") === "password") {
            input.attr('type', 'text');
            i.removeClass("fa-eye-slash");
            i.addClass("fa-eye");
        }
    });
}

// my page
let videoTable = document.getElementById("videoTable");

export function loadVideos() {
    fetch("http://localhost:3000/videos/")
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            console.log(data)
            for (let index = 0; index < data.length; index++) {
                videoTable.innerHTML +=
                    "<tr><td class=\"p-5 w-25\">" + data[index].tags + "</td>" +
                    "<td><div class=\"card pull-right\"><div class=\"card-body\">" +
                    "<div class=\"embed-responsive embed-responsive-16by9\">" +
                    "<iframe src=" + data[index].src +
                    " allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n" +
                    "allowfullscreen></iframe></div></div></div></td></tr>"
            }
            console.log(videoTable.innerHTML);
        }).catch((error) => {
        console.log("ERROR: " + error);
    });
}

export function search() {
    $(document).ready(function () {
        $("#searchInput").on("keyup", function () {
            let value = $(this).val().toLowerCase();
            $("#videoTable tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
}

// images
let imagesPost = document.getElementById("imagesPost");

export function loadPost(query) {
    fetch("https://api.pexels.com/v1/search?query=" + query, {
        headers: {
            Authorization: "563492ad6f91700001000001623d28b6e2b2462b938cc0a3cd1ca298"
        }
    })
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            console.log(data)
            for (let index = 0; index < data.photos.length; index++) {
                imagesPost.innerHTML +=
                    "<img class='mt-3 mb-3 col-3 mx-auto' src='" + data.photos[index].src.original + "'>"
            }
            console.log(imagesPost.innerHTML);
        }).catch((error) => {
        console.log("ERROR: " + error);
    });
}
