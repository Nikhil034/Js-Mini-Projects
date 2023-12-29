var arr = [
    {
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDei542hqFL_Qg2bCQw2to6AZOZaa6c3NR3A&usqp=CAU",
        story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4y9K5XyUcwhfhPGetb8WkI64RX7-i2Z5XQ&usqp=CAU"
    },
    {
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfgWMjBo8h6L_PUupQ42f-QwFvWCoh8nCXg&usqp=CAU",
        story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6gJgIRCIYxpIXQ-g0gXkyD_A1D2QinAqoXg&usqp=CAU"
    },
    {
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOMdpmbbRGP0UB7FMfccgr78-FRGf3HUPRQ&usqp=CAU",
        story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQySKsDvQd6E6uGpJ78gIQ0etdUc_0HLtiRnA&usqp=CAU"
    },
    {
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3OpZd8ENE0_8JQfSLqRH0AWyu4EKPheqZbg&usqp=CAU",
        story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1BAmCtbcvEB22ahpFhkmr7uabv6VLohfrw&usqp=CAU"
    },


]

var clutter = "";
var storyia = document.querySelector("#storyia");

arr.forEach(function (ele, idx) {
    clutter += `<div class="story">
    <img id="${idx}" src="${ele.dp}" alt="profile">
</div>`;
});

storyia.innerHTML = clutter;

storyia.addEventListener("click", function (dets) {

    // console.log(arr[dets.target.id].story);

    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function () {
        document.querySelector("#full-screen").style.display = "none";
    }, 3000);

});