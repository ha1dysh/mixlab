let e=1;function t(t){let l,n=document.getElementsByClassName("reviews-card"),s=document.getElementsByClassName("slider-dots_item");for(t>n.length&&(e=1),t<1&&(e=n.length),l=0;l<n.length;l++)n[l].style.display="none";for(l=0;l<s.length;l++)s[l].className=s[l].className.replace(" active","");n[e-1].style.display="flex",s[e-1].className+=" active"}t(e);let l=document.getElementById("next"),n=document.getElementById("prev");l.addEventListener("click",(function(){t(e+=1)})),n.addEventListener("click",(function(){t(e-=1)})),t();
//# sourceMappingURL=index.2d86205e.js.map
