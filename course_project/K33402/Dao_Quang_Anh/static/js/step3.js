const step3={template: `
<main class="pb-5 pt-4 d-flex flex-column">
      <form class="d-flex flex-column step-form p-4">
        <div class="d-flex flex-column align-items-center mb-5">
          <h1 class="mb-3"> Step 3: </h1>
          <span class="h2 mb-3"> Name your group </span>
          <span class="me-2 login-text">Choose a name that will give people a clear idea of what the group is about. Feel free to get creative! You can edit this later if you change your mind.  </span>
        </div>
        
        <div>
            <div class="d-flex mb-3">
                <div class="me-3">
                    <label> Group name:</label>
                    <input class="input-step3">
                </div>
                <div>
                    <label> Group members:</label>
                    <input class="input-step3">
                </div>
            </div>
            <div class="d-flex flex-column">
                <label> Introductions to your group:</label>
                <div class="ms-4 d-flex flex-column mb-2">
                    <span>1.What's the purpose of the group?</span>
                    <span>2.Who should join?</span>
                    <span>3.What will you do at your events?</span>
                </div>
                <textarea rows="5" cols="80" class="input-step3 big"></textarea>
            </div>        
        </div>
          <br>
      </form>
      <div width="100%" class="py-4 mt-3 bottom-nav">
        <div class="sections d-flex justify-content-between">
          <button class="prev-btn" @click="PrevPage()">Back</button>
          <button class="popup next-btn" @click="PopUp()">
            Finish
            <span class="popuptext" id="myPopup">
            You succesfully created a group!
            Check it out in your <a class="text-decoration-none text-viridian-1"href="/user.html">Profile </a>
            </span>
          </button>
        </div>
      </div>
</main>`,
methods:{
  PopUp(value){
    var popup = document.getElementById("myPopup");
    popup.innertext = value;
    popup.classList.toggle("show");
  },
  PrevPage(){
    this.$router.push({path:'/step1'})
  }
}
}