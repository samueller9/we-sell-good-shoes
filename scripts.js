/*************
testimonial section
**************/

//three dots
const nextNext = document.getElementById('next-next')
const next = document.getElementById('next');
const prev = document.getElementById('prev');

//individual testimonials
const testimonial1 = document.querySelector('.testimonial1');
const testimonial2 = document.querySelector('.testimonial2');
const testimonial3 = document.querySelector('.testimonial3')

//testimonial parent container
const tests = document.querySelector('.tests');

  let nextNextInt = window.setInterval(function() {
    //check for and remove second class
    if (tests.classList.contains('second')) {
      tests.classList.remove('second');

      //add the class which shows the third testimonial
      tests.classList.add('third');
    }

  }, 4000)


  let nextint = window.setInterval(function() {
    //check for and remove first class
    if (tests.classList.contains('first')) {
      tests.classList.remove('first');

      //add the class that shows the second testimonial
      tests.classList.add('second');
    }

  }, 8000)

  let prevint = window.setInterval(function() {
    //check for and remove third class
    if (tests.classList.contains('third')) {
      tests.classList.remove('third');

      //add the class that has the first testimonial
      tests.classList.add('first');
    }
  }, 16000)

  /////////////FAQ accordion section///////////////


//delcare default vars
const acc = document.getElementsByClassName("accordion");

//loop through all accordion buttons
for (let i = 0; i < acc.length; i++) {

  //trigger an event after click
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    let panel = this.nextElementSibling;

    //if sibling is open, close it, if closed, open it
    if (panel.style.maxHeight){
      //panel is open
      panel.style.maxHeight = null;

    } else {
      //panel is closed
      panel.style.maxHeight = panel.scrollHeight + "px";

    }
  });
}
