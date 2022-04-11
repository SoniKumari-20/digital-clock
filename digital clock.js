let clock = document.querySelector("#out");
console.log("hello")
function time(){
    let hours = (new Date()).getHours();
    let minutes = (new Date()).getMinutes();
    let seconds = (new Date()).getSeconds();
   
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
    setTimeout("time()",500)
    clock.innerHTML=html;
}


time()
