setInterval(UpToTime ,1000);

function UpToTime(){
    const d = new Date();
    document.querySelector(".Time").innerHTML = d.getHours() + ": " + d.getMinutes() + ": " + d.getSeconds();
}