document.addEventListener("DOMContentLoaded", ()=>{
    const signInForm=document.querySelector('#sign-in')
    const signUpForm=document.querySelector('#sign-up')
    document.querySelector('#sign-in-link').addEventListener('click', e=>{
        e.preventDefault();
        signInForm.classList.add("form--hidden")
        signUpForm.classList.remove("form--hidden")
    })
    document.querySelector('#signup-link').addEventListener('click', e=>{
        console.log(signUpForm)
        e.preventDefault();
        signUpForm.classList.add("form--hidden")
        signInForm.classList.remove("form--hidden")
    })
})
toggleMenu = () => {
    const menu = document.getElementById('list-menu')
    const button = document.getElementById('btn-menu')
    menu.classList.toggle('active')
    button.classList.toggle('active')
}
toggleLogin=()=>{
    const ref=document.getElementById('login-ref')
    const menu=document.getElementById('login-menu')
    const resMenu=document.getElementById('list-menu')
    const menuButton = document.getElementById('btn-menu')
    const filterMenu=document.getElementById('filter-menu')
    menu.classList.toggle('active')
    ref.classList.toggle('active')
    resMenu.classList.remove('active')
    menuButton.classList.remove('active')
    filterMenu.classList.toggle('not-active')
}