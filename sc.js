if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sworker.js").then(registration=>{
        console.log("Sworker registered")
        console.log(registration)
    }).catch(err=>{
        console.log("Sworker error: " + err)
    })
}
else{
    console.log("Sworker not working")
}