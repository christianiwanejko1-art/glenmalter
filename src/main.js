window.addEventListener('load', function () {

const app = document.getElementById('app');
if (document.cookie.includes("ageVerified=true")) {
  // laod home page
  app.innerHTML = '<p>laoded home page</p>';
} else {
app.innerHTML =  `<div id="verifyHome">
      <div id="verificationCard">
          <h1 class="verifyInfo">Glenmalter</h1>
          <h2 class="verifyInfo verifyApp">Please enter your date of birth.</h2>
          <div class="verifyInfo" id="verifyForm">
              <input type="number" id="dd" placeholder="DD" min="1" max="31">
              <input type="number" id="mm" placeholder="MM" min="1" max="12">
              <input type="number" id="yy" placeholder="YY" min="1900" max="2026">
          </div>
          <div class="verifyInfo" id="verifyConfirm">
              <button id="confirm">Confirm & Continue</button>
          </div>
          <div class="verifyInfo" id="terms">
              <p>By continuing, you agree to our Terms of Service and Privacy Policy.</p>
          </div>
      </div>
  </div>`
}


const confirmAgeBtn = document.getElementById('confirm');
confirmAgeBtn.addEventListener('click', function(){
  const yy = document.getElementById('yy');
  if (yy.value <= 2008 && yy.value !== "" && yy.value >= 1900){
    // load site/home page
    // document.cookie = "ageVerified=true; max-age=86400; path=/"; // store cookie age verified
    app.innerHTML = '<p>loaded home page</p>'; // load home page
  }
})

})