let clock = document.querySelector("#out");
setInterval(()=>{
    let [hours,minutes,seconds] = new Date().toLocaleTimeString().split(":")
    seconds = seconds.split(" ")[0]
    hours = (hours<10) ? "0" + hours : hours;
    minutes  = (minutes <10) ? "0" + minutes : minutes ;
    seconds = (seconds<10) ? "0" + seconds : seconds;

    let html = `<div id="outer">
    Digital clock 
    <div id="nextouter"> 
        <div id="in"><span>${hours}</span></div>:
        <div id="inner"><span>${minutes}</span></div>:
        <div id="innerr"><span> ${seconds}</span></div>
    </div>
    </div>
    `
    clock.innerHTML=html;

},1000)