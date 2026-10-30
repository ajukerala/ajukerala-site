document.querySelectorAll(".pill").forEach(function(b){
  b.addEventListener("click",function(){
    document.querySelectorAll(".pill").forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")});
    var f=b.dataset.f;
    document.querySelectorAll(".card").forEach(function(c){c.hidden=!(f==="all"||c.dataset.c===f)});
  });
});


(function(){var m=document.querySelector(".menu"),u=document.querySelector("nav ul");
if(m){m.addEventListener("click",function(){var o=u.classList.toggle("open");m.setAttribute("aria-expanded",o)});u.addEventListener("click",function(e){if(e.target.tagName==="A")u.classList.remove("open")})}
document.querySelectorAll("form[data-enquiry]").forEach(function(f){var s=f.querySelector(".status");f.addEventListener("submit",function(e){e.preventDefault();s.className="status";if(!f.checkValidity()){s.textContent="Please fill in the highlighted fields.";s.classList.add("err");f.reportValidity();return}
var d=[].map.call(f.elements,function(x){return x.name&&x.value?x.name+": "+x.value:""}).filter(Boolean).join("\n");
location.href="mailto:ajuvrfrd@gmail.com?subject="+encodeURIComponent("Enquiry: "+f.dataset.enquiry)+"&body="+encodeURIComponent(d);
s.textContent="Opening your email app to send this enquiry…";s.classList.add("ok")})})})();
document.querySelectorAll("[data-share]").forEach(function(b){
  b.addEventListener("click",function(){
    var url=b.dataset.url,note=b.closest(".cn-card").querySelector(".cn-note");
    function say(t){if(note)note.textContent=t}
    if(navigator.share){
      navigator.share({title:"Connect with Aju Kerala S",text:"Website, social media and WhatsApp in one place.",url:url}).catch(function(){});
    }else if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(url).then(function(){say("Link copied: "+url)},function(){say(url)});
    }else{say(url)}
  });
});


