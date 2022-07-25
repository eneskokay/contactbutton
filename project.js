
const buttoncontainer = document.getElementById("button_container");
const contact = document.getElementById("contact_button");
const container = document.getElementById("container");
const anim = document.getElementById("anim");
let hrefscontainer = document.getElementById("hrefscontainer");
const Abutton = document.getElementsByClassName("button")[2];
let ButtonLocation = Abutton.getBoundingClientRect();

   let locations = Abutton.getBoundingClientRect();
   let interval; 

   document.addEventListener("mouseover", function(event){

      if(container.contains(event.target) && !anim.contains(event.target)){
         if(interval !== undefined) {clearInterval(interval);}
         anim.classList.add("none");
      }



      let hrefscontainer = document.querySelectorAll("#hrefscontainer a");
   
function elementsOverlap(el1, el2) {
  const domRect1 = el1.getBoundingClientRect();
  const domRect2 = el2.getBoundingClientRect();


  let greater = !( 
    domRect1.top > domRect2.top
  );

  if(greater === true){
   return {greater:greater};
  }

   let less = !( 
    domRect1.bottom < domRect2.top
  );

  return {greater:greater, less:less};

}
let hrefs = buttoncontainer.getElementsByClassName("button"); 
hrefs = Array.from(hrefs);


setInterval(function() {

   hrefs.forEach((element,index2) => {

let result = elementsOverlap(element,contact);
if(result.greater === true){
   hrefscontainer.forEach((items, index) => {
         if(items.children[0] === element){
            items.classList.remove("none");
         }
      });
}

});

hrefs.forEach(element => {
   let result = elementsOverlap(element,contact);

   if(result.less !== undefined){

   if(result.less === true){
      hrefscontainer.forEach(items => {
         if(items.children[0] === element){
            items.classList.add("none");
         }
      });
   }

}

});
}, 10);

});

container.addEventListener("mouseleave", function(event){
   interval = setTimeout(() => {
         anim.classList.remove("none");
   }, 1500);

  });

