const contents = ["First content" , "Second content", "Third content"]
var i=0
for(i=0;i<3;i++){
    a = document.getElementById("change-text")
    a.innerHTML = contents[i]   
}