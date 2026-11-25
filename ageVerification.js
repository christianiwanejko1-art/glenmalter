function checkAgeVerification() {
    if (!document.cookie.includes("ageVerified=true")) {
        window.location.href = "age-verification.html";
        console.log('hello world')
    } 
}

window.addEventListener('load', function () {
    const btn = document.querySelector("#confirm");
    if (btn) {
        btn.addEventListener("click", function() {
            console.log('clicked');
            const yy = document.querySelector("#yy");
            if (yy.value <= 2008 && yy.value >= 1900){
                document.cookie = "ageVerified=true; max-age=86400; path=/";
                console.log(document.cookie);
                window.location.href = "index.html";
            }
        });
    }
});
