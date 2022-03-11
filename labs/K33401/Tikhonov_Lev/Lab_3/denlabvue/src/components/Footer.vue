<template>
  <footer class="footer">
    <div class="footer-container">
      <div>
        <h2>Ваш аккаунт</h2>
        <a href="#">Войти</a>
        <a href="#">Регистрация</a>
        <a href="#">Справка</a>
        <div class="social-icons">
          <p>Подписаться на нас</p>
            <svg class="icon">
              <use xlink:href="#facebook"></use>
          </svg>
          <svg class="icon">
              <use xlink:href="#twitter"></use>
          </svg>
        </div>
      </div>
      <svg display="none" xmlns="http://www.w3.org/2000/svg">
        <symbol id="facebook" viewBox="0 0 49.652 49.652">
            <g>
                <path d="M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826
                    C49.652,11.137,38.516,0,24.826,0z M31,25.7h-4.039c0,6.453,0,14.396,0,14.396h-5.985c0,0,0-7.866,0-14.396h-2.845v-5.088h2.845
                    v-3.291c0-2.357,1.12-6.04,6.04-6.04l4.435,0.017v4.939c0,0-2.695,0-3.219,0c-0.524,0-1.269,0.262-1.269,1.386v2.99h4.56L31,25.7z
                    "/>
            </g>
        </symbol>
        <symbol id="twitter" viewBox="0 0 612 612">
            <g>
                <path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411
                    c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513
                    c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101
                    c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104
                    c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194
                    c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485
                    c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"/>
            </g>
        </symbol>
    </svg>
    <div class="social-icons">
      <div>
        <h2> Найти</h2>
        <a href="#">Группы</a>
        <a href="#">Календарь</a>
        <a href="#">Темы</a>
        <a href="#">Города</a>
        <a href="#">Онлайн-мероприятия</a>
        <a href="#">Местные гиды</a>
      </div>
    </div>
      <div>
        <h2> Meetup</h2>
        <a href="#">О компании</a>
        <a href="#">Блог</a>
        <a href="#">Meetup Pro</a>
        <a href="#">Работа</a>
        <a href="#">Приложения</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style>
.footer {
    background: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    text-align: center;
}

.footer-container {
    width: 85vw;
    margin: 0 auto;
    padding: 30px 0;
}

.footer-container p,
.footer-container a,
.footer-container span {
    opacity: 0.8;
}

.footer a {
    display: block;
    color: #fff;
    text-decoration: none;
}

.social-icons li {
    display: flex;
    flex-direction: column;
    transition: var(--transition);
    cursor: pointer;
}

.icon {
    fill: rgb(68, 0, 255);
    background: white;
    display: block;
    margin: 0 5px 0 0;
    width: 50px;
    height: 50px;
    border-radius:47%;
    transition: var(--transition);
    cursor: pointer;
}

.icon:hover {
    fill: rgb(8, 50, 129);
}

@media(min-width:900px) {
    .footer-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
}

@media(min-width: 1170px) {
    .footer {
        text-align: left;
    }

    .footer-container {
        grid-template-columns: repeat(4, 1fr);
    }

    .footer-container div:nth-child(1) p {
        padding-right: 20px;
    }
}

</style>
