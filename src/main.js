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
    app.innerHTML = `    <div id="appHome">
        <nav>
            <div class="navclosed navicon"><img src="../src/assets/menu.png"></div>
            <h1 class="logo">Glenmalter</h1>
            <ul class="navigation">
                <li><a href="shop">Whisky</a></li>
                <li><a href="distillery">Distillery Experience</a></li>
                <li><a href="story">Story</a></li>
            </ul>
        </nav>
        <div class="mobilenav">
            <ul class="mobilenavigation">
                <a href="whisky"><li>Whisky</li></a>
                <a href="distillery"><li>Distillery Experience</li></a>
                <a href="story"><li>Story</li></a>
            </ul>
        </div>
        <div id="homeBanner">
            <div id="homeRight">
                <div id="homeRightText">
                    <h1>Whiskey with the finest depth</h1>
                    <hr>
                    <p>Our selected of whiskies from our finest Scotland distillery are breathtaking and sumptuous to taste.</p>
                    <button>Purchase whiskey</button>
                </div>
            </div>
        </div>
        <div id="mainContent">
            <section>
                <div class="sectionImg">
                    <img src="../src/assets/bottle2.jpg">
                </div>
                <div class="sectionText1">
                    <h2>Pleasing whiskeys</h2>
                    <hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <hr>
                    <button>Find it now</button>
                </div>
            </section>
            <section>
                <div class="sectionText1">
                    <h2>Lorem ipsum dolor</h2>
                    <hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <hr>
                    <button>Find it now</button>
                </div>
                <div class="sectionImg">
                    <img src="../src/assets/bottle3.jpg">
                </div>
            </section>
        </div>
        <div id="video">
            <video autoplay loop muted playsinline>
                <source src="../src/assets/video.mp4" type="video/mp4">
            </video>
            <div class="videoExplain">
                <h2>Take a step into OUR DISTILLERY</h2>
                <div class="videoExplain2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button id="distilleryBtn">Book now</button>
                </div>
            </div>
        </div>
        <div id="footer">
            <div class="footer-item footer-1">
                <h2>Contact us</h2>
                <p>1234 Whiskey Lane</p>
                <p>Scotland, UK</p>
                <p>Email:</p>
            </div>
            <div class="footer-item footer-2">
                <h2>Follow us</h2>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>
            <div class="footer-item footer-3">
                <h1 class="logo" id="logofooter">Glenmalter</h1>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>© 2026 Glenmalter. All rights reserved.</p>
            </div>
            <div class="footer-bottom">
                <p>Please drink responsibly.</p>
            </div>
        </div>
    </div>`; // load home page
// nav bar btn to open and close
const navbarburger = document.querySelector(".navicon");
const mobilenav = document.querySelector(".mobilenav");
let statusClosed = true;

navbarburger.addEventListener('click', function() {
    if (statusClosed) {
        statusClosed = false;
        mobilenav.classList.remove("navclosed");
        mobilenav.classList.add("navopen");
    } else if (!statusClosed) {
        statusClosed = true;
        mobilenav.classList.remove("navopen");
        mobilenav.classList.add("navclosed");
    }
})
  }
})



})
