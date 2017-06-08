var imageCount = 1; 
var total = 8;

function slide(x) {
    var image = document.getElementById("img");
    imageCount = imageCount + x;
    
    if(imageCount > total) { imageCount = 1;}
    if(imageCount < 1) { imageCount = total;}
       
    img.src = "img/img" + imageCount + ".gif";
}

window.setInterval (function slideA() {
    var image = document.getElementById("img");
//    imageCount = imageCount + 1;
    
    if(imageCount > total) { imageCount = 1;}
    if(imageCount < 1) { imageCount = total;}
       
    image.src = "img/img" + imageCount + ".gif";
},5000);