let tlFirstScroll = new TimelineMax();

tlFirstScroll
.set('.iphone-image-wrapper', {scale: 4, transformOrigin: "center top"})
.to('.iphone-image-wrapper',3,{scale:2.2 ,y:'30%'})
.to('.iphone-image-wrapper',3,{scale:.5,y:'10%'});

let controller = new ScrollMagic.Controller();

// Scene 1 

let scene1 = new ScrollMagic.Scene({
    triggerElement: '.trigger1',
    duration: "100%",
    triggerHook: 0
})
.setTween(tlFirstScroll)
.addIndicators()
.addTo(controller)

let tlSecondScroll = new TimelineMax();

tlSecondScroll
.to('.iphone1', 3, {x: "-100%"})
.to('.iphone2', 3, {x: "100%"}, "-=3")
.set('.iphone-stick', {x:"1%"}, "-=3")


.from('.iphone1-text', 0.3, {autoAlpha: 0}, "-=3")
.from('.iphone2-text', 0.3, {autoAlpha: 0}, "-=3")

.to('.iphone1-text', 3, {x:"-480%"}, "-=3")
.to('.iphone2-text', 3, {x:"450%"}, "-=3")

// .set('.iphone-stick', {x: "48%"}, "-=2")


.to('.iphone1-img-behind', 3, {x:"0%"}, "-=3")
.to('.iphone2-img-behind', 3, {x:"0%"}, "-=3")

.to('.iphone-stick', .6, {opacity: 1 }, "-=2")
.to('.iphone1-img',0.5, {autoAlpha:0}, "-=2")
.to('.iphone2-img',0.5, {autoAlpha:0}, "-=2")

.to('.iphone1-text', .8, {autoAlpha: 0}, "-=1")
.to('.iphone2-text', .8, {autoAlpha: 0}, "-=1")

let scene2 = new ScrollMagic.Scene({
    triggerElement: '.trigger2',
        triggerHook: 0,
    duration: "100%"
})
.setTween(tlSecondScroll)
.setPin('.trigger2')
.addIndicators()
.addTo(controller);




