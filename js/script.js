var contents = [
     "Second content",
      "Third content",
      "First content" ,
]
function timer(ms){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('')},ms
        )
    })
}

async function disp(){
    for(i=0;i<3;i++){
        await timer(2000)
        //console.log(contents[i])
        document.getElementById("change-text").innerHTML = contents[i]
    }
    disp()
}

disp()