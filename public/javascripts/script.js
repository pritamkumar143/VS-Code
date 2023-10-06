var openform=0;
    document.querySelector("#fileicon")
    .addEventListener("click",function(){
      if(openform===0){
        document.querySelector(".fileform").style.display ="initial";
        openform=1;
      }
      else{
        document.querySelector(".fileform").style.display ="none";
        openform=0;
      }
    })
