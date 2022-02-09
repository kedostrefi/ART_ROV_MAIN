colors = [
   "red",
   "yellow",
   "blue",
   "gray"
]

document.addEventListener("DOMContentLoaded", function(){
   // add padding top to show content behind navbar
   navbar_height = document.querySelector('.navbar.fixed-top').offsetHeight;
   document.body.style.paddingTop = navbar_height + 'px';

   let title = document.getElementById("rand-title")
   let footer = document.getElementById("rand-footer")
   let randomColor = Math.floor(Math.random() * colors.length);
   if(title != null){
      title.classList.add("headline-" + colors[randomColor])
   }
   if(footer != null){
      footer.classList.add("footer-" + colors[randomColor])
   }
});

if (window.matchMedia("(max-width: 768px)").matches) {
   footer_cols = document.querySelector("footer").querySelectorAll(".d-flex")
   footer_cols.forEach(c => {
      c.classList.remove("flex-column")
      c.classList.add("flex-row")
      c.classList.add("my-3")
      c.querySelector("a").classList.add("w-100")
      c.querySelector("a").classList.add("text-center")
   })
}

if (window.matchMedia("(min-width: 768px)").matches) {
   footer_cols = document.querySelector("footer").querySelectorAll(".d-flex")
   footer_cols.forEach(c => {
      c.classList.remove("flex-row")
      c.classList.remove("my-3")
      c.classList.add("flex-column")
      c.querySelector("a").classList.remove("w-100")
      c.querySelector("a").classList.remove("text-center")
   })
}