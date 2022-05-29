chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.get(["blocked", "enabled"], function (sync) {
        if (!Array.isArray(sync.blocked)) {
            chrome.storage.sync.set({ blocked: [] });
        }
  
        if (typeof sync.enabled !== "boolean") {
            chrome.storage.sync.set({ enabled: false });
        }
    });
});
  
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
    const url = changeInfo.pendingUrl || changeInfo.url;
    if (!url || !url.startsWith("http")) {
        return;
    }
  
    const hostname = new URL(url).hostname;
  
    chrome.storage.sync.get(["blocked", "enabled"], function (sync) {
        const { blocked, enabled } = sync;
        if (Array.isArray(blocked) && enabled && blocked.find(domain => hostname.includes(domain))) {
            chrome.tabs.remove(tabId);
        }
    });
});


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    if(typeof(message) === typeof("abc")){
        alert(message);
        return;
    }
    var t = message;
    alert("Timer Set")
    // var y = setInterval(function() {t--; sendResponse({to: (t>0 ? t : 0)})}, 1000);
    setTimeout(function() { alert("It's time to grab a coffee :)"); }, message);
        // var y = setInterval(timechk, 1000);
        // var curr = false;
        // function timechk(){
        //     alert(message)
        //     var startime = new Date();
        //     var tot2 = startime.getHours()*60*60*1000 + startime.getMinutes()*60*1000 + startime.getSeconds()*1000;
        //     if(message ==tot2 && curr == true){
        //         alert("It's time to grab a coffee :)")
        //         curr = false;
        //     }
        // }
    
}

const startingminutes = 0;
let time = startingminutes * 3600;

setInterval(updateCountdown, 1000);
window.hours = 0;
window.minutes = 0;
window.seconds = 0;


function updateCountdown(){
    var timeminutes = time % 3600;
    hours = Math.floor(time / 3600);
    minutes = Math.floor(timeminutes / 60);
    seconds = time % 60;
    time++;
    console.log(time)
}

// chrome.runtime.onStartup.addListener(function() {
//     let hour = 0;
//     console.log("hiiiii")
//     let minute = 0;
//     let seconds = 0;
//     let totalSeconds = 0;
  
//     let intervalId = null;
  
//     intervalId = setInterval(startTimer, 1000);
//     function startTimer() {
//         ++totalSeconds;
//         hour = Math.floor(totalSeconds / 3600);
//         minute = Math.floor((totalSeconds - hour * 3600) / 60);
//         seconds = totalSeconds - (hour * 3600 + minute * 60);

//         document.getElementById("hour").innerHTML = hour;
//         document.getElementById("minute").innerHTML = minute;
//         document.getElementById("seconds").innerHTML = seconds;
//     }
  
    
  
//     document.getElementById('Displplaytimetaken').addEventListener('click', () => {
//         document.getElementById("timetaken").innerHTML = minute + "minutes" + seconds + "seconds";
//         reset();
//     });
  
//     function reset() {
//         totalSeconds = 0;
//         document.getElementById("hour").innerHTML = '0';
//         document.getElementById("minute").innerHTML = '0';
//         document.getElementById("seconds").innerHTML = '0';
//     }
  
// })


