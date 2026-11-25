
window.addEventListener('load', function () {

    const navbarburger = document.querySelector(".navicon");
    const mobilenav = document.querySelector(".mobilenav");
    let statusClosed = true;
        if (navbarburger && mobilenav) {
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

    });