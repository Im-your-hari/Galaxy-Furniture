// self.addEventListener("install",e=>{
//     console.log("sworker changed..")
//     e.waitUntil(
//         caches.open("static").then(cache=>{
//             return cache.addAll(["./","./css/style.css","./images","./js/script.js","./icons"])
//         })
//     )
// })

// self.addEventListener("fetch",e=>{
//     e.respondWith(
//         caches.match(e.request).then(response=>{
//             return response || fetch(e.request)
//         })
//     )
// })