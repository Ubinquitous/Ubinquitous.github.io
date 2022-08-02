const images = [ "background-1.jpg","background-2.jpg","background-3.jpg","background-4.jpg",
                 "background-5.jpg","background-6.jpg","background-7.jpg","background-8.jpg",
                 "background-9.jpg","background-10.jpg","background-11.jpg","background-12.jpg"]

let randomImage = Math.round(Math.random()*images.length);

if(randomImage === 0){
    randomImage = 1;
} else if(randomImage>12){
    randomImage = 12;
}
document.body.style = `background-image:url('../img/background-${randomImage}.jpg')`;