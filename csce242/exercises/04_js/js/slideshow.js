// slideshow.js

setInterval(() => {
    console.log("Hi Tristen");
  
    const currentSlide = document.querySelector("#slideshow :not(.hidden)");
    let nextSlide = currentSlide.nextElementSibling;

    if(nextSlide == null){
        nextSlide = document.querySelector("#slideshow :first-child");
    }

    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
    
    // Log the results to the console
    console.log("Current Slide:", currentSlide);
    console.log("Next Slide:", nextSlide);
  }, 3000);
  