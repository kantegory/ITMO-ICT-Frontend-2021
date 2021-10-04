let a = $("#show_hide_password a");
let input = $('#show_hide_password input');
let i = $('#show_hide_password i');
let a1 = $("#show_hide_password_confirm a");
let input1 = $('#show_hide_password_confirm input');
let i1 = $('#show_hide_password_confirm i');

function eye(a, input, i) {
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

eye(a, input, i);
eye(a1, input1, i1);


$(document).ready(function () {
    $("#searchInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#videoTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
