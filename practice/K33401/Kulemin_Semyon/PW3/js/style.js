let style_button = document.querySelector('#style_button')
let is_light = true
style_button.addEventListener('click', function () {
    console.log('click', is_light)
    if (is_light) {
        document.querySelector('#theme_style').setAttribute('href', '../css/dark_theme.css')
        is_light = false
    } else {
        document.querySelector('#theme_style').setAttribute('href', '../css/light_theme.css')
        is_light = true
    }
})
