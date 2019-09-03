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