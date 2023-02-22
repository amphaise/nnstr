var i=0;
setInterval(function(){
    var titles=[
"|a|",
"|am|",
"|amph|",
"|amphai|",
"|amphaise|",
"|amphai|",
"|amph|",
"|am|",
"|a|",
"||",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);

