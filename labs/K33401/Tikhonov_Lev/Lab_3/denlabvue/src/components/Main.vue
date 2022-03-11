<template>
  <div id="overview">
    <div id="top">
      <h1>Meetup</h1>
      <h3>Погружайтесь! На Meetup есть множество интересных занятий</h3>
    </div>
    <div id="overview">
      <div class="img">
        <img src="https://secure-content.meetupstatic.com/images/next/images/indexPage/category1.jpg/360x200.jpg?w=1920"
          alt="">
        <span>Поиск новых людей</span>
      </div>
      <div class="img">
        <img src="https://secure-content.meetupstatic.com/images/next/images/indexPage/category2.jpg/360x200.jpg?w=1920"
          alt="">
        <span>Туризм</span>
      </div>
      <div class="img">
        <img src="https://secure-content.meetupstatic.com/images/next/images/indexPage/category3.jpg/360x200.jpg?w=1920"
          alt="">
        <span>Поиск людей интересующихся техникой</span>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    outline: none;
}
  #overview {
    display: flex;
    justify-content: space-between;
    background-blend-mode: multiply;
    background-color: #9e999e;
    background-size: cover;
    background-attachment: fixed;

    padding: 100px 0;
    width: 100%;
    text-align: center;
    color: #fff;
}

#overview h2 {
    font-size: 4em
}

#overview h4 {
    color: #ccc;
    font-size: 1.5em
}

@media (min-width: 561px) {
    #overview h2 {
        font-size: 4em
    }
}

@media (max-width: 560px) {
    #overview h2 {
        font-size: 2em
    }
}

#overview .img {
    width: 30%;
    margin-top: 50px;
}

#overview .img:nth-child(odd) {
    margin-left: 10%;
}

#overview span {
    width: 100%;
    font-size: 2em;
    margin-top: 10px;
}

@media (max-width: 700px) {
    #overview {
        width: 80% !important;
        margin-right: 0 !important;
        margin-left: 10% !important;
    }
}
</style>
