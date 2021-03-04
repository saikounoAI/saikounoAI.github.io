function isMobile() {
    return navigator.userAgent.indexOf('Mobi') > -1;
  }

  if(isMobile()){
        var wrapper=document.getElementsByClassName("wrapper");
        var title=document.getElementsById("title");
        var profile=document.getElementsById("profile");
        var circle=document.getElementsByClassName("circle");
        var check=document.getElementsById("check");

        wrapper.style.width="80%";
  }