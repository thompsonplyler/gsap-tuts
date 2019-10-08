  
   let tweenAnimIn = new TimelineMax ()
   
        tweenAnimIn 
        .set(".h1-header", {autoAlpha:0})
        .from(".img1", 1, {x: -300, y:-200, autoAlpha: 0, ease:Power2.easeOut})
        .from(".img3", 1, {y:300, autoAlpha: 0, ease:Power2.easeOut}, "-=1")
        .from(".img4", 1, {x: 300, y:-500, autoAlpha: 0, ease:Power2.easeOut}, "-=1")
        .from(".img6", 1, {x: 300, y:-300, autoAlpha: 0, ease:Power2.easeOut}, "-=1")
        .from(".img10", 1, { y:600, autoAlpha: 0, ease:Power2.easeOut}, "-=1")
        .from(".img11", 1, { x:-400, y:100, autoAlpha: 0, ease:Power2.easeOut}, "-=1")
        .from(".img12", 1, { x:600, y:600, autoAlpha: 0, ease:Power2.easeOut}, "-=1")
        .from(".img13", 1, { x:0, y:-600, autoAlpha: 0, ease:Power2.easeOut}, "-=1")


let controller = new ScrollMagic.Controller();

let scrollOutAnim = new TimelineMax()
    .add([
        TweenMax.to(".h1-header", 1, {autoAlpha:1}),
        TweenMax.to(".img1", 1, {x: -300, y:-200, autoAlpha: 0}),
        TweenMax.to(".img3", 1, {y:300, autoAlpha: 0}),
        TweenMax.to(".img4", 1, {x: 300, y:-500, autoAlpha: 0}),
        TweenMax.to(".img6", 1, {x: 300, y:-300, autoAlpha: 0}),
        TweenMax.to(".img10", 1, {y:600, autoAlpha: 0}),
        TweenMax.to(".img11", 1, {y:500, x: -500, autoAlpha: 0}),
        TweenMax.to(".img12", 1, {y:600, x: 600, autoAlpha: 0}),
        TweenMax.to(".img13", 1, {y:-600, x: 0, autoAlpha: 0}),
        
    
    ]);


//build Scene 
 let scrollScene = new ScrollMagic.Scene({
     triggerElement: '#tech-workplace-trigger',
     triggerHook:0,
     duration: "100%"})
     
    .setTween(scrollOutAnim)
    .setPin(".pin-office")
    .addTo(controller);