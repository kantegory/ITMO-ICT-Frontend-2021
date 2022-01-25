<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
  .row {
  display: flex;
  align-content: space-around;
  justify-content: space-around;
  padding: 0 4px;
  margin-top: .25rem;
  }

  .unwrapped{
    display: flex;
    flex-wrap: nowrap;
  }

  .wrapped{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .wrapped img{
    width: 100px;
  }

  .row img{
    margin-top: 8px;
    border-radius: 10px;
  }

  .col img {
    margin-top: 8px;
    border-radius: 10px;
  }

  .col{
    padding: 0 5px;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .image {
    margin-left: 10%;
    margin-right: 1rem;
    margin-top: 0;
    border-radius: 10px;
    box-shadow: 0 0 5px 5px rgba(0,0,0, .25);
    width: 70%;
  }

  body {
    font: 20px "URW Chancery L";
    background-color: #3ea2c7;
  }

  .card-centered{
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
  }

  .content {
    margin-top: 7%;
    margin-right: 20%;
    margin-left: 20%;
    margin-bottom: 7%;
    background-color: #fff;
    padding: 2rem 1rem 2rem 1rem;
    box-shadow: 0 0 5px 5px rgba(0,0,0, .25);
    border-radius: 10px;
  }

  .tablet{
    margin-top: 1%;
    margin-bottom: 1%;
  }

  a {
   font: 20px "URW Chancery L";
   color: #3C3C3B;}

  span{
   font: 14px "URW Chancery L";
   color: #fff;
  }

  .active{
   color:#479683;
  }

  .form-control-cool{
    display: block;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-color: #ccddeb;
    border-style: solid;
    border-width: 0 0 1px 0;
    padding: 0;
    border-radius: 5px;
    height: auto;
    font: 18px "URW Chancery L";
    color: #111212;
    background-clip: padding-box;
  }

  .form-control-cool:focus{
    color: #111212;
    background-color: #fff;
    border-color: #dae9f5;
    border-width: 0 0 2px 0;
    outline: 0;
    box-shadow: none;
  }

  .kicker{
    margin-bottom: .5rem;
    margin-top: .5rem;
    margin-right: .5rem;
    font-size: 1.25rem;
  }

  .btn-class{
    margin-top: 1rem;
    border-color: #e09e04;
    color: #e09e04;
  }
  .btn-class:hover{
    background-color: #e09e04;
  }

  input[type="checkbox"] {
    margin-top: 15px;
    width: 15px;
    height: 15px;
  }

  .card{
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding: 1rem 1rem;
    font: 14px "URW Chancery L";
    border-radius: 10px;
    vertical-align: space-between;
  }

  .card-img-top{
    border-radius: 10px;
  }

  p{
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 17px;
    align-self: center;
  }

  h5{
    font: 16px "URW Chancery L";
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .team{
    margin: 50px 0;
  }

  h1{
    text-align: center;
    letter-spacing: 2px;
  }

  .center{
    width: 350px;
    margin: auto;
    margin-top: 1px;
    padding-bottom: 5px;
  }

  .icon{
    display: block;
    width: 60px;
    height: 60px;
  }

  .icon:hover{
    fill: #e09e04;
  }

  .progile{
    margin-top: 25px;
  }

  .profile .img-box{
    opacity: 1;
    display: block;
    position: relative;
  }

  .profile h2{
    margin-top: 10px;
    font-size: 22px;
  }

  .profile h3{
    font-size: 15px;
  }

  .img-box:after{
    content: '';
    opacity: 0;
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;

  }

  .img-box ul{
    margin: 0;
    padding: 20px 0;
    position: absolute;
    z-index: 1;
    bottom: 0;
    display: block;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
  }

  .img-box ul li{
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin: 1px;
    padding: 3px;
  }

  .img-box a{
    color: #fff;
  }

  .img-box:hover:after{
    opacity: 1;
  }

  .img-box:hover ul{
    opacity: 1;
  }

  .slick-slide{
      margin: 0 20px;
  }

  .slick-slide img{
    width: 150px;
  }

  .slick-slider{
      position: relative;
      display: block;
      box-sizing: border-box;
  }
  .slick-list{
      position: relative;
      display: block;
      overflow: hidden;
      margin: 0;
      padding: 0;
  }
  .slick-track{
      position: relative;
      top: 0;
      left: 0;
      display: block
  }
  .slick-slide{
      display: none;
      float: left;
      height: 100%;
      min-height: 1px;
  }
  .slick-slide img{
      display: block;
  }
  .slick-initialized .slick-slide{
      display: block;
  }
  .copy{
      padding-top: 250px;
  }
</style>
