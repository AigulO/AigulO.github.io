
   var aboutlinks = document.getElementsByClassName("about-links");
    var aboutcontents = document.getElementsByClassName("about-contents");
    function openit(label){
      for(aboutlink of aboutlinks){
        aboutlink.classList.remove("oper-link");
      }
      for(aboutcontent of aboutcontents){
        aboutcontent.classList.remove("active-about");
      }
      event.currentTarget.classList.add("oper-link");
      document.getElementById(label).classList.add("active-about");
    }





