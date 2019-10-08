# Tutorial Code from Animating an Isometric SVG with GSAP and Scroll Magic on YouTube Channel MilkIsNice

Source URL for Part 1: https://www.youtube.com/watch?v=_ukSvE5tMrU

## Notes
* First step is separating larger vector illustration into component SVGs. No shortcuts here. 
* Next, the author uses http://www.initializr.com/ as an HTML starter package. I'm reticent about the inclusion of jQuery, and I hope it doesn't get too involved there, as I try to avoid jQuery at all costs, perhaps without proper reason. 
* Crucial CSS to center image: 
```css
.container {
    width: 800px;
    height: 800px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
```

