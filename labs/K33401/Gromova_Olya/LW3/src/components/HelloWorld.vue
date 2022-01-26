<template>
	<div class="container container-fluid">
		<nav class="navbar navbar-expand-lg navbar-light mt-1 ">    
			<a class="navbar-brand" href="index.html">
				<img src="images/logo.png" width="25" height="25">
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>    
		
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto menu_ul mb-2 mb-lg-0 ">
					<li class="nav-item menu_nav">
						<a class="nav-link active" href="index.html">Главная</a>
					</li>
					<li class="nav-item menu_nav">
						<a class="nav-link" href="ticket.html">Мои билеты</a>
					</li>
					<li class="nav-item menu_nav">
						<a class="nav-link" href="#">Контакты</a>
					</li>
					<li class="nav-item menu_nav log">
						<a class="nav-link"  href="login.html">Login</a>
					</li>
					<li class="nav-item menu_nav">
						<a class="nav-link" href="signup.html">Sign up</a>
					</li>
				</ul>
			</div>    
		</nav>
	</div>
	<main>
		<div class="container">
			<div class="col-12 col-lg-5">
				<form class="form-fly">
					<div class="mb-3">
						<input type="text" class="form-control" placeholder="Откуда">
					</div>
					<div class="mb-3">
						<input type="text" class="form-control" placeholder="Куда">
					</div>
					<div class="mb-3">
						<input type="date" class="form-control" placeholder="Когда">
					</div>

					<div class="mb-3">
						<select class="form-select form-select-lg form-control">
							<option selected>Пассажиры</option>
							<option value="1">1 Пассажир</option>
							<option value="2">2 Пассажира</option>
							<option value="3">3 Пассажира</option>
						</select>
					</div>
					<div class="mb-3">
						<select class="form-select form-select-lg form-control">
							<option selected>Класс</option>
							<option value="1">Бизнес-класс</option>
							<option value="2">Первый-класс</option>
							<option value="3">Эконом-класс</option>
						</select>
					</div>
					<a href="tickets.html" class="btn btn-primary show">Смотреть билеты</a>
				</form>
			</div>
			<div class="col-lg-7"></div>
		</div>
	</main>
	<footer>
		<div class="container mt-3">
			<div class="row">

				<div class="col-2 foot">
					<h5>Страны</h5>
					<p><a href="#">Россия     </a></p>
					<p><a href="#">Таиланд    </a></p>
					<p><a href="#">Черногория </a></p>
					<p><a href="#">Кипр       </a></p>
					<p><a href="#">Болгария   </a></p>
					<p><a href="#">Грузия     </a></p>
				</div>

				<div class="col-2 foot">
					<h5>Города</h5>
					<p><a href="#">Москва          </a></p>
					<p><a href="#">Санкт-Петербург </a></p>
					<p><a href="#">Симферополь     </a></p>
					<p><a href="#">Адлер           </a></p>
					<p><a href="#">Екатеринбург    </a></p>
					<p><a href="#">Лондон          </a></p>
				</div>

				<div class="col-2 foot">
					<h5>Авиакомпании</h5>
					<p><a href="#">Аэрофлот   </a></p>
					<p><a href="#">Air France </a></p>
					<p><a href="#">Alitalia   </a></p>
					<p><a href="#">Air Baltic </a></p>
					<p><a href="#">Emirates   </a></p>
					<p><a href="#">KLM        </a></p>
				</div>

				<div class="col-2 foot">
					<h5>Аэрапорты</h5>
					<p><a href="#">Шереметьево </a></p>
					<p><a href="#">Курумоч     </a></p>
					<p><a href="#">Домодедово  </a></p>
					<p><a href="#">Толмачево   </a></p>
					<p><a href="#">Владивосток </a></p>
					<p><a href="#">Гамбург     </a></p>
				</div>

				<div class="col-2 foot">
					<h5>Сервисы</h5>
					<p><a href="#">Карта низких цен </a></p>
					<p><a href="#">Блог             </a></p>
					<p><a href="#">Помощь           </a></p>
				</div>

				<div class="col-2 foot">
					<h5>Направления</h5>
					<p><a href="#">Москва – Симферополь       </a></p>
					<p><a href="#">Москва – Сочи              </a></p>
					<p><a href="#">Москва – Тиват             </a></p>
					<p><a href="#">Москва – Минеральные Воды  </a></p>
				</div>

			</div>
		</div>

		<div class="container">
			<div class="social-and-media">
				<a href="#"><i class="fa fa-vk">       <span>Вконтакте</span></i></a>
				<a href="#"><i class="fa fa-facebook"> <span>Facebook </span></i></a>
				<a href="#"><i class="fa fa-twitter">  <span>Twitter  </span></i></a>
				<a href="#"><i class="fa fa-instagram"><span>Instagram</span></i></a>
			</div>

			<p class="around">&copy; АвиаТикетс 2017-2021</p>

		</div>

	</footer>
