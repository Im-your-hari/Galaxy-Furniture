//Content Changing Animation
var contents = [
     "കേരളത്തിലുടനീളം കേരളത്തിന്റെ സ്വന്തം Galaxy Furniture Factory. <br> മിതമായ നിരക്കിൽ ഗുണമേന്മയേറിയ ഫർണീച്ചർ ഉത്പന്നങ്ങൾ. <br> കേരളീയരുടെ No.1 Choice - Galaxy Furniture.",
      "2004 മുതൽ തുടർച്ചയായ വിശ്വാസ്തമായ മികച്ച സേവനം. <br> കേരളത്തിലുടനീളം, തികച്ചും സൗജന്യ ഡെലിവറി സർവീസ്.",
      "17000 രൂപ മുതൽ എല്ലാത്തരം ഫർണിച്ചറുകളുടെയും വിശാലമായ കളക്ഷൻസ് " ,
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


// script for gallery

function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }


