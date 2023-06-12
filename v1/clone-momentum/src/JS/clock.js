const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    if(hours>12){ hours-=12; }
    clock.innerText = `${hours}:${minutes}`;
}
getClock();
setInterval(getClock, 1000);

