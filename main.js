const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 700) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})



// let slider = document.querySelectorAll('.slider .slider');
// let slide = document.querySelector('.slide');



// let pressed = false;
// let startx;
// let x;

// slider.addEventListener("mousedown", (e)=>{
//   pressed = true;
//   startx = e.offsetX;
//   // console.log(startx);

//   console.log('hello')
// })

// let [...elements] = document.querySelectorAll('main .slider .slide');

// .forEach(element => {
//   element.addEventListener('click', ()=> {
//     console.log('hello');
//   });
// });


// function Clicked() {
//   console.log("clicked");
// }

// document.querySelector('.slider').addEventListener('click', ()=>{
//   console.log('hello');
// })