</template>
<!-- --logo: url("public/images/logo.png"); -->
<style>
:root {
    --main-bg-img: url("../../public/images/light.jpg");
    --main-bg-color: #070a0c;
    --main-text-color: #070a0c;
    --footer-color: #E5E5E5;
    --main-text:#d1d4d6;
    --main-card-color:#E5E5E5;
    
    --border-color: #070a0c;
  
  }

body {
	background-image: var(--main-bg-img);
	color:var(--main-text);
}

.img{
	background-image: var(--logo);
}
.without{
	background:none;
	background-color: var(--main-bg-color);
}

a, .title  a{
	font: 18px "Montserrat";
	color: var(--main-text-color);
}

a:not([href]):not([class]){
	color: #ffffff;
}

h5{
	font: 18px "Montserrat";
	color: var(--main-text-color);
	margin-bottom: 16px;
}

.card-body p, p, .foot a, span{
	font: 14px "Montserrat";
	color: var(--main-text-color);
}


.card{
	width: 100%;
	max-width: 400px;
	height: 520px;
	background-color: var(--main-card-color);
	margin-left: auto;
		margin-right: auto;
		border-color:var(--border-color);
}
.navbar-brand{
	margin-top:-20px;
}

.active, .navbar-light .navbar-nav .nav-link.active{
	color:#3e8bd3;
}

.menu{
	margin-left: -200px;
}

.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link{
		color: var(--main-text-color);
}

.navbar-light .navbar-nav .nav-link:hover{
	color: #C4C4C4;
}
.show_btn{
	margin-top: 50px;
}

.form-control{
	background-color: #b2bfcc;
	border: none;
	border-radius: 10px;
	height: 60px;
	font: 24px "Montserrat";
	color: #3C3C3B;
}

.form-fly{
	margin-top:100px;
}

.btn{
	font: 24px "Montserrat";
	color: var(--main-text-color);
	padding-top: 15px;
	background-color: #3fa5e0;
	color: white;
	height: 60px;
	width:300px;
	border-radius: 30px;
	border: none;
	display: block;
	margin-left: auto;
	margin-right: auto;
}

.little{
	margin-bottom: 15px;
	padding-top: 10px;
	height: 40px;
	width:150px;
	font: 18px "Montserrat";
	position:absolute; 
	bottom:0;
	left: 0;
		right: 0;
}



.title a{
	font: 36px "Montserrat";
}
.title{
	margin-bottom:30px;
	text-align: center;
}

.around{
	text-align: center;
}

.login{

	display: block;
	margin-left: auto;
	margin-right: auto;
}

footer{
	
	height: 330px;
	background-color: var(--footer-color);
}
.foot{
	margin-top: 20px;
	padding-left: 10%;
	padding-right: auto;

}
.mt-3 {
		margin-top: 5rem!important;
}

.around {
	margin-top:20px;
}

.center{
	width: 500px; 
	margin: auto;
	margin-top: 20px;
	padding-bottom: 20px;
}

.center a{
	margin-right: 15px; 
}

.center ::before{
	margin-right: 10px; 
}

.menu_ul{
	padding-top: 2%; 
	margin-left: auto;
		margin-right: 0;
}

.me-auto {
		margin-right: 0!important;
		margin-rleft: auto!important;
}
.col-card{
	margin-bottom: 30px;
}

@media(max-width:1190px){
	.card{
		height: 450px;
	}
}

@media(max-width:1000px){
	.card{
		height: 480px;
	}
}

@media(max-width:974px) {
	.menu_nav{
		text-align: right;
		padding-top: 0em;
	}
	.navbar-nav {
		display: block;
		margin-top: 2%;
	}
	.menu_ul{
		top: 1em;
		right: 5em;
	}
	.navbar-toggler{
		position: absolute;
		right: 5%;
		top:2em;
	}
	.form-fly, .login{
		max-width: 500px;
		margin-left: auto;
			margin-right: auto;
	}
	.card{
		height: 440px;
	}
	
}

@media(max-width:750px){
	.card{
		height: 520px;
	}
}

@media(max-width:650px){
	.navbar-toggler{
		right: 3%;
	}

	.foot a{
		font: 12px "Montserrat";
	}

	h5{
		font:14px "Montserrat";
	}

	span{
		display: none;
	}

	.center, p.around{
	width: 200px; 
	}	
}


@media(max-width:445px){
	.card{
		height: 490px;
	}
}

@media(max-width:400px){
	.card{
		height: 460px;
	}
}

.log{
	padding-left: 10em;
}
</style>