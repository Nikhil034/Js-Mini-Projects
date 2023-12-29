const istatus = document.querySelector("h5");
const btnclick = document.querySelector("#add");
let flag = 0;


btnclick.addEventListener("click", function () {

    if (flag == 0) {
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        btnclick.innerHTML = "Unfollow";
        flag++
    }
    else {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        btnclick.innerHTML = "Follow";
        flag--;
    }
});

