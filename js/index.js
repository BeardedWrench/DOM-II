const head = document.querySelector('.main-navigation');
const links = document.querySelectorAll('.nav-link');
const intro = document.querySelector('.intro');
const destinations = document.querySelectorAll('.destination');
const footer = document.querySelector('.footer');
const imgs = document.querySelectorAll('.img-content');
const btns = document.querySelectorAll('.btn');
const ps = document.querySelectorAll( 'p' );

btns[0].addEventListener( 'click', function( event ){
    btns[0].style.background = "green";
})
head.addEventListener( 'mouseover', function( event ){
    head.style.background = "blue";
})
head.addEventListener( 'mouseleave', function( event ){
    head.style.background = "white";
})
links[0].addEventListener( 'dblclick', function( event ){
    head.style.background = "red"
})
document.addEventListener( 'keydown', function( event ){
    if( event.key === "w" ){
        intro.style.background = "blue";
    }
})
destinations[1].addEventListener('wheel', event => {
    event.stopPropagation();
    let scale = 1;
    scale += event.deltaY * -0.01;
    event.target.style.transform = "rotate(7deg)"
});

ps[0].addEventListener( 'copy', function( event ){
    alert("DONT COPY MY TEXT");
})
footer.addEventListener( 'click', function( event ){
    footer.style.background = "red";
})
imgs[0].addEventListener( 'mouseup', function( event ){
    alert("you found me");
})
links[2].addEventListener( 'click', function( event ){
    links[2].style.color = "blue";
})

links.forEach( link => link.preventDefault());