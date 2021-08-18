/*
!function (){
    $("#change-text").Morphext({
        animation : "fadeIn",
        seperator : ",",
        speed : 2000,
        complete : function(){}
    });
}
*/

var contents = ["First content" , "Second content", "Third content"]
var i=0
/*
for(i=0;i<3;i++){
    a = document.getElementById("change-text")
    var h = contents[i]
    setTimeout(
        (h)=>{
            a.innerHTML = h
            console.log(h)
            console.log(a)
        },2000
    );
    //a.innerHTML = contents[i]   
}
*/
setTimeout(
    ()=>{for(i=0;i<3;i++){
    a = document.getElementById("change-text")
    var h = contents[i]
    task(i)
    //a.innerHTML = contents[i]   
}
    },2000)
function task(i){
    console.log(contents[i])
    setTimeout(function(){
        a.innerHTML = contents[i]
        console.log(contents[i])
    },5000)
}
