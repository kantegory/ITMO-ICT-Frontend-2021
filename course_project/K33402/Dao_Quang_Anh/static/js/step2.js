const step2={template: `
<main class="pb-5 pt-4 d-flex flex-column">
      <form class="d-flex flex-column step-form p-4">
        <div class="d-flex flex-column align-items-center mb-5">
          <h1 class="mb-3"> Step 2: </h1>
          <span class="h2 mb-3"> Describe your group </span>
          <span class="me-2 login-text"> Choose up to 5 tags from this list to describe your group</span>
        </div>
        
        <div>
          <div class="mb-4 fw-bold d-flex justify-content-start">
            <label class='me-3'>
              <input id="x" type="checkbox">
              <span class="checkbox py-2 fw-normal">Photography</span>
            </label>
            <label class='me-3'>
              <input id="x" type="checkbox">
              <span class="checkbox py-2 fw-normal">Web Design</span>
            </label>
            <label class='me-3'>
              <input id="x" type="checkbox">
              <span class="checkbox py-2 fw-normal">Python</span>
            </label>        
            <label class='me-3'>
              <input id="x" type="checkbox">
              <span class="checkbox py-2 fw-normal">Online Marketing</span>
            </label>   
            <label class='me-3'>
              <input id="x" type="checkbox">
              <span class="checkbox py-2 fw-normal">Drum Circle</span>
            </label>
          </div>
          <div class="mb-4 fw-bold d-flex justify-content-start">
            <label class='me-3'>
              <input id="x" type="checkbox">
              <span class="checkbox py-2 fw-normal">Language Exchange</span>
            </label>
            <label class='me-3'>
              <input id="x" type="checkbox">
              <span class="checkbox py-2 fw-normal">Toastmasters</span>
            </label>
            <label class='me-3'>
              <input id="x" type="checkbox">
              <span class="checkbox py-2 fw-normal">Outdoors</span>
            </label>        
            <label class='me-3'>
              <input id="x" type="checkbox">
              <span class="checkbox py-2 fw-normal">Online Marketing</span>
            </label>   
          </div>
          <div class="mb-4 fw-bold d-flex justify-content-start">
            <label class='me-3'>
              <input id="x" type="checkbox">
              <span class="checkbox py-2 fw-normal">Fantasy Writing</span>
            </label>
            <label class='me-3'>
              <input id="x" type="checkbox">
              <span class="checkbox py-2 fw-normal">Comedy Watching</span>
            </label>
            <label class='me-3'>
              <input id="x" type="checkbox">
              <span class="checkbox py-2 fw-normal">Singing</span>
            </label>        
            <label class='me-3'>
              <input id="x" type="checkbox">
              <span class="checkbox py-2 fw-normal">Birds</span>
            </label>   
          </div>

        </div>
          <br>
      </form>
      <div width="100%" class="py-4 mt-3 bottom-nav">
        <div class="sections d-flex justify-content-between">
          <button class="prev-btn" @click="PrevPage()">Back</button>
          <button class="next-btn" @click="NextPage()">Next</button>
        </div>
      </div>
</main>`,
methods:{
  NextPage(){
    this.$router.push({path:'/step3'})
  },
  PrevPage(){
    this.$router.push({path:'/step1'})
  }
}
}