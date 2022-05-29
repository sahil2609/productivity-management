var hstart, mstart, sstart , hend, mend, send;

var curr;
document.getElementById("mybutton").onclick = function () {
    console.log("function is called");
    hstart = document.getElementById("in1").value;
    mstart = document.getElementById("in2").value;
    sstart = document.getElementById("in3").value;
    hend = document.getElementById("in_1").value;
    mend = document.getElementById("in_2").value;
    send = document.getElementById("in_3").value;
    // chrome.runtime.sendMassage({
    //     from: "breaktime1",
    //     first1: h,
    //     second1: m,
    //     third1: s,
    //     first2: h1,
    //     second2: m1,
    //     third2: s1
    // });
    curr = true;
    alert("Time set");
}
var y = setInterval(timechk, 1000)

const blocked = [];
// blocked = []
// curr = false
// alert("break Endes");
function timechk(){
    // chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    //     let url = tabs[0].url;
    //     blocked.push(url)
    //     chrome.storage.sync.set({ blocked });
    //     // use `url` here inside the callback because it's asynchronous!
    // });
    // console.log(blocked)
    // const enabled = true;
    // chrome.storage.sync.set({enabled});
    // window.addEventListener("DOMContentLoaded", () => {
    //     chrome.storage.sync.get(["blocked", "enabled"], function (sync) {
    //       const { blocked, enabled } = sync;
    //       if (Array.isArray(blocked)) {
    //         textarea.value = blocked.join("\n");
    //       }
    //     });
    // });
    var today = new Date();
    var hcurr = today.getHours();
    var mcurr = today.getMinutes();
    var scurr = today.getSeconds();
    if(hcurr==hstart && mcurr== mstart && scurr== sstart)
    {
        alert("Time to chill");
        var urls;
        chrome.webRequest.onBeforeRequest.addListener(
        function (details) { return { cancel: curr }; },

        urls = {
            urls: []
        },

        ["blocking"]
        );
    }


    if(hcurr >= hend && mcurr>=mend && scurr >=send && curr == true)
    {
        curr = false
        alert("Get back to work");
    }
}