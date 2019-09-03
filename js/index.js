// Your code goes here


//#1 - mouseover

document.querySelectorAll('.nav a').forEach((link) =>{
    link.addEventListener('mouseover', (event) =>{
        event.target.style.opacity ='0.5';

    link.addEventListener('mouseout', (event) =>{
        event.target.style.opacity = '1'
    })

    })
})


//#2 - keydown 

window.addEventListener('keydown' , (event) => {
    event.preventDefault();
})     



//#3 - resize


window.addEventListener('resize', () => {
    if (!document.body.style.color) {
      document.body.style.opacity = 1;
    }
    document.body.style.opacity = Number(document.body.style.opacity) * 0.9;

    setTimeout(function() {
        document.body.style.opacity = 1;
      }, 10000);
  });




  //#4 - scroll 

  const paragraphs = document.querySelectorAll('p')

  document.addEventListener('scroll', () => {
    paragraphs.forEach((p)=>{
        p.style.backgroundColor = 'black';
        p.style.color = 'white'

        setTimeout(function() {
            p.style.backgroundColor = 'initial';
          }, 500);

          setTimeout(function() {
            p.style.color = 'initial';
          }, 500);
    })
})


//#5

bannerImage = document.querySelector('header img')
bannerImage.addEventListener('dblclick', (event) => {
    event.target.style.display = 'none';

    setTimeout(function() {
        event.target.style.display = 'initial';
      }, 500);
})


//#6

buttons = document.querySelectorAll('.btn')
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'green';
        event.target.style.color = 'white'

        setTimeout(function() {
            event.target.style.backgroundColor = '#17A2B8';
          }, 500);

    })
})



//#7 - wheel 



buttons.forEach((button)=>{
    button.addEventListener('wheel', (event) => {
        event.target.style.fontSize = '25px';

        setTimeout(function() {
            event.target.style.fontSize = 'initial';
          }, 2000);
    })
})



//#8 - mousedown

const header = document.querySelectorAll('h1,h2,h4')

header.forEach((headers)=>{
    headers.addEventListener('mousedown', (event)=>{
        event.target.style.color = "blue";

        setTimeout(function() {
            event.target.style.color = "initial";
          }, 1000);
    })
})



//#9 

const headerImg = document.querySelector(".img-content img");
headerImg.addEventListener('mouseenter', (event)=>{

    headerImg.style.opacity = "0.6";

}) 



//#10 - dragover

document.body.addEventListener('dragover', (event) => {
    event.preventDefault();
});