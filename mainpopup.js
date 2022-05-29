var startime, h,m,s;
var curr = false;
var tot, tot2;

// Call this when the pop-up is shown
// chrome.runtime.sendMessage({ cmd: 'GET_TIME' }, response => {
//     if (response.time) {
//       const time = new Date(response.time);
//       startTimer(time)
//     }
//   });
  
//   functions startTimer(time) {
//     if (time.getTime() > Date.now()) {
//       setInterval(() => {
//         // display the remaining time
//       }, 1000)
  
//     }
//   }
  
//   function startTime(time) {
//     chrome.runtime.sendMessage({ cmd: 'START_TIMER', when: time });
//     startTimer(time);
//   }

var element = document.getElementById("mybutton");

document.getElementById("mybutton").onclick = function (){
    h = document.getElementById("in1").value;
    m = document.getElementById("in2").value;
    s = document.getElementById("in3").value;
    console.log(h);
    tot = h*60*60*1000 + m*60*1000 + s*1000;
    if(h<0 || m <0 || s <0 || h=="" || m == "" || s ==""){
        chrome.runtime.sendMessage("Give correct values"); 
    }

    else chrome.runtime.sendMessage(tot);
}

setInterval(updateCountdown, 1000);
let bgpage = chrome.extension.getBackgroundPage();

function updateCountdown(){
    document.getElementById("hour").innerHTML = bgpage.hours;
    document.getElementById("minute").innerHTML = bgpage.minutes;
    document.getElementById("seconds").innerHTML = bgpage.seconds;
}



// var y = setInterval(timechk, 1000)
// function timechk(){
//     var ctime = new Date();
//     if(tot <= ctime - startime && curr == true){
//         console.log("It's time to grab a coffee :)")
//         chrome.runtime.sendMessage("It's time to grab a coffee :)");
//         curr = false;
//     }
// }

// function notification(){
//     chrome.notifications.create({
//         type: 'basic',
//         title: 'Test Message',
//         message: 'You are awesome!',
//         priority: 2
//     });
// }

