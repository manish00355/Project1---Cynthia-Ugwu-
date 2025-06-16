document.addEventListener("DOMContentLoaded", function () {
  // LOCOMOTIVE SCROLL
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    
  });

  // MOUSE FOLLOWER
const minicircle = document.querySelector("#minicircle");
if (minicircle) {
  window.addEventListener("mousemove", function (event) {
    minicircle.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  });
} else {
  console.error("minicircle not found");
}
});


function firstPageAni(){
     var tl = gsap.timeline();

     tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,

        ease:"expo.inOut",
     })
     .to(".boundingelem",{
        y:0,

       

        ease:Expo.easeInOut,
         duration:2,
          delay:-1,
        stagger:0.4,
     })
     .from("#footer",{
        y:'-10',
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
     })
}
firstPageAni();

function circleSkew(){
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

   window.addEventListener("mousemove" , function (dets){
    

    var xdiff= dets.clientX - xprev;
    var ydiff = dets.clientY - yprev;

 xscale =     gsap.utils.clamp(.2 ,1.4,xdiff);
    yscale =    gsap.utils.clamp(.2 ,1.4,ydiff);

     xprev = dets.clientX;
       yprev = dets.clientY;
  


   });
}
circleSkew();


document.querySelectorAll(".elem").forEach(function (elem) {
  const image = elem.querySelector("img");
  let rotate = 0;
  let diffrot = 0;

  elem.addEventListener("mousemove", function (e) {
    const bounds = elem.getBoundingClientRect();
    const relX = e.clientX - bounds.left;
    const relY = e.clientY - bounds.top;

    diffrot = e.clientX - rotate;
    rotate = e.clientX;

    gsap.to(image, {
      opacity: 1,
      left: relX,
      top: relY,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      ease: "power2.out",
      duration: 0.3
    });
  });

  elem.addEventListener("mouseleave", function () {
    gsap.to(image, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

