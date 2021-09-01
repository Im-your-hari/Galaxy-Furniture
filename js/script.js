//Content Changing Animation
var contents = [
     "കേരളത്തിലുടനീളം കേരളത്തിന്റെ സ്വന്തം Galaxy Furniture Factory. <br> മിതമായ നിരക്കിൽ ഗുണമേന്മയേറിയ ഫർണീച്ചർ ഉത്പന്നങ്ങൾ. <br> കേരളീയരുടെ No.1 Choice.",
      "2004 മുതൽ തുടർച്ചയായ വിശ്വസ്തമായ മികച്ച സേവനം. <br> ഇരുളിലും ആഞ്ഞിലിയിലും നിർമിച്ച അപൂർവ്വവും പുതുമയേറിയതുമായ ഉത്പന്നങ്ങൾ.<br> കേരളത്തിലെവിടെയും സൗജന്യ ഡെലിവറി.",
      "Galaxy Furniture നിങ്ങൾക്കായി ഒരുക്കുന്നു വിശാലമായ കളക്ഷൻസ്. <br> എല്ലാത്തരം Wooden and Modern ഫർണീച്ചറുകൾ ഇനി ഒരു കുടകീഴിൽ.<br>5 വർഷ വാറണ്ടിയോടുകൂടി." ,
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
        await timer(3000)
        //console.log(contents[i])
        document.getElementById("change-text").innerHTML = contents[i]
    }
    disp()
}

disp()
