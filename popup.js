$(function () {
    setDate();

    var todoList = new Array();
    var completed = new Array();
    // var today = new Date();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // console.log(time);
    // if(time >= "16:9:0")chrome.storage.sync.clear(); 

    chrome.storage.sync.get(['list1'], function (val) {
        if (val.list1.length > 0)
            todoList = val.list1;
        console.log("val.list1 :" + val.list1);
        //displaying the old items
        for (var i = 0; i < todoList.length; i++) {
            addListItem(todoList[i]);
        }


    })

    // chrome.storage.sync.get(['list2'], function (val) {
    //     if (val.list2.length > 0)
    //         completed = val.list2;
    //     console.log("val.list2 :" + val.list2);
    //     //displaying the old items
    //     for (var i = 0; i < completed.length; i++) {
    //         addListItem(completed[i]);
    //     }


    // })


    $('#Additem').click(function () {
        
        var newTask = $('#todo').val();
        todoList.push(newTask);
        addListItem(newTask);
        // adding the new list back to chrome storage
        chrome.storage.sync.set({
            'list1': todoList
        })
    });

    function addListItem(value) {
        document.getElementById("todo").value = "";
        var ul = document.getElementById("list-items");
        addUI(ul, value);
    }

    function addUI(ul, value) {
        var li = document.createElement("li");
        li.className = "hash";
        var div = document.createElement("div");
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
        span1.className = "checked";
        span2.className = "close";
        span1.appendChild(document.createTextNode("\u2714" ));
        span2.appendChild(document.createTextNode("\u274c"));
        div.appendChild(span1);
        div.appendChild(span2);
        li.appendChild(document.createTextNode(value));
        li.appendChild(div);
        ul.appendChild(li);
        


        // var span = document.createElement("SPAN");
        // var txt = document.createTextNode("\u00D7");
        // var txt2 = document.createTextNode("\u2713");
        // span.className = "close";
        // // span.appendChild(txt2);
        // // $("span").addClass("close");
        // span.appendChild(txt);
        // li.appendChild(span);

        $(".close").click(function () {
            var index = $(this).index(".close");
            console.log(index);
            var div = this.parentElement;
            var div2 = div.parentElement;
            div2.style.display = "none";
            removeItem(index);
            $(".close").eq(index).remove();


        })

        $(".checked").click(function (){




            var p1 = this.parentElement;
            var p2 = p1.parentElement;
            p2.style.textDecoration = "line-through";
            p2.style.backgroundColor = "grey";
            var index = $(this).index(".checked");
            $(".checked").eq(index).remove();
            // var oldTask = p2.value;
            // completed.push(oldTask);
            // var ul2 = document.getElementById("completed-items");
            // var li = document.createElement("li");
            // li.className = "hash2";
            // li.appendChild(document.createTextNode(value));
            // ul2.appendChild(li);
            // // adding the new list back to chrome storage
            // chrome.storage.sync.set({
            //     'list2': completed
            // })






            // var index = $(this).index(".close");
            // console.log(index);
            // var div = this.parentElement;
            // var div2 = div.parentElement;
            // div2.style.display = "none";
            // removeItem(index);
            // $(".close").eq(index).remove();
        })
    }

    function removeItem(itemIndex) {
        console.log("removeitem");
        chrome.storage.sync.get(['list1'], function (val) {
            todoList = val.list1;
            todoList.splice(itemIndex, 1);
            console.log("new list", todoList);

            chrome.storage.sync.set({
                'list1': todoList
            })

        })

    }

    function setDate(){
        var today = new Date();
        console.log(today);
        var locale = "en-us";
        var day = today.toLocaleDateString(locale, {weekday : "long"});
        var month = today.toLocaleDateString(locale, {month : "long"});

        document.getElementById("date").innerHTML = "Task checklist for " + day + ", " + today.getDate()  + " " + month;
    }
})