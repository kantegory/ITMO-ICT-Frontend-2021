const step1={template: `
<main class="pb-5 pt-4 d-flex flex-column">
  <form class="d-flex flex-column step-form p-4 pb-5">
    <div class="d-flex flex-column align-items-center mb-5">
      <h1 class="mb-3"> Step 1: </h1>
      <h2 class="mb-3"> Tell us your location </h2>
      <span class="me-2 login-text"> This will help us connect you with people in your area, 
      and more can join you online.</span>
    </div>
    
    <div>
      <div class="mb-3 fw-bold d-flex justify-content-around">
        <label for="Location" class="form-label h4">Choose your Location:</label>
        <form class="city-search">
          <input type="location" class="form input-step3" id="location" aria-describedby="location" placeholder="Search for a city">
        </form>
      </div>
    </div>
  </form>
  <div width="100%" class="py-4 mt-3 bottom-nav">
    <div class="sections d-flex justify-content-end">
      <button class="next-btn" @click="NextPage()">Next</button>
    </div>
  </div>
</main>`,
methods:{
  NextPage(){
    this.$router.push({path:'/step2'})
  }
}
}