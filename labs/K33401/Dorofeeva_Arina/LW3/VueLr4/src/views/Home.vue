<template>
  <Header>
    <nav class="navbar navbar-expand-md bg-custom sticky-top">
      <div class="container-fluid">
        <a href="#" class="navbar-brand">
          <div class="assets"></div>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a href="#" class="nav-link">axolotl</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">axolotl & jabka</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </Header>

  <!-- слайдер -->
  <div class="carousel slide" data-ride="carousel" id="slides">
    <ul class="carousel-indicators">
      <li data-target="#slides" data-slide-to="0" class="active"></li>
      <li data-target="#slides" data-slide-to="1"></li>
      <li data-target="#slides" data-slide-to="2"></li>
    </ul>
    <div class="carousel-inner carousel-size">
      <div class="carousel-item active carousel-item-size">
        <div class="assets slide1"></div>
        <div class="carousel-caption">
          <h1 class="display-2">axolotl</h1>
          <br><br>
          <div class="sign">
            <a href="/sign-up" class="btn btn-outline-light btn-lg">register</a>
            <a href="/sign-in" class="btn btn-dark btn-lg">sign in</a>
          </div>
        </div>
      </div>
      <div class="carousel-item carousel-item-size">
        <div class="assets slide2"></div>
      </div>
      <div class="carousel-item carousel-item-size">
        <div class="assets slide3"></div>
      </div>
    </div>
  </div>

  <!-- основной блок -->
  <main class="container-fluid">
    <div class="row jumbotron">
      <div class="col-md-9 col-lg-9 col-xl-10">
        <p class="lead">The Ambystoma mexicanum, commonly known as the axolotl has the impressive ability to
                        regenerate multiple body parts. However the molecular mechanisms underlying regeneration
                        remain poorly
                        understood at the molecular level. Here we describe a method creating a spinal cord injury
                        in the
                        axolotl and for manipulating microRNAs in vivo in the axolotl spinal cord. This technique
                        can be adapted
                        for altering gene expression using small moleucles like morpholinos or siRNAs into other
                        tissues in the
                        axolotl including limb and tail blastemas. The ability to spatially and temporally test gene
                        function in
                        vivo is an important technique that will help to elucidate the hierarchy of gene function
                        during
                        regeneration.</p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
        <a href="https://www.sciencedirect.com/topics/immunology-and-microbiology/ambystoma-mexicanum#:~:text=The%20Ambystoma%20mexicanum%2C%20commonly%20known,understood%20at%20the%20molecular%20level.">
          <button class="btn btn-dark btn-lg" type="button">read more</button>
        </a>
      </div>
    </div>
  </main>

  <!-- блок с описанием -->
  <div class="container-fluid">
    <div class="text-center alert">
      <div class="col-12">
        <h2 class="display-4">AMBYSTOMA</h2>
      </div>
      <hr>
      <div class="col-12">
        <p class="lead">Axolotls are unusual among amphibians in that they reach adulthood without undergoing
                        metamorphosis. </p>
      </div>
    </div>
  </div>

  <!-- блок с разновидностями -->
  <div class="container-fluid padding">
    <div class="row text-center padding cards">
      <div class="col-xs-12 col-sm-6 col-md-4">
        <svg>
          <use xlink:href="../assets/sprites.svg#ambystoma_mexicanum">
          </use>
        </svg>
        <h3>ambystoma mexicanum</h3>
        <p>Axolotls have four pigmentation genes; when mutated they create different color variants. The normal
           wild-type animal is brown/tan with gold speckles and an olive undertone. The five more common mutant
           colors are leucistic, golden albino, xanthic, albino in which is more common in axolotls than some
           other creatures and melanoid.</p>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
        <svg>
          <use xlink:href="../assets/sprites.svg#ambystoma_tigrinum">
          </use>
        </svg>
        <h3>ambystoma tigrinum</h3>
        <p>The adult tiger salamander is a thick-bodied creature generally with yellow blotches or spots against a
           black background. Once in a while there will be one with blotches that are tan or olive green in color.
           The spots or blotches are never in any set shape, size or position. Actually you may even be able to
           tell its origin by the color and pattern of the background and spots.</p>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
        <svg>
          <use xlink:href="../assets/sprites.svg#ambystoma_andersoni">
          </use>
        </svg>
        <h3>ambystoma andersoni</h3>
        <p>Anderson's salamander is a neotenic salamander from Zacapu Lagoon in the Mexican
           state of Michoacán. This salamander is a relatively recent discovery, first described by Branden and
           Krebs in 1984. The mature salamander has medium-sized external gills with bright red filaments, and a
           prominent caudal fin. It has a large head and small limbs, as do the larvae.</p>
      </div>
    </div>
    <hr class="my-4">
  </div>

  <!-- секция с песенкой и гифкой -->
  <div class="container-fluid padding">
    <div class="row padding">
      <div class="offset-lg-2 col-lg-4">
        <h2>axolotl song</h2>
        <p>
          I used to be an axolotl, I did what axolotls do
        </p>
        <p>
          I breathe through gills, my skin was mottled, I know you won't believe it's true
        </p>
        <p>
          But then one day I found a bottle filled with salamander goo
        </p>
        <p>
          I drank a little, then a lotl. I necked the whole ungodly brew
        </p>
        <p>
          -nc-
        </p>
        <p>
          Now I'm a...
        </p>
        <br>
        <a href="https://ukutabs.com/r/rathergood/the-axolotl-song-dream-precious-jewel-amor/" class="btn btn-dark">
          read more</a>
      </div>
      <div class="col-lg-6">
        <br>
        <img src="https://c.tenor.com/S--rt90BQa0AAAAC/axolotl.gif" class="assets-fluid" alt=""/>
      </div>
    </div>
  </div>

  <!-- секция с фиксированнымм изображением -->
  <figure>
    <div class="fixed-wrap">
      <div id="fixed">
        <h1 class="text-center" id="outline-text">sign in to watch awesome axolotl videos!</h1>
        <br><br>
        <div class="text-center sign">
          <a href="/sign-up" class="btn btn-light border-dark btn-lg">register</a>
          <a href="/sign-in" class="btn btn-dark btn-lg">sign in</a>
        </div>
      </div>
    </div>
  </figure>

  <!-- закрытая секция -->
  <div class="text-center">
    <button type="button" id="gifsBtn" class="btn btn-dark btn-lg" data-toggle="collapse" data-target="#gifs">
      gifs
    </button>
  </div>
  <div id="gifs" class="collapse">
    <div class="container-fluid padding">
      <div class="row text-center">
        <div class="col-sm-6 col-md-3">
          <img src="../assets/gif1.gif" class="gif" alt=""/>
        </div>
        <div class="col-sm-6 col-md-3">
          <img src="../assets/gif2.gif" class="gif" alt=""/>
        </div>
        <div class="col-sm-6 col-md-3">
          <img src="../assets/gif3.gif" class="gif" alt=""/>
        </div>
        <div class="col-sm-6 col-md-3">
          <img src="../assets/gif4.gif" class="gif" alt=""/>
        </div>
      </div>
    </div>
  </div>

  <Footer/>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header"

export default {
  name: 'Home',
  components: {
    Footer,
    Header
  }
}
</script>


<style lang="scss">


</style>
